# pylint: disable=no-name-in-module
# pylint: disable=no-self-argument

from typing import Optional,List
from __initApp__ import app,database
from Models import NoteIn, Note , notes



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
