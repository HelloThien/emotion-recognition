from sqlalchemy import Column, DateTime, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.sql import func

Base  = declarative_base()

class Feedback(Base):
    __tablename__ = 'feedback'
    id  = Column(Integer, primary_key=True, index=True) 
    rate = Column(Integer)
    text = Column(String)
    time_created = Column(DateTime(timezone=True), server_default=func.now())
    time_updated = Column(DateTime(timezone=True), onupdate=func.now()) 
 

