"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint

# Tablas de la base de datos
from api.models import db, User, Exercise, Product, Payment
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
##      RUTAS DE EJERCICIOS          ##
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

 #######################################
##                                   ##
##      RUTAS DE PRODUCTOS            ##
##                                   ## 
#######################################

# Muestra todos los productos
@api.route('/productos', methods=['GET'])
def getProduct():
    
    product = Product.query.all()
    results = list(map(lambda x: x.serialize(), product ))
    print (results)
    return jsonify(results), 200

# Alta de un producto
@api.route('/productos', methods=['POST'])
def addProduct():
    body = json.loads(request.data)

    queryNewProduct = Product.query.filter_by(name=body["name"]).first()
    
    if queryNewProduct is None:
        new_product = Product(name=body["name"],
        stock=body["stock"], 
        sale_price=body["sale_price"], 
        photo=body["photo"],
        purchase_price=body["purchase_price"])
        
        db.session.add(new_product)
        db.session.commit()
        
        response_body = {
            "msg": "Nuevo producto creado" 
        }
        return jsonify(new_product.serialize()), 200
    
    response_body = {
        "msg": "Producto ya creado" 
    }
    return jsonify(response_body), 400

# Busca por id de producto
@api.route('/productos/<int:product_id>', methods=['GET'])
def get_product(product_id):
    productId = Product.query.filter_by(id=product_id).first()

    if productId is None: 
        response_body = {"msg": "Producto no encontrado"}
        return jsonify(response_body), 400

    product = productId.serialize()
    return jsonify(product), 200

# Borra un ejercicio
@api.route('/productos/<int:product_id>', methods=['DELETE'])
def deleteProduct(product_id):
    productId = Product.query.filter_by(id=product_id).first()

  
    if productId is None: 
        response_body = {"msg": "Producto no encontrado"}
        return jsonify(response_body), 400

    db.session.delete(productId)
    db.session.commit()
    response_body = {"msg": "Producto borrado"}
    return jsonify(response_body), 200

# Modifica un producto por id
@api.route('/productos/<int:product_id>', methods=['PUT'])
def productModif_porId(product_id):
    print(product_id)
    product = Product.query.filter_by(id=product_id).first()
    body = json.loads(request.data)

    if product is None:
        response_body = {"msg": "No existe el producto"}
        return jsonify(response_body), 400    

    if "name" in body:
         product.name =  body["name"]

    if "stock" in body:
        product.stock = body["stock"]

    if "sale_price" in body:
        product.sale_price= body["sale_price"]

    if "photo" in body:
        product.photo = body["photo"]
    if "purchase_price" in body:
        product.purchase_price = body["purchase_price"]

    db.session.commit()

    response_body = {"msg": "Producto modificado"}
    return jsonify(response_body), 400

#######################################
##                                   ##
##      RUTAS DE MENSUALIDADES       ##
##                                   ## 
#######################################

# Muestra todas las mensualidadess
@api.route('/mensualidades', methods=['GET'])
def getPayment():
    
    payment = Payment.query.all()
    results = list(map(lambda x: x.serialize(), payment ))
    print (results)
    return jsonify(results), 200

# Alta de mensualidad
@api.route('/mensualidades', methods=['POST'])
def addPayment():
    body = json.loads(request.data)

    queryNewPayment= Payment.query.filter_by(bill_n=body["bill_n"]).first()
    
    if queryNewPayment is None:
        new_payment = Payment(payment_date=body["payment_date"],
        payment_amount=body["payment_amount"], 
        bill_n=body["bill_n"], 
        state=body["state"],
        user_id=body["user_id"],
        description=body["description"])
        
        db.session.add(new_payment)
        db.session.commit()
        
        response_body = {
            "msg": "Nueva mensualidad creada" 
        }
        return jsonify(new_payment.serialize()), 200
    
    response_body = {
        "msg": "Mensualidad ya creada" 
    }
    return jsonify(response_body), 400

