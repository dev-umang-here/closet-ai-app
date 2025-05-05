from sqlalchemy import ( # type: ignore
    Column, Integer, String, Text, Boolean, ForeignKey, Date, DateTime, DECIMAL
)
from sqlalchemy.orm import relationship, declarative_base # type: ignore
from sqlalchemy.sql import func # type: ignore

Base = declarative_base()


class User(Base):
    __tablename__ = "User"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    email = Column(String, unique=True, index=True)
    profile_picture = Column(String, nullable=True)
    referred_by_user_id = Column(Integer, ForeignKey("User.id"), nullable=True)
    created_at = Column(DateTime, default=func.now())
    updated_at = Column(DateTime, default=func.now(), onupdate=func.now())

    referred_by = relationship("User", remote_side=[id])
    closet_items = relationship("ClosetItem", back_populates="user")
    outfits = relationship("Outfit", back_populates="user")
    planned_looks = relationship("PlannedLook", back_populates="user")
    days = relationship("Day", back_populates="user")
    closet_slots = relationship("ClosetSlot", back_populates="user")
    weekly_planners = relationship("WeeklyPlanner", back_populates="user")


class ClosetItem(Base):
    __tablename__ = "ClosetItem"

    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("User.id"))
    name = Column(String)
    type = Column(String)
    color = Column(String)
    fabric_type = Column(String)
    image_url = Column(String)
    is_in_laundry = Column(Boolean, default=False)
    created_at = Column(DateTime, default=func.now())

    user = relationship("User", back_populates="closet_items")
    laundry_items = relationship("LaundryItem", back_populates="closet_item")
    outfit_items = relationship("OutfitItem", back_populates="closet_item")


class Outfit(Base):
    __tablename__ = "Outfit"

    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("User.id"))
    title = Column(String)
    weather_tag = Column(String)
    price = Column(DECIMAL, nullable=True)
    created_at = Column(DateTime, default=func.now())

    user = relationship("User", back_populates="outfits")
    outfit_items = relationship("OutfitItem", back_populates="outfit")
    planned_look_outfits = relationship("PlannedLookOutfit", back_populates="outfit")


class OutfitItem(Base):
    __tablename__ = "OutfitItem"

    id = Column(Integer, primary_key=True)
    outfit_id = Column(Integer, ForeignKey("Outfit.id"))
    closet_item_id = Column(Integer, ForeignKey("ClosetItem.id"))

    outfit = relationship("Outfit", back_populates="outfit_items")
    closet_item = relationship("ClosetItem", back_populates="outfit_items")


class LaundryItem(Base):
    __tablename__ = "LaundryItem"

    id = Column(Integer, primary_key=True)
    closet_item_id = Column(Integer, ForeignKey("ClosetItem.id"))
    status = Column(String)
    pickup_date = Column(Date)
    return_date = Column(Date)

    closet_item = relationship("ClosetItem", back_populates="laundry_items")


class PlannedLook(Base):
    __tablename__ = "PlannedLook"

    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("User.id"))
    title = Column(String)
    description = Column(Text)
    created_at = Column(DateTime, default=func.now())

    user = relationship("User", back_populates="planned_looks")
    planned_look_outfits = relationship("PlannedLookOutfit", back_populates="planned_look")
    days = relationship("Day", back_populates="planned_look")


class PlannedLookOutfit(Base):
    __tablename__ = "PlannedLookOutfit"

    id = Column(Integer, primary_key=True)
    planned_look_id = Column(Integer, ForeignKey("PlannedLook.id"))
    outfit_id = Column(Integer, ForeignKey("Outfit.id"))

    planned_look = relationship("PlannedLook", back_populates="planned_look_outfits")
    outfit = relationship("Outfit", back_populates="planned_look_outfits")


class Day(Base):
    __tablename__ = "Day"

    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("User.id"))
    date = Column(Date, unique=True)
    planned_look_id = Column(Integer, ForeignKey("PlannedLook.id"))
    notes = Column(Text)
    created_at = Column(DateTime, default=func.now())
    updated_at = Column(DateTime, default=func.now(), onupdate=func.now())

    user = relationship("User", back_populates="days")
    planned_look = relationship("PlannedLook", back_populates="days")


class ClosetSlot(Base):
    __tablename__ = "ClosetSlot"

    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("User.id"))
    slot_number = Column(Integer)
    is_filled = Column(Boolean, default=False)
    created_at = Column(DateTime, default=func.now())

    user = relationship("User", back_populates="closet_slots")


class WeeklyPlanner(Base):
    __tablename__ = "WeeklyPlanner"

    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("User.id"), nullable=False)
    week_start_date = Column(Date, nullable=False)
    week_end_date = Column(Date, nullable=False)
    notes = Column(Text)
    created_at = Column(DateTime, default=func.now())

    user = relationship("User", back_populates="weekly_planners")
