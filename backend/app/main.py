from fastapi import FastAPI  # type: ignore
from app.api.routes.user_routes import router as user_router
from app.api.routes.closet_routes import router as closet_router

app = FastAPI()

app.include_router(user_router)
app.include_router(closet_router)


