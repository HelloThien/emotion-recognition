# build a schema using pydantic
from pydantic import BaseModel

class Feedback(BaseModel):
    rate: int
    text: str

    class Config:
        orm_mode = True

