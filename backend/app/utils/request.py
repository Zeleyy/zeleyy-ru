import httpx
import json

from app.core import settings
from .file import add_meta, save_bytes_to_disk


async def fetch_data(
    url: str,
    params: dict = {},
    headers: dict[str, str] = {},
    timeout: float = 30.0
):
    if 'User-Agent' not in headers:
        headers['User-Agent'] = 'My-FastAPI-App'

    async with httpx.AsyncClient(timeout=timeout) as client:
        response = await client.get(url, params=params, headers=headers)
        response.raise_for_status()
        return response


async def get_github_profile():
    response = await fetch_data(f'https://api.github.com/users/{settings.github_username}')
    data = response.json()

    data_with_meta = add_meta(data)

    await save_bytes_to_disk(
        content=json.dumps(data_with_meta, indent=2).encode('utf-8'),
        folder_name="github", 
        file_name="profile.json"
    )
    return data


async def get_github_repos():
    response = await fetch_data(f'https://api.github.com/users/{settings.github_username}/repos')
    data = response.json()

    data_with_meta = add_meta(data)
    
    await save_bytes_to_disk(
        content=json.dumps(data_with_meta, indent=2).encode('utf-8'),
        folder_name="github", 
        file_name="repos.json"
    )
    return data
