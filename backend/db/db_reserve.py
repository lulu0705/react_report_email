from fastapi import HTTPException, status
from router.schemas import ReserveRequestSchema
from sqlalchemy.orm.session import Session
from sqlalchemy import func, exc
from sqlalchemy.exc import IntegrityError

from db.models import DbReserve


def create(db: Session, request: ReserveRequestSchema) :
    new_reserve = DbReserve(
        name=request.name,
        phone=request.phone,
        email=request.email,
        county=request.county,
        addr=request.addr,
        area=request.area,
        # time=request.time,
        reserve_date=request.reserve_date,
        product_id=request.product_id,

    )
    db.add(new_reserve)
    db.commit()
    db.refresh(new_reserve)
    return new_reserve
    # try:
    #     db.add(new_reserve)
    #     db.commit()
    #     db.refresh(new_reserve)
    #     access_token = create_access_token(data={'username': new_reserve.username})
    #     return {
    #         'access_token': access_token,
    #         'user_id': new_user.id,
    #         'username': new_user.username,
    #         'tel': '',
    #         'address': ''
    #     }
    # except IntegrityError as exc:
        # db.rollback()
        # raise HTTPException(status_code=400, detail=f"{exc}".split('\n')[0])


# def signin(db: Session, request: SignInRequestSchema):
#     user = db.query(DbUser).filter(func.upper(DbUser.email) == request.email.upper()).first()
#     if not user:
#         raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
#                             detail=f'User with email = {request.email} not found')
#     if not verify(user.password, request.password):
#         print('password not OK')
#         raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
#                             detail='Incorrect password')

#     user_detail = db.query(DbUserDetail).filter(DbUserDetail.owner_id == user.id).first()
#     if not user_detail:
#         user_detail = DbUserDetail(
#             address='',
#             tel='',
#             owner_id=user.id,
#         )
#         db.add(user_detail)
#         pass

#     access_token = create_access_token(data={'username': user.username})

#     return {
#         'access_token': access_token,
#         'user_id': user.id,
#         'username': user.username,
#         'tel': user_detail.tel,
#         'address': user_detail.address
#     }


# def update(db: Session, request: UpdateProfileRequestSchema):
#     user = db.query(DbUser).filter(DbUser.id == request.user_id)
#     if "password" in request:
#         user.update({
#             DbUser.username: request.username,
#             DbUser.password: bcrypt(request.password)
#         })
#     else:
#         user.update({
#             DbUser.username: request.username,
#         }) 

#     user_detail = db.query(DbUserDetail).filter(DbUserDetail.owner_id == request.user_id).first()
#     if not user_detail:
#         user_detail = DbUserDetail(
#             address=request.address,
#             tel=request.tel,
#             owner_id=request.user_id,
#         )
#         db.add(user_detail)
#         pass
#     else:
#         user_detail = db.query(DbUserDetail).filter(DbUserDetail.owner_id == request.user_id)
#         user_detail.update({
#             DbUserDetail.address: request.address,
#             DbUserDetail.tel: request.tel
#         })

#     db.commit()
#     access_token = create_access_token(data={'username': request.username})
#     return {
#         'access_token': access_token,
#         'user_id': request.user_id,
#         'username': request.username,
#         'address': request.address,
#         'tel': request.tel
#     }


def get_all_reserves(db: Session):
    reserves = db.query(DbReserve).all()
    if not reserves:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f'Reserves not found')
    return reserves



def get_reserve_by_id(reserve_id: int, db: Session):
    reserve = db.query(DbReserve).filter(DbReserve.id == reserve_id).first()
    if not reserve:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f'Reserve with id = {reserve_id} not found')
    return reserve

# def get_user_by_id(user_id: int, db: Session):
#     user = db.query(DbUser).filter(DbUser.id == user_id).first()
#     if not user:
#         raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
#                             detail=f'User with id = {user_id} not found')
#     return user


# def get_user_detail_by_id(user_id: int, db: Session):
#     user = db.query(DbUserDetail).filter(DbUserDetail.owner_id == user_id).first()
#     if not user:
#         raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
#                             detail=f'User detail with id = {user_id} not found')
#     return user


# def get_user_by_email(user_email: str, db: Session):
#     user = db.query(DbUser).filter(func.upper(DbUser.email) == user_email.upper()).first()
#     if not user:
#         raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
#                             detail=f'User with email = {user_email} not found')
#     return user


# def get_user_by_username(user_name: str, db: Session):
    user = db.query(DbUser).filter(func.upper(DbUser.username) == user_name.upper()).first()
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f'User with user name = {user_name} not found')
    return user