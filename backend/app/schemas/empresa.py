from pydantic import BaseModel

class EmpresaBase(BaseModel):
    Emp_Nombre: str
    Tip_Codigo: int
    Tgn_Codigo: int
    Est_CodigoEmp: int
    Emp_NatJur: bool
    Nac_Codigo: int
    Emp_Rif_Ci: str = None
    Zon_Codigo: int = None
    Emp_Contacto: str = None
    Emp_Telefono1: str = None
    Emp_Telefono2: str = None
    Emp_Fax: str = None
    Emp_Celular: str = None
    Emp_Apellidos: str = None
    Emp_Correo: str = None
    Emp_Site: str = None
    Emp_RifPerson: str = None
    Emp_RUC: str = None
    Emp_Descripcion: str = None

class EmpresaCreate(EmpresaBase):
    pass

class EmpresaUpdate(EmpresaBase):
    pass

class EmpresaInDBBase(EmpresaBase):
    Emp_Codigo: int

    class Config:
        orm_mode = True

class Empresa(EmpresaInDBBase):
    pass
