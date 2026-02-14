import logging
from fastapi import APIRouter, status

from app.exceptions import HTTPException
from app.schemas.response.github import GithubProfile, GithubRepo
from app.use_cases.profile import get_github_profile_use_case, get_github_repos_use_case

router = APIRouter(prefix="/profiles", tags=["Profiles"])
logger = logging.getLogger(__name__)

@router.get("/github", response_model=GithubProfile)
async def fetch_and_save_github_profile():
    try:
        return await get_github_profile_use_case()
    except Exception as e:
        logger.error("Неизвестная ошибка: %s", str(e), exc_info=True)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Ошибка сервера"
        )


@router.get("/github/repos", response_model=list[GithubRepo])
async def fetch_and_save_github_repos():
    try:
        return await get_github_repos_use_case()
    except Exception as e:
        logger.error("Неизвестная ошибка: %s", str(e), exc_info=True)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Ошибка сервера"
        )


@router.get("/osu")
async def get_osu():
    return {"osu": "osu"}


@router.get("/valorant")
async def get_valorant():
    return {"valorant": "valorant"}
