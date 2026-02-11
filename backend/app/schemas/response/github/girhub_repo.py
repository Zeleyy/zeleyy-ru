from pydantic import BaseModel

class GithubRepo(BaseModel):
    name: str
    html_url: str
    description: str | None
    language: str | None

    class Config:
        from_attributes = True
