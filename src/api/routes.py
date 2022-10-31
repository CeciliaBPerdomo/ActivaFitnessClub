"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint

# Tablas de la base de datos
from api.models import db, User, Exercise
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

    #######################################
##                                   ##
##      RUTAS DE USUARIOS            ##
##                                   ## 
#######################################

# Muestra todos los ejercicios
@api.route('/ejercicios', methods=['GET'])
def getExercise():
    
    exercise = Exercise.query.all()
    results = list(map(lambda x: x.serialize(), exercise))
    print (results)
    return jsonify(results), 200

# Alta de un ejercicio
@api.route('/ejercicios', methods=['POST'])
def addExercise():
    body = json.loads(request.data)

    queryNewExercise = Exercise.query.filter_by(exercise_name=body["exercise_name"]).first()
    
    if queryNewExercise is None:
        new_exercise = Exercise(exercise_name=body["exercise_name"],
        type_of_muscle=body["type_of_muscle"], 
        description=body["description"], 
        photo_exercise=body["photo_exercise"])
        
        db.session.add(new_exercise)
        db.session.commit()
        
        response_body = {
            "msg": "Nuevo ejercicio creado" 
        }
        return jsonify(new_exercise.serialize()), 200
    
    response_body = {
        "msg": "Ejercicio ya creado" 
    }
    return jsonify(response_body), 400

# Busca por id de ejercicio
@api.route('/ejercicios/<int:exercise_id>', methods=['GET'])
def get_exercise(exercise_id):
    exerciseId = Exercise.query.filter_by(id=exercise_id).first()

    if exerciseId is None: 
        response_body = {"msg": "Ejercicio no encontrado"}
        return jsonify(response_body), 400

    exercise = exerciseId.serialize()
    return jsonify(exercise), 200
# Borra un ejercicio
@api.route('/ejercicios/<int:exercise_id>', methods=['DELETE'])
def deleteExercise(exercise_id):
    exerciseId = Exercise.query.filter_by(id=exercise_id).first()

  
    if exerciseId is None: 
        response_body = {"msg": "Ejercicio no encontrado"}
        return jsonify(response_body), 400

    db.session.delete(exerciseId)
    db.session.commit()
    response_body = {"msg": "Ejercicio borrado"}
    return jsonify(response_body), 200

# Modifica un ejercicio por id
@api.route('/ejercicios/<int:exercise_id>', methods=['PUT'])
def exerciseModif_porId(exercise_id):
    print(exercise_id)
    exercise = Exercise.query.filter_by(id=exercise_id).first()
    body = json.loads(request.data)

    if exercise is None:
        response_body = {"msg": "No existe el ejercicio"}
        return jsonify(response_body), 400    

    if "exercise_name" in body:
        exercise.exercise_name =  body["exercise_name"]

    if "type_of_muscle" in body:
        exercise.type_of_muscle = body["type_of_muscle"]

    if "description" in body:
        exercise.description = body["description"]

    if "photo_exercise" in body:
        exercise.photo_exercise = body["photo_exercise"]

    db.session.commit()

    response_body = {"msg": "Ejercicio modificado"}
    return jsonify(response_body), 400