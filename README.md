# Paul Wolfe – AI Portfolio & Intelligent Chatbot (PaulBot)

Welcome to my interactive portfolio website and AI-powered assistant: **PaulBot**. This project combines a professional frontend built in **React** with a powerful, intelligent backend using **FastAPI**, **Pinecone**, and a fine-tuned **Mistral LLM** via Hugging Face.

---

## Live Demo

🌐 [Coming Soon] – or run locally by following the setup instructions below.

---

## Features

### Frontend (React + Tailwind)
- Modern UI showcasing projects, case studies, and contact info
- Custom-built `PaulBot` chat interface for interacting with the AI
- Real-time answers about me, my experience, and how to reach me

### Backend (Python + FastAPI + RAG)
- **Retrieval-Augmented Generation (RAG)** architecture using:
  - `sentence-transformers` for embedding
  - `Pinecone` for vector similarity search
  - Hugging Face **private endpoint** running `mistral-7b-instruct`
- Real-time Q&A: Bot pulls facts from a Pinecone vector store and generates context-aware responses

---

## Tech Stack

| Layer       | Tool / Service                              |
|-------------|---------------------------------------------|
| Frontend    | React, Tailwind CSS                         |
| Backend     | FastAPI, Python                             |
| Embeddings  | `all-MiniLM-L6-v2` (Hugging Face)           |
| Vector DB   | Pinecone                                     |
| LLM         | `mistral-7b-instruct-v0.3` on Hugging Face   |
| Deployment  | Local + Hugging Face Endpoints              |

---

## 🚀 How to Run Locally
