import os
import time
import replicate
from dotenv import load_dotenv
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from sentence_transformers import SentenceTransformer
from pinecone import Pinecone
from collections import defaultdict
import traceback

# Rate limiting setup
usage_tracker = defaultdict(lambda: {"count": 0, "last_reset": time.time()})
MAX_REQUESTS = 5
WEEK_SECONDS = 604800  # 7 days

# Load env vars
load_dotenv()
REPLICATE_API_TOKEN = os.getenv("REPLICATE_API_TOKEN")
PINECONE_API_KEY = os.getenv("PINECONE_API_KEY")

# Set token for replicate
os.environ["REPLICATE_API_TOKEN"] = REPLICATE_API_TOKEN

# Init Pinecone and embedding model
pc = Pinecone(api_key=PINECONE_API_KEY)
index = pc.Index("paulbot-index")
model = SentenceTransformer("all-MiniLM-L6-v2")

# FastAPI app
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://paul-wolfe-portfolio.vercel.app","https://paulwolfe.dev"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class QuestionRequest(BaseModel):
    question: str

@app.post("/ask-paulbot")
async def ask_paulbot(req: Request, body: QuestionRequest):
    client_ip = req.client.host
    usage = usage_tracker[client_ip]
    now = time.time()

    # Reset weekly
    if now - usage["last_reset"] > WEEK_SECONDS:
        usage_tracker[client_ip] = {"count": 0, "last_reset": now}

    if usage_tracker[client_ip]["count"] >= MAX_REQUESTS:
        return {"answer": "⚠️ You've reached your weekly limit of 5 messages. Come back next week!"}

    usage_tracker[client_ip]["count"] += 1

    question = body.question.strip()
    print(f"❓ Question received from {client_ip}: {question}")

    # Embed question and retrieve context
    embedding = model.encode(question).tolist()
    results = index.query(vector=embedding, top_k=3, include_metadata=True)
    context_chunks = [match["metadata"]["text"] for match in results["matches"]]
    context = "\n".join(context_chunks)

    # Format the prompt
    prompt = f"""
[INST] <<SYS>>
You are PaulBot, an intelligent assistant for Paul Wolfe.

Facts:
- Paul's email is paulwolfe0313@gmail.com
- GitHub: https://github.com/paulwolfe0313
- Certified in Tableau, Data Analytics, and AI Engineering.
- Experienced in full-stack AI development, React, and cloud architecture.
<</SYS>>

Context:
{context}

Question: {question}
[/INST]
""".strip()

    try:
        print("📡 Sending to Replicate...")
        output = replicate.run(
            "meta/meta-llama-3-8b-instruct",
            input={"prompt": prompt, "max_new_tokens": 200}
        )
        response_text = "".join(output).strip()
        print("🧠 PaulBot response:", response_text)
        return {"answer": response_text}
    except Exception as e:
        print("❌ Replicate Error:", e)
        traceback.print_exc()  # 👈 This will print full stack trace
        return {"answer": f"PaulBot encountered an error: {str(e)}"}
