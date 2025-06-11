# Entry point for FastAPI app in Buildzy backend
from fastapi import FastAPI
from app.api import auth, user, prompt

app = FastAPI()

app.include_router(auth.router, prefix="/api/auth")
app.include_router(user.router, prefix="/api")
app.include_router(prompt.router, prefix="/api")