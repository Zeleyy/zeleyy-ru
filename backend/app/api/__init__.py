from fastapi import FastAPI
from .endpoints import setup_endpoints
from .middleware import setup_middleware

def setup_api(app: FastAPI):
    setup_endpoints(app)
    setup_middleware(app)
