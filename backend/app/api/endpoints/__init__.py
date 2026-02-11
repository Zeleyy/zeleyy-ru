from fastapi import FastAPI

BASE_PREFIX = "/api"
V1_PREFIX = f"{BASE_PREFIX}/v1"
V2_PREFIX = f"{BASE_PREFIX}/v2"


def setup_endpoints(app: FastAPI):
    from .v1 import profiles
    app.include_router(profiles.router, prefix=V1_PREFIX)