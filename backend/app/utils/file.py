import aiofiles
import json
from datetime import datetime
from typing import Any, Optional
from pathlib import Path
from datetime import datetime

from app import DATA_DIR


def add_meta(data: dict | list) -> dict:
    return {
        "data": data,
        "_meta": {
            "cached_at": datetime.now().isoformat(),
            "version": "1.0",
        },
    }


def extract_data(data: dict) -> tuple[Any, Optional[dict[str, Any]]]:
    return data.get("data", data), data.get("_meta", None)


async def save_bytes_to_disk(
    content: bytes,
    folder_name: str,
    file_name: str,
) -> Path:
    file_path = DATA_DIR / folder_name / file_name

    async with aiofiles.open(file_path, 'wb') as f:
        await f.write(content)

    return file_path


async def read_json_from_disk(folder_name: str, file_name: str) -> dict:
    file_path = DATA_DIR / folder_name / file_name

    async with aiofiles.open(file_path, 'r', encoding='utf-8') as f:
        content = await f.read()
        return json.loads(content)
