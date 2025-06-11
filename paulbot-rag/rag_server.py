import os
from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from sentence_transformers import SentenceTransformer
from pinecone import Pinecone
import requests

# Load environment variables
load_dotenv()
HF_API_KEY = os.getenv("HUGGINGFACE_API_KEY")
PINECONE_API_KEY = os.getenv("PINECONE_API_KEY")
HF_ENDPOINT = "https://kpuy2eoylbeftc0r.us-east-1.aws.endpoints.huggingface.cloud"

# Init Pinecone & model
pc = Pinecone(api_key=PINECONE_API_KEY)
index = pc.Index("paulbot-index")
model = SentenceTransformer("all-MiniLM-L6-v2")

# FastAPI setup
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # for dev, restrict later
    allow_methods=["*"],
    allow_headers=["*"],
)

class QuestionRequest(BaseModel):
    question: str

@app.post("/ask-paulbot")
def ask_paulbot(request: QuestionRequest):
    question = request.question.strip()
    print(f"❓ Question received: {question}")

    # Embed question
    question_embedding = model.encode(question).tolist()

    # Query Pinecone
    results = index.query(vector=question_embedding, top_k=3, include_metadata=True)
    context_chunks = [match["metadata"]["text"] for match in results["matches"]]
    context = "\n".join(context_chunks)

    # Mistral-style prompt
    prompt = f"""
[INST] <<SYS>>
You are PaulBot, an intelligent AI assistant for Paul Wolfe.
Facts:
- Paul's email is paulwolfe0313@gmail.com
- GitHub: https://github.com/paulwolfe0313
- Certified in Tableau, Data Analytics, AI Engineering
- Experienced in full-stack AI, React, cloud architecture
<</SYS>>

Context:
{context}

Question: {question}
[/INST]
"""

    # Send to Hugging Face endpoint
    response = requests.post(
        HF_ENDPOINT,
        headers={
            "Authorization": f"Bearer {HF_API_KEY}",
            "Content-Type": "application/json"
        },
        json={"inputs": prompt, "parameters": {"max_new_tokens": 200}}
    )

    print("📡 Status:", response.status_code)
    print("📡 Raw:", response.text)

    try:
        answer = response.json()[0]["generated_text"].replace(prompt, "").strip()
        print("🧠 PaulBot:", answer)
        return {"answer": answer}
    except Exception as e:
        print("❌ Error:", e)
        return {"answer": "Sorry, something went wrong while answering your question."}
