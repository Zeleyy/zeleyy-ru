from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    github_username: str = ''
    github_cache_ttl_hours: int = 24
    allowed_origins: list[str] = []

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=False,
    )

settings = Settings()