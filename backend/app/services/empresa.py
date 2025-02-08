from sqlalchemy.orm import Session
from app.models.empresa import Empresa
from app.schemas.empresa import EmpresaCreate, EmpresaUpdate

def get_empresa(db: Session, empresa_id: int):
    return db.query(Empresa).filter(Empresa.Emp_Codigo == empresa_id).first()

def get_empresas(db: Session, skip: int = 0, limit: int = 100):
    return db.query(Empresa).order_by(Empresa.Emp_Codigo).offset(skip).limit(limit).all()

def create_empresa(db: Session, empresa: EmpresaCreate):
    db_empresa = Empresa(**empresa.dict())
    db.add(db_empresa)
    db.commit()
    db.refresh(db_empresa)
    return db_empresa

def update_empresa(db: Session, db_empresa: Empresa, empresa_update: EmpresaUpdate):
    update_data = empresa_update.dict(exclude_unset=True)
    for key, value in update_data.items():
        setattr(db_empresa, key, value)
    db.commit()
    db.refresh(db_empresa)
    return db_empresa

def delete_empresa(db: Session, empresa_id: int):
    db_empresa = get_empresa(db, empresa_id)
    if db_empresa:
        db.delete(db_empresa)
        db.commit()
    return db_empresa
