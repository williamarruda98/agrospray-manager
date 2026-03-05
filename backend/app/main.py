from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(
    title="AgroSpray Manager API",
    description="API para gestão de aplicações de defensivos agrícolas",
    version="1.0.0"
)

# CORS
origins = os.getenv("ALLOWED_ORIGINS", "http://localhost:5173").split(",")
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {
        "message": "AgroSpray Manager API",
        "version": "1.0.0",
        "status": "online"
    }

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

# Rotas para clima
@app.get("/api/weather/{location}")
async def get_weather(location: str):
    return {
        "location": location,
        "temperature": 25,
        "humidity": 65,
        "wind_speed": 8,
        "condition": "ÓTIMO"
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
