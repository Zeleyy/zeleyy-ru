from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from pathlib import Path

from .api import setup_api

BASE_DIR = Path(__file__).resolve().parent.parent
DATA_DIR = BASE_DIR / "data"
GITHUB_DIR = DATA_DIR / "github"


def init_dirs():
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    GITHUB_DIR.mkdir(parents=True, exist_ok=True)


def setup_app(app: FastAPI):
    app.mount("/data", StaticFiles(directory=DATA_DIR), name="data")
    setup_api(app)