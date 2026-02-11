from pydantic import BaseModel

class GithubProfile(BaseModel):
    login: str
    avatar_url: str
    html_url: str
    public_repos: int
    followers: int
    following: int

    class Config:
        from_attributes = True
