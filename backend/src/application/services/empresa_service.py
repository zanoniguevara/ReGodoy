from src.domain.models.empresa import Empresa, EmpresaCreate, EmpresaUpdate
from src.infrastructure.repositories.empresa_repository import EmpresaRepository
from typing import List, Optional

class EmpresaService:
    def __init__(self, empresa_repository: EmpresaRepository):
        self.empresa_repository = empresa_repository

    def create_empresa(self, empresa: EmpresaCreate) -> Optional[Empresa]:
        return self.empresa_repository.create_empresa(empresa)

    def get_empresa(self, emp_codigo: int) -> Optional[Empresa]:
        return self.empresa_repository.get_empresa(emp_codigo)

    def get_all_empresas(self) -> List[Empresa]:
        return self.empresa_repository.get_all_empresas()

    def update_empresa(self, emp_codigo: int, empresa: EmpresaUpdate) -> Optional[Empresa]:
        return self.empresa_repository.update_empresa(emp_codigo, empresa)

    def delete_empresa(self, emp_codigo: int) -> bool:
        return self.empresa_repository.delete_empresa(emp_codigo)