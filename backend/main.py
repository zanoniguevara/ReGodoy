from fastapi import FastAPI
from src.interfaces.routes import empresa_routes

app = FastAPI()

app.include_router(empresa_routes.router)

@app.get("/")
async def root():
    return {"message": "Hello World"}