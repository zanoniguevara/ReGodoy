from fastapi import FastAPI
from app.api import empresa

app = FastAPI()

app.include_router(empresa.router, prefix="/empresas", tags=["empresas"])
