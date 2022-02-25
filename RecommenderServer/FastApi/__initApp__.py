import databases
import sqlalchemy
from fastapi import FastAPI

# this is for spinning up the DataBase 
DATABASE_URL = "postgresql://localhost/mydb?user=user"
database = databases.Database(DATABASE_URL)
metadata = sqlalchemy.MetaData()
engine = sqlalchemy.create_engine(
    DATABASE_URL
)
metadata.create_all(engine)
app = FastAPI()