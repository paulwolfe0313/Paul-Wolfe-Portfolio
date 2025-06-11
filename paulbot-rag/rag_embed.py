import os
from dotenv import load_dotenv
from sentence_transformers import SentenceTransformer
from pinecone import Pinecone

load_dotenv()

# Environment variables
api_key = os.getenv("PINECONE_API_KEY")
index_name = "paulbot-index"

# Initialize Pinecone client (v3+)
pc = Pinecone(api_key=api_key)

# Connect to existing pod-based index
index = pc.Index(index_name)

# Load embedding model
model = SentenceTransformer("all-MiniLM-L6-v2")

# Your knowledge data
documents = [
    {
        "id": "1",
        "text": "Paul Wolfe is a Software Engineer and AI Engineer with two Master's degrees."
    },
    {
        "id": "2",
        "text": "He is certified in Tableau and Data Analytics, with credentials from UMHB and Tableau."
    },
    {
        "id": "3",
        "text": "He conducted a research project using GANs to augment seismic data and improve machine learning predictions."
    },
    {
        "id": "4",
        "text": "You can contact Paul via email at paulwolfe0313@gmail.com or view his GitHub: https://github.com/paulwolfe0313."
    },
    {
        "id": "5",
        "text": "Paul teaches Computer Information Systems and specializes in full-stack AI development, React, and cloud architecture."
    }
]

# Encode + upload vectors
vectors = []
for doc in documents:
    embedding = model.encode(doc["text"]).tolist()
    vectors.append({
        "id": doc["id"],
        "values": embedding,
        "metadata": {"text": doc["text"]}
    })

# Upload to Pinecone
index.upsert(vectors=vectors)

print("✅ Embeddings uploaded successfully to Pinecone!")
