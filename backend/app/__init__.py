from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from pathlib import Path

from .api import setup_api

BASE_DIR = Path(__file__).resolve().parent.parent
STATIC_DIR_NAME = "static"
GITHUB_DIR_NAME = "github"
VALORANT_DIR_NAME = "valorant"
STATIC_DIR = BASE_DIR / STATIC_DIR_NAME
GITHUB_DIR = STATIC_DIR / GITHUB_DIR_NAME
VALORANT_DIR = STATIC_DIR / VALORANT_DIR_NAME


def init_dirs():
    STATIC_DIR.mkdir(parents=True, exist_ok=True)
    GITHUB_DIR.mkdir(parents=True, exist_ok=True)
    VALORANT_DIR.mkdir(parents=True, exist_ok=True)


def setup_app(app: FastAPI):
    app.mount(f"/{STATIC_DIR_NAME}", StaticFiles(directory=STATIC_DIR), name=STATIC_DIR_NAME)
    setup_api(app)