from fastapi import APIRouter
from src.interfaces.controllers import empresa_controller

router = APIRouter()

router.include_router(empresa_controller.router, prefix="/api/v1", tags=["empresas"])