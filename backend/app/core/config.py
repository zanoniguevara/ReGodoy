import os
from dotenv import load_dotenv

load_dotenv()

class Settings:
    MSSQL_SERVER = os.getenv("MSSQL_SERVER")
    MSSQL_DATABASE = os.getenv("MSSQL_DATABASE")
    MSSQL_USER = os.getenv("MSSQL_USER")
    MSSQL_PASSWORD = os.getenv("MSSQL_PASSWORD")
    SQLALCHEMY_DATABASE_URL = f"mssql+pyodbc://{MSSQL_USER}:{MSSQL_PASSWORD}@{MSSQL_SERVER}/{MSSQL_DATABASE}?driver=ODBC+Driver+17+for+SQL+Server"

settings = Settings()
