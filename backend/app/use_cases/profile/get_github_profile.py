from app.core import settings
from app.schemas.response.github import GithubProfile
from app.exceptions import CacheExpiredError
from app.utils.base import validate_date
from app.utils.file import extract_data, read_json_from_disk
from app.utils.request import get_github_profile

async def get_github_profile_use_case() -> GithubProfile:
    try:
        data = await read_json_from_disk('github', 'profile.json')

        profile_data, meta = extract_data(data)

        if meta and validate_date(meta['cached_at'], settings.github_cache_ttl_hours):
            raise CacheExpiredError('Кеш устарел')

        return GithubProfile.model_validate(profile_data)
    except (FileNotFoundError, CacheExpiredError):
        data = await get_github_profile()
        return GithubProfile.model_validate(data)
