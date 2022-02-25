# pylint: disable=no-name-in-module
# pylint: disable=no-self-argument
from pydantic import BaseModel
import sqlalchemy
from __initApp__ import metadata


#this is for Type definition doesn't have real effects 
class NoteIn(BaseModel):
    text: str
    completed: bool


class Note(BaseModel):
    id: int
    text: str
    completed: bool


#this is the Entities
notes = sqlalchemy.Table(
    "notes",
    metadata,
    sqlalchemy.Column("id", sqlalchemy.Integer, primary_key=True),
    sqlalchemy.Column("text", sqlalchemy.String),
    sqlalchemy.Column("completed", sqlalchemy.Boolean),
)