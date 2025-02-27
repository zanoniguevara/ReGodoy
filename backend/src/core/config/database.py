import pyodbc
from dotenv import load_dotenv
import os
import bcrypt

load_dotenv()

def encrypt_connection_string(connection_string: str) -> bytes:
    """Encripta la cadena de conexión utilizando bcrypt."""
    password = os.getenv("DB_ENCRYPTION_PASSWORD", "default_encryption_password").encode('utf-8')  # Usar variable de entorno
    hashed_password = bcrypt.hashpw(password, bcrypt.gensalt())
    return bcrypt.hashpw(connection_string.encode('utf-8'), hashed_password)

def decrypt_connection_string(encrypted_connection_string: bytes) -> str:
    """Desencripta la cadena de conexión utilizando bcrypt."""
    password = os.getenv("DB_ENCRYPTION_PASSWORD", "default_encryption_password").encode('utf-8')
    # Intentar verificar la contraseña
    try:
        hashed_password = bcrypt.hashpw(password, bcrypt.gensalt())
        if bcrypt.checkpw(password, hashed_password):
            return bcrypt.hashpw(encrypted_connection_string, hashed_password).decode('utf-8')
    except ValueError:
        return "Error: Invalid encryption key."

    return "Error: Decryption failed."

def get_connection():
    """Obtiene una conexión a la base de datos SQL Server."""
    myserver = os.getenv("MSSQL_MYSERVER")
    database = os.getenv("MSSQL_DATABASE")
    username = os.getenv("MSSQL_USER")
    password = os.getenv("MSSQL_PASSWORD")
    print(myserver)
    print(database)
    print(username)
    print(password)

    connection_string = f"DRIVER={{ODBC Driver 17 for SQL Server}};SERVER={myserver};DATABASE={database};UID={username};PWD={password}"
    print("Pasa por acá")
    print(connection_string)

    # # Encriptar la cadena de conexión
    # encrypted_connection_string = encrypt_connection_string(connection_string)

    # # Desencriptar la cadena de conexión (para usarla)
    # decrypted_connection_string = decrypt_connection_string(encrypted_connection_string)

    try:
        connection = pyodbc.connect(connection_string)
        return connection
    except Exception as e:
        print(f"Error al conectar a la base de datos: {e}")
        return None
