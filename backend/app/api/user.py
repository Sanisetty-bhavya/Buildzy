# User info endpoints for Buildzy backend
from fastapi import APIRouter

router = APIRouter()

@router.get("/user")
def get_user():
    # Implement user info retrieval
    pass