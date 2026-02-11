from fastapi import FastAPI
from app import init_dirs, setup_app

init_dirs()

app = FastAPI()

setup_app(app)