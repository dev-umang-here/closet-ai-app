from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import uvicorn
import json
import os
from datetime import datetime

app = FastAPI(title="Closet AI API", description="API for the Closet AI application")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, you would limit this to your frontend domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Models
class ItemBase(BaseModel):
    name: str
    category: str
    color: str
    season: str
    imageUrl: str

class Item(ItemBase):
    id: str

class OutfitBase(BaseModel):
    name: str
    items: List[str]
    imageUrl: str

class Outfit(OutfitBase):
    id: str

# Mock data
ITEMS = [
    {
        "id": "1",
        "name": "Blue Denim Jacket",
        "category": "Outerwear",
        "color": "Blue",
        "season": "Spring, Fall",
        "imageUrl": "https://images.unsplash.com/photo-1576871337622-98d48d1cf531",
    },
    {
        "id": "2",
        "name": "Black T-Shirt",
        "category": "Tops",
        "color": "Black",
        "season": "All Seasons",
        "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a",
    },
    {
        "id": "3",
        "name": "Khaki Chinos",
        "category": "Bottoms",
        "color": "Beige",
        "season": "Spring, Summer, Fall",
        "imageUrl": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80",
    },
    {
        "id": "4",
        "name": "White Sneakers",
        "category": "Footwear",
        "color": "White",
        "season": "All Seasons",
        "imageUrl": "https://images.unsplash.com/photo-1597248881519-d54a14aec92c",
    },
    {
        "id": "5",
        "name": "Navy Blazer",
        "category": "Outerwear",
        "color": "Navy",
        "season": "All Seasons",
        "imageUrl": "https://images.unsplash.com/photo-1594938291221-94f18cbb5660",
    },
    {
        "id": "6",
        "name": "White Button-Up",
        "category": "Tops",
        "color": "White",
        "season": "All Seasons",
        "imageUrl": "https://images.unsplash.com/photo-1598961942613-ba897716405b",
    },
]

OUTFITS = [
    {
        "id": "1",
        "name": "Casual Day Out",
        "items": ["1", "2", "3", "4"],  # IDs of the items
        "imageUrl": "https://images.unsplash.com/photo-1617137968427-85924c800a22",
    },
    {
        "id": "2",
        "name": "Office Ready",
        "items": ["5", "6", "3", "4"],  # IDs of the items
        "imageUrl": "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc",
    },
]

# Endpoints
@app.get("/")
async def root():
    return {"message": "Welcome to the Closet AI API"}

@app.get("/items", response_model=List[Item])
async def get_items():
    return ITEMS

@app.get("/items/{item_id}", response_model=Item)
async def get_item(item_id: str):
    for item in ITEMS:
        if item["id"] == item_id:
            return item
    raise HTTPException(status_code=404, detail="Item not found")

@app.get("/outfits", response_model=List[Outfit])
async def get_outfits():
    return OUTFITS

@app.get("/outfits/{outfit_id}", response_model=Outfit)
async def get_outfit(outfit_id: str):
    for outfit in OUTFITS:
        if outfit["id"] == outfit_id:
            return outfit
    raise HTTPException(status_code=404, detail="Outfit not found")

@app.get("/recommendations")
async def get_recommendations():
    # In a real app, this would use ML models to generate recommendations
    return OUTFITS

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)