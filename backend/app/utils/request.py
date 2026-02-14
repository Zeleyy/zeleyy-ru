import httpx
import json
from typing import Optional

from app import STATIC_DIR_NAME, GITHUB_DIR_NAME
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


async def fetch_and_save_github_profile(old_data: Optional[dict] = None):
    response = await fetch_data(f'https://api.github.com/users/{settings.github_username}')
    data = response.json()

    data_with_meta = add_meta(data)
    data_with_meta['_meta']['original_avatar_url'] = data['avatar_url']

    if old_data is None or old_data['_meta']['original_avatar_url'] != data['avatar_url']:
        avatar_url = await download_avatar(data['avatar_url'], GITHUB_DIR_NAME)
        data_with_meta["data"]["avatar_url"] = avatar_url
    else:
        data_with_meta["data"]["avatar_url"] = old_data['data']['avatar_url']

    await save_bytes_to_disk(
        content=json.dumps(data_with_meta, indent=2).encode('utf-8'),
        folder_name=GITHUB_DIR_NAME, 
        file_name="profile.json"
    )
    return data


async def fetch_and_save_github_repos():
    response = await fetch_data(f'https://api.github.com/users/{settings.github_username}/repos')
    data = response.json()

    data_with_meta = add_meta(data)
    
    await save_bytes_to_disk(
        content=json.dumps(data_with_meta, indent=2).encode('utf-8'),
        folder_name=GITHUB_DIR_NAME, 
        file_name="repos.json"
    )
    return data


async def download_avatar(avatar_url: str, folder_name: str):
    response = await fetch_data(avatar_url)

    await save_bytes_to_disk(
        content=response.read(),
        folder_name=folder_name,
        file_name="avatar.png"
    )

    return f"/{STATIC_DIR_NAME}/{folder_name}/avatar.png"
