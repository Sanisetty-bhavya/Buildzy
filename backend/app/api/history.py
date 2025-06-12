# history.py

from fastapi import APIRouter, Depends
from app.db.mongo import db

router = APIRouter()

@router.get("/history")
async def get_history():
    # TODO: Fetch history from MongoDB
    return []

@router.post("/history")
async def save_history(item: dict):
    # TODO: Save history item to MongoDB
    return {"status": "saved"}