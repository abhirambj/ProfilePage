from typing import List
from pydantic import BaseModel

class UserInfoBase(BaseModel):
    name: str


class UserCreate(UserInfoBase):
	email: str
	message: str


class UserInfo(UserInfoBase):
	email: str
	message: str

	class Config:
		orm_mode = True


