# Auth endpoints (login/signup) for Buildzy backend
from fastapi import APIRouter, HTTPException

router = APIRouter()

@router.post("/login")
def login():
    # Implement login logic
    pass

@router.post("/signup")
def signup():
    # Implement signup logic
    pass