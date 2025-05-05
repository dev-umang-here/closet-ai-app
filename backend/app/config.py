# config.py
"""
Configuration settings for the closet application.
"""
class Settings:
    PROJECT_NAME: str = "Closet"
    DATABASE_URL: str = "sqlite:///app/db/app.db"


settings = Settings()