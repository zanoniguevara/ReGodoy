from pydantic import BaseModel
from typing import Optional

class Empresa(BaseModel):
    Emp_Codigo: Optional[int] = None
    Emp_Nombre: str
    Tip_Codigo: int
    Tgn_Codigo: int
    Est_CodigoEmp: int
    Emp_NatJur: bool
    Nac_Codigo: int
    Emp_Rif_Ci: Optional[str] = None
    Zon_Codigo: Optional[int] = None
    Emp_Contacto: Optional[str] = None
    Emp_Telefono1: Optional[str] = None
    Emp_Telefono2: Optional[str] = None
    Emp_Fax: Optional[str] = None
    Emp_Celular: Optional[str] = None
    Emp_Apellidos: Optional[str] = None
    Emp_Correo: Optional[str] = None
    Emp_Site: Optional[str] = None
    Emp_RifPerson: Optional[str] = None
    Emp_RUC: Optional[str] = None
    Emp_Descripcion: Optional[str] = None

class EmpresaCreate(BaseModel):
    Emp_Nombre: str
    Tip_Codigo: int
    Tgn_Codigo: int
    Est_CodigoEmp: int
    Emp_NatJur: bool
    Nac_Codigo: int
    Emp_Rif_Ci: Optional[str] = None
    Zon_Codigo: Optional[int] = None
    Emp_Contacto: Optional[str] = None
    Emp_Telefono1: Optional[str] = None
    Emp_Telefono2: Optional[str] = None
    Emp_Fax: Optional[str] = None
    Emp_Celular: Optional[str] = None
    Emp_Apellidos: Optional[str] = None
    Emp_Correo: Optional[str] = None
    Emp_Site: Optional[str] = None
    Emp_RifPerson: Optional[str] = None
    Emp_RUC: Optional[str] = None
    Emp_Descripcion: Optional[str] = None

class EmpresaUpdate(BaseModel):
    Emp_Nombre: Optional[str] = None
    Tip_Codigo: Optional[int] = None
    Tgn_Codigo: Optional[int] = None
    Est_CodigoEmp: Optional[int] = None
    Emp_NatJur: Optional[bool] = None
    Nac_Codigo: Optional[int] = None
    Emp_Rif_Ci: Optional[str] = None
    Zon_Codigo: Optional[int] = None
    Emp_Contacto: Optional[str] = None
    Emp_Telefono1: Optional[str] = None
    Emp_Telefono2: Optional[str] = None
    Emp_Fax: Optional[str] = None
    Emp_Celular: Optional[str] = None
    Emp_Apellidos: Optional[str] = None
    Emp_Correo: Optional[str] = None
    Emp_Site: Optional[str] = None
    Emp_RifPerson: Optional[str] = None
    Emp_RUC: Optional[str] = None
    Emp_Descripcion: Optional[str] = None