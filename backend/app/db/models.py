from sqlalchemy import Column, Integer, String, Boolean, ForeignKey, DateTime, Date, Enum
from db.base import Base

class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    email = Column(String, unique=True)
    profile_picture = Column(String)
    created_at = Column(DateTime)
    updated_at = Column(DateTime)

class ClosetItem(Base):
    __tablename__ = 'closet_items'
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    name = Column(String)
    type = Column(String)  # Enum: Top, Bottom, Shoes, Accessories
    color = Column(String)
    fabric_type = Column(String)
    image_url = Column(String)
    is_in_laundry = Column(Boolean, default=False)
    created_at = Column(DateTime)

