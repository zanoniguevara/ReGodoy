import pyodbc
from fastapi import FastAPI
from src.interfaces.routes import empresa_routes

app = FastAPI()

app.include_router(empresa_routes.router)

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/demo")
async def get_system_tables():
    try:
        print("Funciona")
        conn_str = 'DRIVER={ODBC Driver 17 for SQL Server};SERVER=LAPTOP-4AQBBQMN;DATABASE=master;UID=sa;PWD=Zanoni25175'
        conn = pyodbc.connect(conn_str)
        cursor = conn.cursor()
        cursor.execute("SELECT name FROM sys.tables WHERE is_ms_shipped = 1")
        rows = cursor.fetchall()
        tables = [row.name for row in rows]
        conn.close()
        return {"system_tables": tables}
    except Exception as e:
        return {"error": str(e)}