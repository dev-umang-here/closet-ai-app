# app/db/session.py

from sqlalchemy import create_engine # type: ignore
from sqlalchemy.orm import sessionmaker, Session # type: ignore
from sqlalchemy.orm import declarative_base # type: ignore


DATABASE_URL: str = "sqlite:///app.db"

engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Dependency for FastAPI routes
def get_db():
    db: Session = SessionLocal()
    try:
        yield db
    finally:
        db.close()

Base = declarative_base()

