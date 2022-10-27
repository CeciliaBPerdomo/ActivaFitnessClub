"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint

# Tablas de la base de datos
from api.models import db, User
from api.utils import generate_sitemap, APIException
import json

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Probando el back - Ceci"
    }

    return jsonify(response_body), 200

#######################################
##                                   ##
##      RUTAS DE USUARIOS            ##
##                                   ## 
#######################################

# Muestra todos los usuarios
@api.route('/user', methods=['GET'])
def getUser():
    user = User.query.all()
    results = list(map(lambda x: x.serialize(), user))
    print (results)
    return jsonify(results), 200


# Alta de un usuario
@api.route('/user', methods=['POST'])
def addUser():
    body = json.loads(request.data)

    queryNewUser = User.query.filter_by(email=body["email"]).first()
    
    if queryNewUser is None:
        new_user = User(ci=body["ci"],
        name=body["name"], 
        last_name=body["last_name"], 
        phone=body["phone"],
        date_of_admission=body["date_of_admission"],
        birthday = body["birthday"],
        mutualist=body["mutualist"], 
        medical_conditions=body["medical_conditions"],
        medicines = body["medicines"],
        training_goals = body["training_goals"],
        email = body["email"], 
        password = body["password"],
        activities = body["activities"],
        role = body["role"],
        is_active = body["is_active"])
        
        db.session.add(new_user)
        db.session.commit()
        
        response_body = {
            "msg": "Nuevo usuario creado" 
        }
        return jsonify(new_user.serialize()), 200
    
    response_body = {
        "msg": "Usuario ya creado" 
    }
    return jsonify(response_body), 400


# Busca por id de usuario
@api.route('/user/<int:user_id>', methods=['GET'])
def get_user(user_id):
    userId = User.query.filter_by(id=user_id).first()

    if userId is None: 
        response_body = {"msg": "Usuario no encontrado"}
        return jsonify(response_body), 400

    usuario = userId.serialize()
    return jsonify(usuario), 200

# Borra un usuario
@api.route('/user/<int:user_id>', methods=['DELETE'])
def deleteUser(user_id):
    userId = User.query.filter_by(id=user_id).first()
  
    if userId is None: 
        response_body = {"msg": "Usuario no encontrado"}
        return jsonify(response_body), 400

    db.session.delete(userId)
    db.session.commit()
    response_body = {"msg": "Usuario borrado"}
    return jsonify(response_body), 200

# Modifica un usuario por id
@api.route('/user/<int:user_id>', methods=['PUT'])
def usersModif_porId(user_id):
    print(user_id)
    usuario = User.query.filter_by(id=user_id).first()
    body = json.loads(request.data)

    if usuario is None:
        response_body = {"msg": "No existe el usuario"}
        return jsonify(response_body), 400    

    if "ci" in body:
        usuario.ci =  body["ci"]

    if "name" in body:
        usuario.name = body["name"]

    if "last_name" in body:
        usuario.last_name = body["last_name"]

    if "phone" in body:
        usuario.phone = body["phone"]

    if "date_of_admission" in body:
        usuario.date_of_admission = body["date_of_admission"]

    if "birthday" in body: 
        usuario.birthday = body["birthday"]

    if "mutualist" in body:
        usuario.mutualist = body["mutualist"]

    if "medical_conditions" in body:
        usuario.medicial_conditions = body["medical_conditions"]
    
    if "medicines" in body: 
        usuario.medicines = body["medicines"]

    if "training_goals" in body: 
        usuario.training_goals = body["training_goals"]

    if "email" in body:
        usuario.email = body["email"]
    
    if "password" in body:
        usuario.password = body["password"]
    
    if "activities" in body:
        usuario.activities = body["activities"]

    if "role" in body:
        usuario.role = body["role"]
    
    if "is_active" in body:
        usuario.is_active = body["is_active"]

    db.session.commit()

    response_body = {"msg": "Usuario modificado"}
    return jsonify(response_body), 400