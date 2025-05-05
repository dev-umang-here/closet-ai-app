# services/closet_service.py
from fastapi import status # type: ignore
from fastapi.responses import JSONResponse # type: ignore
from fastapi import HTTPException # type: ignore
from sqlalchemy.exc import SQLAlchemyError # type: ignore
from app.models.user import User, ClosetItem  # Importing models directly
from app.schemas.closet import ClosetItemCreate, ClosetItemResponse

class ClosetService:
    def __init__(self, db):
        self.db = db

    def _validate_user(self, user_id: int):
        """Helper method to validate user exists"""
        user = self.db.query(User).filter(User.id == user_id).first()
        if not user:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="User not found"
            )
        return user

    def create_closet_item(self, user_id: int, item: ClosetItemCreate):
        try:
            db_item = ClosetItem(
                user_id=user_id,
                **item.dict()
            )
            self.db.add(db_item)
            self.db.commit()
            self.db.refresh(db_item)
            
            return JSONResponse(
                status_code=status.HTTP_201_CREATED,
                content={
                    "status": "success",
                    "message": "Closet item created successfully",
                    "data": ClosetItem.from_orm(db_item).dict()
                }
            )
            
        except SQLAlchemyError as e:
            self.db.rollback()
            return JSONResponse(
                status_code=status.HTTP_400_BAD_REQUEST,
                content={
                    "status": "error",
                    "message": "Failed to create closet item",
                    "detail": str(e)
                }
            )

    def get_closet_items(self, user_id: int):
        # Validate user exists first
        self._validate_user(user_id)
        
        items = self.db.query(ClosetItem).filter(ClosetItem.user_id == user_id).all()
        return [ClosetItemResponse.from_orm(item).dict() for item in items]

    def mark_for_laundry(self, user_id: int, item_id: int):
        # Validate user exists
        self._validate_user(user_id)
        
        item = self.db.query(ClosetItem)\
            .filter(ClosetItem.id == item_id, ClosetItem.user_id == user_id)\
            .first()
        
        if not item:
            return JSONResponse(
                status_code=status.HTTP_404_NOT_FOUND,
                content={"message": "Item not found or doesn't belong to user"}
            )
            
        try:
            item.is_to_laundry = True
            self.db.commit()
            return {
                "message": "Item marked for laundry",
                "item_id": item_id,
                "user_id": user_id
            }
            
        except SQLAlchemyError as e:
            self.db.rollback()
            return JSONResponse(
                status_code=status.HTTP_400_BAD_REQUEST,
                content={
                    "message": "Failed to update item status",
                    "detail": str(e)
                }
            )