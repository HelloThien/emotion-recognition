from sqlalchemy.orm import Session
import schema, model


def save_device_info(db: Session, info: schema.Feedback):
    feedback_model = model.Feedback(**info.dict())
    db.add(feedback_model)
    db.commit()
    db.refresh(feedback_model)
    return feedback_model

