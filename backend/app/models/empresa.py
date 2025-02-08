from sqlalchemy import Column, Integer, String, Boolean, BigInteger, ForeignKey
from app.db.session import Base

class Empresa(Base):
    __tablename__ = "Empresa_Emp"
    Emp_Codigo = Column(BigInteger, primary_key=True, index=True)
    Emp_Nombre = Column(String(100), nullable=False)
    Tip_Codigo = Column(Integer, nullable=False)
    Tgn_Codigo = Column(Integer, nullable=False)
    Est_CodigoEmp = Column(Integer, nullable=False, default=140)
    Emp_NatJur = Column(Boolean, nullable=False)
    Nac_Codigo = Column(Integer, nullable=False, default=175)
    Emp_Rif_Ci = Column(String(50), nullable=True)
    Zon_Codigo = Column(BigInteger, nullable=True)
    Emp_Contacto = Column(String(50), nullable=True)
    Emp_Telefono1 = Column(String(50), nullable=True)
    Emp_Telefono2 = Column(String(50), nullable=True)
    Emp_Fax = Column(String(50), nullable=True)
    Emp_Celular = Column(String(50), nullable=True)
    Emp_Apellidos = Column(String(30), nullable=True)
    Emp_Correo = Column(String(255), nullable=True)
    Emp_Site = Column(String(255), nullable=True)
    Emp_RifPerson = Column(String(50), nullable=True)
    Emp_RUC = Column(String(15), nullable=True)
    Emp_Descripcion = Column(String(255), nullable=True)
