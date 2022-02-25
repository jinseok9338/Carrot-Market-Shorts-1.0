# pylint: disable=no-name-in-module
# pylint: disable=no-self-argument

from typing import Optional,List
import databases
import sqlalchemy
from fastapi import FastAPI
from pydantic import BaseModel



DATABASE_URL = "postgresql://localhost/mydb?user=user"

database = databases.Database(DATABASE_URL)

metadata = sqlalchemy.MetaData()

notes = sqlalchemy.Table(
    "notes",
    metadata,
    sqlalchemy.Column("id", sqlalchemy.Integer, primary_key=True),
    sqlalchemy.Column("text", sqlalchemy.String),
    sqlalchemy.Column("completed", sqlalchemy.Boolean),
)

engine = sqlalchemy.create_engine(
    DATABASE_URL
)
metadata.create_all(engine)


class NoteIn(BaseModel):
    text: str
    completed: bool


class Note(BaseModel):
    id: int
    text: str
    completed: bool

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.on_event("startup")
async def startup():
    await database.connect()


@app.get("/notes/", response_model=List[Note])
async def read_notes():
    query = notes.select()
    return await database.fetch_all(query)


@app.post("/notes/", response_model=Note)
async def create_note(note: NoteIn):
    query = notes.insert().values(text=note.text, completed=note.completed)
    last_record_id = await database.execute(query)
    return {**note.dict(), "id": last_record_id}

@app.get("/items/{item_id}")
def read_item(item_id: int, _q: Optional[str] = None):
    return {"item_id": item_id, "_q": _q}
