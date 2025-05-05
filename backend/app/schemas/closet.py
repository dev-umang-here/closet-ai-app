from pydantic import BaseModel # type: ignore
from datetime import datetime
from typing import Dict, Any, Optional

class ClosetItemBase(BaseModel):
    name: str
    type: str
    color: str
    fabric_type: str

class ClosetItemCreate(ClosetItemBase):
    image_url: Optional[str] = None
    is_to_laundry: Optional[bool] = False

class ClosetItem(ClosetItemBase):
    id: int
    user_id: int
    image_url: Optional[str] = None
    is_to_laundry: bool
    created_at: datetime
    
    class Config:
        from_attributes = True  # or orm_mode = True for Pydantic v1

class ClosetItemResponse(BaseModel):
    status: str
    message: str
    data: Dict[str, Any]