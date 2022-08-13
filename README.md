# Emotion Recognition

## Introduction
- This repository handles building and training Emotion Recognition System.
- The basic idea behind this tool is to build and train/test a suited machine learning ( as well as deep learning ) algorithm that could recognize and detects human emotions from speech and text.
- This is useful for many industry fields such as making product recommendations, affective computing, etc.
## Installation/Run

  Change into your project directory and run:
  `docker-compose up`
  
  Go to `http://localhost:3000`
#### Different run
Change into /client and run:
```bash
npm i
npm start
```
And change into /server and run:
```bash
pip3 install -r requirements.txt
uvicorn main:app --reload
```
By this way you have to setup postpressql with url connect:
`
postgresql://postgres:thien@localhost:5433/emotion
`
## Features
 

After starting the project, navigate to `http://localhost:3000`. You can compute emotion recognition by text, audio and feeback result of compution:

![Text recognition](assets/1.png)



![Audio recognition](assets/2.png)


![Feeback result](assets/3.png)
