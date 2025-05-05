from sqlalchemy.orm import Session  # type: ignore
from fastapi import HTTPException # type: ignore
from fastapi import status # type: ignore
from fastapi.responses import JSONResponse # type: ignore
from app.models.user import User  # This is your SQLAlchemy ORM model
from app.schemas.user import UserCreate  # This is your Pydantic schema


class UserService:
    def __init__(self, db: Session):
        self.db = db

    def get_user(self, user_id: int):
        return self.db.query(User).filter(User.id == user_id).first()

    def get_users(self, skip: int = 0, limit: int = 100):
        return self.db.query(User).offset(skip).limit(limit).all()

    def create_user(self, user: UserCreate):
        existing_user = self.db.query(User).filter(User.email == user.email).first()
        if existing_user:
            return JSONResponse(
            status_code=status.HTTP_400_BAD_REQUEST,
            content={
                "status_code": 400,
                "message": "User not created. Email already registered."
            }
            )

        try:
            db_user = User(**user.dict())
            self.db.add(db_user)
            self.db.commit()
            self.db.refresh(db_user)

            return JSONResponse(
                status_code=status.HTTP_201_CREATED,
                content={
                "status_code": 201,
                "data": {
                    "id": db_user.id,
                    "email": db_user.email,
                    "created_at": db_user.created_at.isoformat() if db_user.created_at else None
                }
            }
            )
        except Exception as e:
            self.db.rollback()
            return JSONResponse(
            status_code=status.HTTP_400_BAD_REQUEST,
            content={
                "status_code": 400,
                "message": "User not created due to server error."
            }
            )

