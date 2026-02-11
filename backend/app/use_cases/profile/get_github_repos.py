from app.core import settings
from app.schemas.response.github import GithubRepo
from app.exceptions import CacheExpiredError
from app.utils.base import validate_date
from app.utils.file import extract_data, read_json_from_disk
from app.utils.request import get_github_repos

async def get_github_repos_use_case() -> list[GithubRepo]:
    try:
        data = await read_json_from_disk('github', 'repos.json')

        repos_data, meta = extract_data(data)

        if meta and validate_date(meta['cached_at'], settings.github_cache_ttl_hours):
            raise CacheExpiredError('Кеш устарел')

        return [GithubRepo.model_validate(repo) for repo in repos_data]
    except (FileNotFoundError, CacheExpiredError):
        data = await get_github_repos()
        return [GithubRepo.model_validate(repo) for repo in data]
