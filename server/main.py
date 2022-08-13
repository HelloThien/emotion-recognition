

from typing import Union

from fastapi import FastAPI, File, Depends, UploadFile
from emotion_recognition import EmotionRecognizer
from fastapi.middleware.cors import CORSMiddleware
from sklearn.svm import SVC
from database import SessionLocal, engine
from schema import Feedback
import crud, model

# init a model, let's use SVC
my_model = SVC()
# pass my model to EmotionRecognizer instance
# and balance the dataset
rec = EmotionRecognizer(model=my_model, emotions=['sad', 'neutral', 'happy'], balance=True, verbose=0)
# train the model
rec.train() 

app = FastAPI() 
my_model = SVC()
origins = ["*"]

model.Base.metadata.create_all(bind=engine)

def db():
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
@app.get("/")
def read_root(): 
    return {"Hello"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}
@app.post("/recognition-audio")
async def recognition_audio(audio: UploadFile=File(...)):
    file_location = f"data/upload/audio_upload.wav"
    with open(file_location, "wb+") as file_object:
        file_object.write(audio.file.read())
    output =  rec.predict("data/upload/audio_upload.wav")
    return {"emotion": output}

@app.post('/feedback')
def save_device_info(info: Feedback, db=Depends(db)):
    return crud.save_device_info(db,info)
