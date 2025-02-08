from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.schemas.empresa import Empresa, EmpresaCreate, EmpresaUpdate
from app.services.empresa import get_empresa, get_empresas, create_empresa, update_empresa, delete_empresa
from app.db.session import engine, Base, get_db

Base.metadata.create_all(bind=engine)

router = APIRouter()


@router.post("/", response_model=Empresa)
def create_new_empresa(empresa: EmpresaCreate, db: Session = Depends(get_db)):
    return create_empresa(db=db, empresa=empresa)

@router.get("/{empresa_id}", response_model=Empresa)
def read_empresa(empresa_id: int, db: Session = Depends(get_db)):
    db_empresa = get_empresa(db, empresa_id)
    if db_empresa is None:
        raise HTTPException(status_code=404, detail="Empresa not found")
    return db_empresa

@router.get("/", response_model=list[Empresa])
def read_empresas(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    empresas = get_empresas(db, skip=skip, limit=limit)
    return empresas

@router.put("/{empresa_id}", response_model=Empresa)
def update_existing_empresa(empresa_id: int, empresa: EmpresaUpdate, db: Session = Depends(get_db)):
    db_empresa = get_empresa(db, empresa_id)
    if db_empresa is None:
        raise HTTPException(status_code=404, detail="Empresa not found")
    return update_empresa(db=db, db_empresa=db_empresa, empresa_update=empresa)

@router.delete("/{empresa_id}", response_model=Empresa)
def delete_existing_empresa(empresa_id: int, db: Session = Depends(get_db)):
    db_empresa = get_empresa(db, empresa_id)
    if db_empresa is None:
        raise HTTPException(status_code=404, detail="Empresa not found")
    return delete_empresa(db=db, empresa_id=empresa_id)
