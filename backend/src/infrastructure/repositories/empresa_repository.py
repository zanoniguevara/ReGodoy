import pyodbc
from src.core.config.database import get_connection
from src.domain.models.empresa import Empresa, EmpresaCreate, EmpresaUpdate
from src.infrastructure.database.queries import EmpresaQueries
from typing import List, Optional
import logging

# Configuración del logger
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')


class EmpresaRepository:
    def __init__(self):
        self.connection = get_connection()

    def create_empresa(self, empresa: EmpresaCreate) -> Optional[Empresa]:
        """Crea una nueva empresa en la base de datos."""
        try:
            with self.connection.cursor() as cursor:
                cursor.execute(
                    EmpresaQueries.create_empresa(),
                    (
                        empresa.Emp_Nombre,
                        empresa.Tip_Codigo,
                        empresa.Tgn_Codigo,
                        empresa.Est_CodigoEmp,
                        empresa.Emp_NatJur,
                        empresa.Nac_Codigo,
                        empresa.Emp_Rif_Ci,
                        empresa.Zon_Codigo,
                        empresa.Emp_Contacto,
                        empresa.Emp_Telefono1,
                        empresa.Emp_Telefono2,
                        empresa.Emp_Fax,
                        empresa.Emp_Celular,
                        empresa.Emp_Apellidos,
                        empresa.Emp_Correo,
                        empresa.Emp_Site,
                        empresa.Emp_RifPerson,
                        empresa.Emp_RUC,
                        empresa.Emp_Descripcion,
                    ),
                )
                emp_codigo = cursor.fetchone()[0]
                self.connection.commit()
                logging.info(f"Empresa creada con código: {emp_codigo}")
                return self.get_empresa(emp_codigo)
        except pyodbc.Error as e:
            logging.error(f"Error al crear empresa: {e}")
            self.connection.rollback()
            return None
        except Exception as e:
            logging.exception(f"Error inesperado al crear empresa: {e}")
            self.connection.rollback()
            return None

    def get_empresa(self, emp_codigo: int) -> Optional[Empresa]:
        """Obtiene una empresa por su código."""
        try:
            with self.connection.cursor() as cursor:
                cursor.execute(EmpresaQueries.get_empresa(), (emp_codigo,))
                row = cursor.fetchone()
                if row:
                    empresa = Empresa(
                        Emp_Codigo=row.Emp_Codigo,
                        Emp_Nombre=row.Emp_Nombre,
                        Tip_Codigo=row.Tip_Codigo,
                        Tgn_Codigo=row.Tgn_Codigo,
                        Est_CodigoEmp=row.Est_CodigoEmp,
                        Emp_NatJur=row.Emp_NatJur,
                        Nac_Codigo=row.Nac_Codigo,
                        Emp_Rif_Ci=row.Emp_Rif_Ci,
                        Zon_Codigo=row.Zon_Codigo,
                        Emp_Contacto=row.Emp_Contacto,
                        Emp_Telefono1=row.Emp_Telefono1,
                        Emp_Telefono2=row.Emp_Telefono2,
                        Emp_Fax=row.Emp_Fax,
                        Emp_Celular=row.Emp_Celular,
                        Emp_Apellidos=row.Emp_Apellidos,
                        Emp_Correo=row.Emp_Correo,
                        Emp_Site=row.Emp_Site,
                        Emp_RifPerson=row.Emp_RifPerson,
                        Emp_RUC=row.Emp_RUC,
                        Emp_Descripcion=row.Emp_Descripcion,
                    )
                    logging.info(f"Empresa obtenida con código: {emp_codigo}")
                    return empresa
                else:
                    logging.info(f"Empresa no encontrada con código: {emp_codigo}")
                    return None
        except pyodbc.Error as e:
            logging.error(f"Error al obtener empresa: {e}")
            return None
        except Exception as e:
            logging.exception(f"Error inesperado al obtener empresa: {e}")
            return None

    def get_all_empresas(self) -> List[Empresa]:
        """Obtiene todas las empresas."""
        try:
            with self.connection.cursor() as cursor:
                cursor.execute(EmpresaQueries.get_all_empresas())
                rows = cursor.fetchall()
                empresas = [
                    Empresa(
                        Emp_Codigo=row.Emp_Codigo,
                        Emp_Nombre=row.Emp_Nombre,
                        Tip_Codigo=row.Tip_Codigo,
                        Tgn_Codigo=row.Tgn_Codigo,
                        Est_CodigoEmp=row.Est_CodigoEmp,
                        Emp_NatJur=row.Emp_NatJur,
                        Nac_Codigo=row.Nac_Codigo,
                        Emp_Rif_Ci=row.Emp_Rif_Ci,
                        Zon_Codigo=row.Zon_Codigo,
                        Emp_Contacto=row.Emp_Contacto,
                        Emp_Telefono1=row.Emp_Telefono1,
                        Emp_Telefono2=row.Emp_Telefono2,
                        Emp_Fax=row.Emp_Fax,
                        Emp_Celular=row.Emp_Celular,
                        Emp_Apellidos=row.Emp_Apellidos,
                        Emp_Correo=row.Emp_Correo,
                        Emp_Site=row.Emp_Site,
                        Emp_RifPerson=row.Emp_RifPerson,
                        Emp_RUC=row.Emp_RUC,
                        Emp_Descripcion=row.Emp_Descripcion,
                    )
                    for row in rows
                ]
                logging.info("Todas las empresas obtenidas")
                return empresas
        except pyodbc.Error as e:
            logging.error(f"Error al obtener todas las empresas: {e}")
            return []
        except Exception as e:
            logging.exception(f"Error inesperado al obtener todas las empresas: {e}")
            return []

    def update_empresa(self, emp_codigo: int, empresa: EmpresaUpdate) -> Optional[Empresa]:
        """Actualiza una empresa existente."""
        try:
            with self.connection.cursor() as cursor:
                # Construir la consulta SQL dinámicamente
                set_clauses = []
                params = []

                if empresa.Emp_Nombre is not None:
                    set_clauses.append("Emp_Nombre = ?")
                    params.append(empresa.Emp_Nombre)
                if empresa.Tip_Codigo is not None:
                    set_clauses.append("Tip_Codigo = ?")
                    params.append(empresa.Tip_Codigo)
                if empresa.Tgn_Codigo is not None:
                    set_clauses.append("Tgn_Codigo = ?")
                    params.append(empresa.Tgn_Codigo)
                if empresa.Est_CodigoEmp is not None:
                    set_clauses.append("Est_CodigoEmp = ?")
                    params.append(empresa.Est_CodigoEmp)
                if empresa.Emp_NatJur is not None:
                    set_clauses.append("Emp_NatJur = ?")
                    params.append(empresa.Emp_NatJur)
                if empresa.Nac_Codigo is not None:
                    set_clauses.append("Nac_Codigo = ?")
                    params.append(empresa.Nac_Codigo)
                if empresa.Emp_Rif_Ci is not None:
                    set_clauses.append("Emp_Rif_Ci = ?")
                    params.append(empresa.Emp_Rif_Ci)
                if empresa.Zon_Codigo is not None:
                    set_clauses.append("Zon_Codigo = ?")
                    params.append(empresa.Zon_Codigo)
                if empresa.Emp_Contacto is not None:
                    set_clauses.append("Emp_Contacto = ?")
                    params.append(empresa.Emp_Contacto)
                if empresa.Emp_Telefono1 is not None:
                    set_clauses.append("Emp_Telefono1 = ?")
                    params.append(empresa.Emp_Telefono1)
                if empresa.Emp_Telefono2 is not None:
                    set_clauses.append("Emp_Telefono2 = ?")
                    params.append(empresa.Emp_Telefono2)
                if empresa.Emp_Fax is not None:
                    set_clauses.append("Emp_Fax = ?")
                    params.append(empresa.Emp_Fax)
                if empresa.Emp_Celular is not None:
                    set_clauses.append("Emp_Celular = ?")
                    params.append(empresa.Emp_Celular)
                if empresa.Emp_Apellidos is not None:
                    set_clauses.append("Emp_Apellidos = ?")
                    params.append(empresa.Emp_Apellidos)
                if empresa.Emp_Correo is not None:
                    set_clauses.append("Emp_Correo = ?")
                    params.append(empresa.Emp_Correo)
                if empresa.Emp_Site is not None:
                    set_clauses.append("Emp_Site = ?")
                    params.append(empresa.Emp_Site)
                if empresa.Emp_RifPerson is not None:
                    set_clauses.append("Emp_RifPerson = ?")
                    params.append(empresa.Emp_RifPerson)
                if empresa.Emp_RUC is not None:
                    set_clauses.append("Emp_RUC = ?")
                    params.append(empresa.Emp_RUC)
                if empresa.Emp_Descripcion is not None:
                    set_clauses.append("Emp_Descripcion = ?")
                    params.append(empresa.Emp_Descripcion)

                if not set_clauses:
                    logging.warning("No hay campos para actualizar.")
                    return self.get_empresa(emp_codigo)  # No hay nada que actualizar

                # Unir las cláusulas SET
                sql = f"UPDATE Empresa_Emp SET {', '.join(set_clauses)} WHERE Emp_Codigo = ?"
                params.append(emp_codigo)

                cursor.execute(sql, params)
                self.connection.commit()
                logging.info(f"Empresa actualizada con código: {emp_codigo}")
                return self.get_empresa(emp_codigo)
        except pyodbc.Error as e:
            logging.error(f"Error al actualizar empresa: {e}")
            self.connection.rollback()
            return None
        except Exception as e:
            logging.exception(f"Error inesperado al actualizar empresa: {e}")
            self.connection.rollback()
            return None

    def delete_empresa(self, emp_codigo: int) -> bool:
        """Elimina una empresa por su código."""
        try:
            with self.connection.cursor() as cursor:
                cursor.execute(EmpresaQueries.delete_empresa(), (emp_codigo,))
                self.connection.commit()
                if cursor.rowcount > 0:
                    logging.info(f"Empresa eliminada con código: {emp_codigo}")
                    return True
                else:
                    logging.warning(f"No se encontró la empresa con código: {emp_codigo}")
                    return False
        except pyodbc.Error as e:
            logging.error(f"Error al eliminar empresa: {e}")
            self.connection.rollback()
            return False
        except Exception as e:
            logging.exception(f"Error inesperado al eliminar empresa: {e}")
            self.connection.rollback()
            return False