# app/routes/closet_routes.py
from fastapi import APIRouter, Depends, HTTPException  # type: ignore
from sqlalchemy.orm import Session  # type: ignore
from app.schemas.closet import ClosetItem, ClosetItemCreate , ClosetItemResponse
from app.services.closet_service import ClosetService
from app.db.base import get_db

router = APIRouter(prefix="/closet", tags=["closet"])

@router.get("/items/{item_id}", response_model=ClosetItem)
def read_closet_item(
    item_id: int, 
    user_id: int,
    db: Session = Depends(get_db)
):
    service = ClosetService(db)
    db_item = service.get_closet_item(user_id, item_id)
    if db_item is None:
        raise HTTPException(
            status_code=404, 
            detail="Closet item not found or doesn't belong to user"
        )
    return db_item

@router.post("/items", response_model=ClosetItemResponse)
def create_closet_item(
    user_id: int,
    item: ClosetItemCreate,
    db: Session = Depends(get_db)
):
    service = ClosetService(db)
    response = service.create_closet_item(user_id, item)
    if response.status_code != status.HTTP_201_CREATED:
        raise HTTPException(
            status_code=response.status_code,
            detail=response.content
        )
    return response.content
@router.get("/user/{user_id}/items", response_model=list[ClosetItem])
def read_user_closet_items(
    user_id: int, 
    db: Session = Depends(get_db)
):
    service = ClosetService(db)
    items = service.get_user_closet_items(user_id)
    return items

@router.put("/items/{item_id}/laundry", response_model=ClosetItem)
def mark_item_for_laundry(
    user_id: int,
    item_id: int,
    db: Session = Depends(get_db)
):
    service = ClosetService(db)
    db_item = service.mark_for_laundry(user_id, item_id)
    if isinstance(db_item, dict) and "error" in db_item:
        raise HTTPException(
            status_code=400, 
            detail=db_item["error"]
        )
    return db_item