# Busca por id de mensualidad
@api.route('/mensualidades/<int:payment_id>', methods=['GET'])
def get_payament(payment_id):
    paymentId = Payment.query.filter_by(id=payment_id).first()

    if paymentId is None: 
        response_body = {"msg": "Mensualidad no encontrada"}
        return jsonify(response_body), 400

    payment = paymentId.serialize()
    return jsonify(payment), 200

# Busca por id de usuario
@api.route('/mensualidad/<int:user_id>', methods=['GET'])
def get_payment_userId(user_id):
    paymentId = Payment.query.filter_by(user_id=user_id).all()
    # print(paymentId.serialize())


    if paymentId is None: 
        response_body = {"msg": "Mensualidad no encontrada"}
        return jsonify(response_body), 400

    payment = paymentId.serialize()
    return jsonify(payment), 200

# Borra un ejercicio
@api.route('/mensualidades/<int:payment_id>', methods=['DELETE'])
def deletePayment(payment_id):
    paymentId= Payment.query.filter_by(id=payment_id).first()

  
    if paymentId is None: 
        response_body = {"msg": "Mensualidad no encontrada"}
        return jsonify(response_body), 400

    db.session.delete(paymentId)
    db.session.commit()
    response_body = {"msg": "Mensualidad borrada"}
    return jsonify(response_body), 200

# Modifica un producto por id
@api.route('/mensualidades/<int:payment_id>', methods=['PUT'])
def paymentModif_porId(payment_id):
    print(payment_id)
    payment = Payment.query.filter_by(id=payment_id).first()
    body = json.loads(request.data)

    if payment is None:
        response_body = {"msg": "No existe la mensualidad"}
        return jsonify(response_body), 400    

    if "payment_date" in body:
         payment.payment_date =  body["payment_date"]

    if "payment_amount" in body:
        payment.payment_amount = body["payment_amount"]

    if "bill_n" in body:
        payment.bill_n= body["bill_n"]

    if "state" in body:
        payment.state = body["state"]
    if "description" in body:
        payment.description = body["description"]

    db.session.commit()

    response_body = {"msg": "Producto modificado"}
    return jsonify(response_body), 400

#######################################
##                                   ##
##      RUTAS DE RUTINAS             ##
##                                   ## 
#######################################

# Muestra todas las rutinas
@api.route('/rutinas', methods=['GET'])
def getRoutines():
    
    routines = Routines.query.all()
    results = list(map(lambda x: x.serialize(), routines ))
    print (results)
    return jsonify(results), 200

# Alta de mensualidad
@api.route('/rutinas', methods=['POST'])
def addRoutines():
    body = json.loads(request.data)

    queryNewRoutines= Routines.query.filter_by(user_id=body["user_id"]).first()
    
    if queryNewRoutines is None:
        new_routines = Routines(series=body["series"],
        repetitions=body["repetitions"], 
        burden=body["burden"], 
        week=body["week"],
        user_id=body["user_id"],
        finish=body["finish"])
        
        db.session.add(new_routines)
        db.session.commit()
        
        response_body = {
            "msg": "Nueva rutina creada" 
        }
        return jsonify(new_routines.serialize()), 200
    
    response_body = {
        "msg": "Rutina ya creada" 
    }
    return jsonify(response_body), 400

# Busca por id de rutina
@api.route('/rutinas/<int:routines_id>', methods=['GET'])
def get_routines(routines_id):
    routinesId = Routines.query.filter_by(id=routines_id).first()

    if routinesId is None: 
        response_body = {"msg": "Rutina no encontrada"}
        return jsonify(response_body), 400

    routines= routinesId.serialize()
    return jsonify(routines), 200

# Busca por id de usuario
@api.route('/rutina/<int:user_id>', methods=['GET'])
def get_routines_userId(user_id):
    routinesId = Routines.query.filter_by(id=user_id).first()

    if routinesId is None: 
        response_body = {"msg": "Rutina no encontrada"}
        return jsonify(response_body), 400

    payment = paymentId.serialize()
    return jsonify(payment), 200
