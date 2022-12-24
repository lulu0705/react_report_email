from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from router.schemas import ReserveRequestSchema, ReserveResponseSchema, ReserveResponseWithProductSchema

from db.database import get_db
from db import db_reserve
from typing import List

router = APIRouter(
    prefix='/api/v1/reserve',
    tags=['reserve']
)


@router.post('', response_model=ReserveResponseSchema)
def create(request: ReserveRequestSchema, db: Session = Depends(get_db)):
    return db_reserve.create(db=db, request=request)


# @router.post('/signin', response_model=UserSignInResponseSchema)
# async def signin(request: SignInRequestSchema, db: Session = Depends(get_db)):
#     return db_user.signin(db=db, request=request)


# @router.put('/update')
# def update_user(request: UpdateProfileRequestSchema, db: Session = Depends(get_db),
#                 current_user: UserRequestSchema =
#                 Depends(get_current_user)):
#     return db_user.update(db=db, request=request)


@router.get('/all', response_model=List[ReserveResponseSchema])
def get_all_reserves(db: Session = Depends(get_db)):
    return db_reserve.get_all_reserves(db)



@router.get('/id/{reserve_id}', response_model=ReserveResponseWithProductSchema)
def get_reserve_by_id(reserve_id: int, db: Session = Depends(get_db)):
    return db_reserve.get_reserve_by_id(reserve_id=reserve_id, db=db)


# @router.get('/id/{user_id}', response_model=UserResponseWithProductsSchema)
# def get_user_by_id(user_id: int, db: Session = Depends(get_db)):
#     return db_user.get_user_by_id(user_id=user_id, db=db)


# @router.get('/id_detail/{user_id}', response_model=UserDetailResponseSchema)
# def get_user_detail_by_id(user_id: int, db: Session = Depends(get_db)):
#     return db_user.get_user_detail_by_id(user_id=user_id, db=db)


# @router.get('/email/{user_email}', response_model=UserResponseWithProductsSchema)
# def get_user_by_email(user_email: str, db: Session = Depends(get_db)):
#     return db_user.get_user_by_email(user_email=user_email, db=db)


# @router.get('/name/{user_name}', response_model=UserResponseWithProductsSchema)
# def get_user_by_username(user_name: str, db: Session = Depends(get_db)):
    return db_user.get_user_by_username(user_name=user_name, db=db)