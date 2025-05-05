from pydantic import BaseModel # type: ignore
from datetime import datetime
from typing import Optional

class UserBase(BaseModel):
    name: str
    email: str

class UserCreate(UserBase):
    profile_picture: Optional[str] = None
    referred_by_user_id: Optional[int] = None

class User(UserBase):
    id: int
    profile_picture: Optional[str] = None
    referred_by_user_id: Optional[int] = None
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True  # use orm_mode if using Pydantic v1
