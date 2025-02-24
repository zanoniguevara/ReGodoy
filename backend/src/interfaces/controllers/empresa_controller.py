from fastapi import APIRouter, Depends, HTTPException
from typing import List
from src.domain.models.empresa import Empresa, EmpresaCreate, EmpresaUpdate
from src.application.services.empresa_service import EmpresaService
from src.infrastructure.repositories.empresa_repository import EmpresaRepository

router = APIRouter()

def get_empresa_service():
    empresa_repository = EmpresaRepository()
    return EmpresaService(empresa_repository)

@router.post("/empresas/", response_model=Empresa)
def create_empresa(empresa: EmpresaCreate, empresa_service: EmpresaService = Depends(get_empresa_service)):
    created_empresa = empresa_service.create_empresa(empresa)
    if created_empresa:
        return created_empresa
    else:
        raise HTTPException(status_code=500, detail="Failed to create empresa")

@router.get("/empresas/{emp_codigo}", response_model=Empresa)
def get_empresa(emp_codigo: int, empresa_service: EmpresaService = Depends(get_empresa_service)):
    empresa = empresa_service.get_empresa(emp_codigo)
    if empresa:
        return empresa
    else:
        raise HTTPException(status_code=404, detail="Empresa not found")

@router.get("/empresas/", response_model=List[Empresa])
def get_all_empresas(empresa_service: EmpresaService = Depends(get_empresa_service)):
    return empresa_service.get_all_empresas()

@router.put("/empresas/{emp_codigo}", response_model=Empresa)
def update_empresa(emp_codigo: int, empresa: EmpresaUpdate, empresa_service: EmpresaService = Depends(get_empresa_service)):
    updated_empresa = empresa_service.update_empresa(emp_codigo, empresa)
    if updated_empresa:
        return updated_empresa
    else:
        raise HTTPException(status_code=404, detail="Empresa not found")

@router.delete("/empresas/{emp_codigo}")
def delete_empresa(emp_codigo: int, empresa_service: EmpresaService = Depends(get_empresa_service)):
    if empresa_service.delete_empresa(emp_codigo):
        return {"message": "Empresa deleted successfully"}
    else:
        raise HTTPException(status_code=404, detail="Empresa not found")