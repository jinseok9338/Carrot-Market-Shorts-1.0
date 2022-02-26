# pylint: disable=no-name-in-module
# pylint: disable=no-self-argument

from typing import List, Optional
from pydantic import BaseModel


class ItemBase(BaseModel):
    title: str
    description: Optional[str] = None



class UserBase(BaseModel):
    email: str


class UserCreate(UserBase):
    password: str


class User(UserBase):
    user_id: str
    is_active: bool
    

    class Config:
        orm_mode = True