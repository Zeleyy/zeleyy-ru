from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    allowed_origins: list[str] = []

    github_username: str = ''
    github_cache_ttl_hours: int = 24

    valorant_username: str = ''
    valorant_tag: str = ''
    valorant_cache_ttl_hours: int = 24
    trn_api_key: str = ''

    osu_api_client_id: int = 0
    osu_api_client_secret: str = ''
    osu_username: str = ''
    osu_user_id: int = 0
    osu_cache_ttl_hours: int = 24

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=False,
        extra='ignore'
    )