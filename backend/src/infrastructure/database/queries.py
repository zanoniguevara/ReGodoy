# src/infrastructure/database/queries.py
class EmpresaQueries:
    @staticmethod
    def create_empresa():
        return """
        INSERT INTO Empresa_Emp (Emp_Nombre, Tip_Codigo, Tgn_Codigo, Est_CodigoEmp, Emp_NatJur, Nac_Codigo, Emp_Rif_Ci, Zon_Codigo, Emp_Contacto, Emp_Telefono1, Emp_Telefono2, Emp_Fax, Emp_Celular, Emp_Apellidos, Emp_Correo, Emp_Site, Emp_RifPerson, Emp_RUC, Emp_Descripcion)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
        SELECT SCOPE_IDENTITY();
        """

    @staticmethod
    def get_empresa():
        return "SELECT * FROM Empresa_Emp WHERE Emp_Codigo = ?;"

    @staticmethod
    def get_all_empresas():
        return "SELECT * FROM Empresa_Emp;"

    @staticmethod
    def update_empresa():
        return """
        UPDATE Empresa_Emp SET Emp_Nombre = ?, Tip_Codigo = ?, Tgn_Codigo = ?, Est_CodigoEmp = ?, Emp_NatJur = ?, Nac_Codigo = ?, Emp_Rif_Ci = ?, Zon_Codigo = ?, Emp_Contacto = ?, Emp_Telefono1 = ?, Emp_Telefono2 = ?, Emp_Fax = ?, Emp_Celular = ?, Emp_Apellidos = ?, Emp_Correo = ?, Emp_Site = ?, Emp_RifPerson = ?, Emp_RUC = ?, Emp_Descripcion = ?
        WHERE Emp_Codigo = ?;
        """

    @staticmethod
    def delete_empresa():
        return "DELETE FROM Empresa_Emp WHERE Emp_Codigo = ?;"