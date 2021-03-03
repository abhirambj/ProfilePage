from sqlalchemy.orm import Session

import models, schemas


def get_user_by_username(db: Session, name: str):
    return db.query(models.UserInfo).filter(models.UserInfo.name == name).first()

def get_user_info(db: Session):
    return db.query(models.UserInfo).all()

def create_user(db: Session, user: schemas.UserCreate):
    db_user = models.UserInfo(name=user.name, email=user.email,message=user.message)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user
