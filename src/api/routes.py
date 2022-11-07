"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint, current_app #importamos current_app

# Tablas de la base de datos
from api.models import db, User, Exercise, Product, Payment, Routines, ShoppingCart, Sales, Outstanding, Rutinaejercicios
from api.utils import generate_sitemap, APIException
import json
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
#importamos Message() de flask_mail
from flask_mail import Message 
#importamos ramdom y string para generar una clave aleatoria nueva
import random 
import string
from sqlalchemy import desc

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
        is_active = body["is_active"],
        cuota = body["cuota"])
        
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
    

    if "cuota" in body:
        usuario.is_active = body["cuota"]

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
        photo_exercise=body["photo_exercise"],
        video_exercise=body["video_exercise"])
        
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
    results = list(map(lambda x: { **x.serializeUser(), **x.serialize() }, payment))
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
    results = {**paymentId.serialize(), **paymentId.serializeUser()}


    if paymentId is None: 
        response_body = {"msg": "Mensualidad no encontrada"}
        return jsonify(response_body), 400

    return jsonify(results), 200

# Busca todos los pagos por id de usuario 
@api.route('/mensualidad/<int:user_id>', methods=['GET'])
def get_payment_userId(user_id):
    paymentId = Payment.query.filter_by(user_id=user_id).all()
    #print(paymentId)
    results = list(map(lambda x: x.serialize(), paymentId))
    
    if paymentId is None: 
        response_body = {"msg": "Mensualidad no encontrada"}
        return jsonify(response_body), 400
    return jsonify(results), 200

# Borra una mensualidad
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

# Modifica un mensualidad por id
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

#Muestra el ultimo id de rutina
@api.route('/rutina', methods=['GET'])
def getRoutinesUltimoId():
    ultimoid = Routines.query.order_by(desc(Routines.id)).first()

    return jsonify(ultimoid.serialize()), 200

    if ultimoid is None:
        return jsonify("No hay rutinas creadas"), 200

# Muestra todas las rutinas
@api.route('/rutinas', methods=['GET'])
def getRoutines():
    
    routines = Routines.query.all()
    results = list(map(lambda x: x.serialize(), routines ))

    print (results)
    return jsonify(results), 200

# Alta de rutinas
@api.route('/rutinas', methods=['POST'])
def addRoutines():
    body = json.loads(request.data)

    queryNewRoutines= Routines.query.filter_by(user_id=body["user_id"]).first()
    
    if queryNewRoutines:
        new_routines = Routines(user_id=body["user_id"])
        
        db.session.add(new_routines)
        db.session.commit()
        
        response_body = {"msg": "Nueva rutina creada"}
        return jsonify(new_routines.serialize()), 200
    
    return jsonify("No existe el usuario"), 400

# Busca por id de rutina
@api.route('/rutinas/<int:routines_id>', methods=['GET'])
def get_routines(routines_id):
    routinesId = Routines.query.filter_by(id=routines_id).first()

    if routinesId is None: 
        response_body = {"msg": "Rutina no encontrada"}
        return jsonify(response_body), 400

    routines= routinesId.serialize()
    return jsonify(routines), 200

# # Busca por id de usuario
@api.route('/rutina/<int:user_id>', methods=['GET'])
def get_routines_userId(user_id):
    routinesId = Routines.query.filter_by(user_id=user_id).all()
    results = list(map(lambda x: x.serialize(), routinesId))
   
    if routinesId is None: 
        response_body = {"msg": "Rutina no encontrada"}
        return jsonify(response_body), 400
    return jsonify(results), 200

#Borra una rutina
@api.route('/rutinas/<int:routines_id>', methods=['DELETE'])
def deleteRoutines(routines_id):
    routinesId= Routines.query.filter_by(id=routines_id).first()

  
    if routinesId is None: 
        response_body = {"msg": "Rutina no encontrada"}
        return jsonify(response_body), 400

    db.session.delete(routinesId)
    db.session.commit()
    response_body = {"msg": "Rutina borrada"}
    return jsonify(response_body), 200

# Modifica una rutina por id
@api.route('/rutinas/<int:routines_id>', methods=['PUT'])
def routinesModif_porId(routines_id):
    print(routines_id)
    routines = Routines.query.filter_by(id=routines_id).first()
    body = json.loads(request.data)

    if routines is None:
        response_body = {"msg": "No existe la rutina"}
        return jsonify(response_body), 400    

    if "series" in body:
         routines.series =  body["series"]

    if "repetitions" in body:
        routines.repetitions = body["repetitions"]

    if "burden" in body:
        routines.burden= body["burden"]

    if "week" in body:
        routines.week = body["week"]
    if "user_id" in body:
        routines.user_id = body["user_id"]
    if "finish" in body:
        routines.finish = body["finish"]

    db.session.commit()

    response_body = {"msg": "Rutina modificado"}
    return jsonify(response_body), 400

#######################################
##                                   ##
##      RUTAS DE RUTINAS             ##
##      CON EJERCICIOS               ##
##                                   ## 
#######################################
# Busca por id de rutina
@api.route('/rutinaEjercicio/<int:routines_id>', methods=['GET'])
def get_routinesEjerc(routines_id):
    #Busca los ejercicios de la rutina por su id
    rutina = Rutinaejercicios.query.filter_by(idRutina=routines_id).all()
    results = list(map(lambda x: { **x.serializeEjercicios(), **x.serialize() }, rutina))

    if rutina is None: 
        response_body = {"msg": "Rutina no encontrada"}
        return jsonify(response_body), 400

    return jsonify(results), 200

# Alta de ejercicios en rutinas
@api.route('/rutinaEjercicio', methods=['POST'])
def addRoutinesEjercicio():
    body = json.loads(request.data)
    queryNewRoutines= Rutinaejercicios.query.filter_by(idRutina=body["idRutina"]).first()
    
    idRutina = body["idRutina"]
    print(idRutina)
    
    if queryNewRoutines is None:
        response_body = {
            "msg": "No existe rutina creada" 
        }
        return jsonify(response_body), 400
    
    new_routines = Rutinaejercicios(
    idRutina = body["idRutina"],
    idEjercicios = body["idEjercicios"],
    series=body["series"],
    repeticiones=body["repeticiones"], 
    carga=body["carga"], 
    semana=body["semana"],
    finaliza=body["finaliza"])
        
    db.session.add(new_routines)
    db.session.commit()
        
    return jsonify(new_routines.serialize()), 200
    
# Borra ejercicio de la rutina
@api.route('/rutinaEjercicio/<int:id>', methods=['DELETE'])
def deleteRoutinesExercise(id):
    routinesId= Rutinaejercicios.query.filter_by(id=id).first()

    if routinesId is None: 
        response_body = {"msg": "Rutina no encontrada"}
        return jsonify(response_body), 400

    db.session.delete(routinesId)
    db.session.commit()

    response_body = {"msg": "Ejercicio de la rutina borrada"}
    return jsonify(response_body), 200

#######################################
##                                   ##
##      RUTAS DEL CARRITO            ##
##                                   ## 
#######################################


# Muestra todas las compras
@api.route('/compras', methods=['GET'])
def getShoppingCart():
    
    shoppingCart = ShoppingCart.query.all()
    results = list(map(lambda x: x.serialize(), shoppingCart ))

    print (results)
    return jsonify(results), 200

# Alta de la compra
@api.route('/compras', methods=['POST'])
def addShoppingCart():
    body = json.loads(request.data)

    queryNewShoppingCart= ShoppingCart.query.filter_by(user_id=body["user_id"]).first()
    
    if queryNewShoppingCart is None:
        new_shoppingCart = ShoppingCart(user_id=body["user_id"],
        product_id=body["product_id"])
        
        db.session.add(new_shoppingCart)
        db.session.commit()
        
        response_body = {
            "msg": "Nueva compra creada" 
        }
        return jsonify(new_shoppingCart.serialize()), 200
    
    response_body = {
        "msg": "Compra ya creada" 
    }
    return jsonify(response_body), 400

# Busca por id de compra
@api.route('/compras/<int:shoppingCart_id>', methods=['GET'])
def get_shoppingCart(shoppingCart_id):
    shoppingCartId = ShoppingCart.query.filter_by(id=shoppingCart_id).first()

    if shoppingCartId is None: 
        response_body = {"msg": "Compra no encontrada"}
        return jsonify(response_body), 400

    shoppingCart= shoppingCartId.serialize()
    return jsonify(routines), 200

# # Busca por id de usuario
@api.route('/compra/<int:user_id>', methods=['GET'])
def get_shoppingCart_userId(user_id):
    shoppingCartId = ShoppingCart.query.filter_by(user_id=user_id).all()
    results = list(map(lambda x: x.serialize(), shoppingCartId))
   


    if shoppingCartId is None: 
        response_body = {"msg": "Compra no encontrada"}
        return jsonify(response_body), 400
    return jsonify(results), 200

#Borra una rutina

@api.route('/compras/<int:shoppingCart_id>', methods=['DELETE'])
def deleteShoppingCart(shoppingCart_id):
    shoppingCartId= Routines.query.filter_by(id=shoppingCart_id).first()

  
    if shoppingCartId is None: 
        response_body = {"msg": "Compra no encontrada"}
        return jsonify(response_body), 400

    db.session.delete(shoppingCartId)
    db.session.commit()
    response_body = {"msg": "Rutina borrada"}
    return jsonify(response_body), 200

# Modifica una compra por id
@api.route('/compras/<int:shoppingCart_id>', methods=['PUT'])
def shoppingCartModif_porId(shoppingCart_id):
    print(shoppingCart_id)
    shoppingCart = ShoppingCart.query.filter_by(id=shoppingCart_id).first()
    body = json.loads(request.data)

    if shoppingCart is None:
        response_body = {"msg": "No existe la compra"}
        return jsonify(response_body), 400    

    if "user_id" in body:
         shoppingCart.user_id =  body["user_id"]

    if "product_id" in body:
        shoppingCart.product_id = body["product_id"]

    

    db.session.commit()

    response_body = {"msg": "Compra modificado"}
    return jsonify(response_body), 400

#######################################
##                                   ##
##      RUTAS DE VENTAS              ##
##                                   ## 
#######################################

# Muestra todas las ventas
@api.route('/ventas', methods=['GET'])
def getSales():
    
    sales = Sales.query.all()
    results = list(map(lambda x: x.serialize(), sales ))

    print (results)
    return jsonify(results), 200

# Alta de ventas
@api.route('/ventas', methods=['POST'])
def addSales():
    body = json.loads(request.data)

    queryNewSales= Sales.query.filter_by(id=body["id"]).first()
    
    if queryNewSales is None:

        
        new_sales = Sales(date=body["date"],id=body["id"],
        notion=body["notion"],
        amount=body["amount"])
        
        db.session.add(new_sales)
        db.session.commit()
        
        response_body = {
            "msg": "Nueva venta creada" 
        }
        return jsonify(new_sales.serialize()), 200
    
    response_body = {
        "msg": "Venta ya creada" 
    }
    return jsonify(response_body), 400

# Busca por id de la venta
@api.route('/ventas/<int:sales_id>', methods=['GET'])
def get_sales(sales_id):
    salesId = Sales.query.filter_by(id=sales_id).first()

    if salesId is None: 
        response_body = {"msg": "Venta no encontrada"}
        return jsonify(response_body), 400

    sales= salesId.serialize()
    return jsonify(routines), 200

#Borra una venta

@api.route('/ventas/<int:sales_id>', methods=['DELETE'])
def deleteSales(sales_id):
    salesId= Sales.query.filter_by(id=sales_id).first()

  
    if salesId is None: 
        response_body = {"msg": "Venta no encontrada"}
        return jsonify(response_body), 400

    db.session.delete(salesId)
    db.session.commit()
    response_body = {"msg": "Venta borrada"}
    return jsonify(response_body), 200

# Modifica una venta por id
@api.route('/ventas/<int:sales_id>', methods=['PUT'])
def salesModif_porId(sales_id):
    print(sales_id)
    sales = Sales.query.filter_by(id=sales_id).first()
    body = json.loads(request.data)

    if sales is None:
        response_body = {"msg": "No existe la venta"}
        return jsonify(response_body), 400    

    if "date" in body:
         sales.date =  body["date"]

    if "notion" in body:
        sales.notion = body["notion"]
    
    if "amount" in body:
        sales.amount = body["amount"]

    if "id" in body:
        sales.id = body["id"]

    

    db.session.commit()

    response_body = {"msg": "Venta modificado"}
    return jsonify(response_body), 400

#######################################
##                                   ##
##      RUTAS DE PENDIENTES          ##
##                                   ## 
#######################################

# Muestra pendientes
@api.route('/pendientes', methods=['GET'])
def getOutstanding():
    
    outstanding = Outstanding.query.all()
    results = list(map(lambda x: x.serialize(), outstanding ))

    print (results)
    return jsonify(results), 200

# Alta de pendientes
@api.route('/pendientes', methods=['POST'])
def addOutstanding():
    body = json.loads(request.data)

    queryNewOutstanding= Outstanding.query.filter_by(id=body["id"]).first()
    
    if queryNewOutstanding is None:

        
        new_outstanding = Outstanding(id=body["id"],
        state=body["state"],
        amount=body["amount"],user_id=body["user_id"],product_id=body["product_id"])
        
        db.session.add(new_outstanding)
        db.session.commit()
        
        response_body = {
            "msg": "Pendiente creado" 
        }
        return jsonify(new_outstanding.serialize()), 200
    
    response_body = {
        "msg": "Pendiente ya creado" 
    }
    return jsonify(response_body), 400

# Busca por id de pendientes
@api.route('/pendientes/<int:outstanding_id>', methods=['GET'])
def get_outstanding(outstanding_id):
    outstandingId = Outstanding.query.filter_by(id=outstanding_id).first()

    if outstandingId is None: 
        response_body = {"msg": "Venta no encontrada"}
        return jsonify(response_body), 400

    outstanding= outstandingId.serialize()
    return jsonify(routines), 200


# Busca por id de usuario
@api.route('/pendiente/<int:user_id>', methods=['GET'])
def get_outstanding_userId(user_id):
    outstandingId = Outstanding.query.filter_by(user_id=user_id).all()
    
    results = list(map(lambda x: x.serialize(), outstandingId))
    


    if outstandingId is None: 
        response_body = {"msg": "Pendiente no encontrado"}
        return jsonify(response_body), 400
    return jsonify(results), 200

#Borra un pendiente

@api.route('/pendientes/<int:outstanding_id>', methods=['DELETE'])
def deleteOutstanding(outstanding_id):
    outstandingId= Outstanding.query.filter_by(id=outstanding_id).first()

  
    if outstandingId is None: 
        response_body = {"msg": "Pendiente no encontrado"}
        return jsonify(response_body), 400

    db.session.delete(outstandingId)
    db.session.commit()
    response_body = {"msg": "Pendiente borrado"}
    return jsonify(response_body), 200

# Modifica un pendiente por id
@api.route('/pendientes/<int:outstanding_id>', methods=['PUT'])
def outstandingModif_porId(outstanding_id):
    print(outstanding_id)
    outstanding = Outstanding.query.filter_by(id=outstanding_id).first()
    body = json.loads(request.data)

    if outstanding is None:
        response_body = {"msg": "No existe la venta"}
        return jsonify(response_body), 400    

    if "id" in body:
         outstanding.id =  body["id"]

    if "state" in body:
        outstanding.state = body["state"]
    
    if "amount" in body:
        outstanding.amount = body["amount"]

    if "user_id" in body:
        outstanding.user_id = body["user_id"]

    if "product_id" in body:
        outstanding.product_id = body["product_id"]


    

    db.session.commit()

    response_body = {"msg": "Pendiente modificado"}
    return jsonify(response_body), 400

#######################################
##                                   ##
##           LOGIN                   ##
##                                   ## 
#######################################

@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None) #Formas de recibir el front
    password = request.json.get("password", None) #Formas de recibir el front
    login_user = User.query.filter_by(email=email).first()
    if login_user is None:
         return jsonify({"msg":"User dont exist"}), 404
    if email != login_user.email or password != login_user.password:
        return jsonify({"msg":'Bad email or password'}), 401
#crea el acceso y devuelve un token a las personas al loguearse
    access_token = create_access_token(identity=email)
    response_body={
        "access_token":access_token,
        "user":login_user.serialize()
        
    }
    return jsonify(response_body), 200

#######################################
##                                   ##
##           PERFIL                  ##
##                                   ## 
#######################################

@api.route("/profile", methods=["GET"])
@jwt_required() #portero de la ruta 
def protected():
    # Access the identity of the current user with get_jwt_identity
    current_user = get_jwt_identity()
    login_user = User.query.filter_by(email=current_user).first()
    if login_user is None:
        return jsonify({"msg": "User don't exist"}), 404
    response_body={
        
        "user":login_user.serialize()
        
    }
    return jsonify(response_body), 200

#######################################
##                                   ##
# RECUPERACION CONTRASEÑA OLVIDADA   ##
##                                   ## 
#######################################



@api.route("/contraseña", methods=["POST"])
def forgotpassword():
    recover_email = request.json['email']
    recover_password = ''.join(random.choice(string.ascii_uppercase + string.digits) for x in range(8)) #clave aleatoria nueva
   
    if not recover_email:
        return jsonify({"msg": "Debe ingresar el correo"}), 401
	#busco si el correo existe en mi base de datos
    user = User.query.filter_by(email=recover_email).first()
    if recover_email != user.email:
        return jsonify({"msg": "El correo ingresado no existe en nuestros registros"}), 400
    #si existe guardo la nueva contraseña aleatoria
    user.password = recover_password
    db.session.commit()
	#luego se la envio al usuario por correo para que pueda ingresar
    msg = Message("Hi", recipients=[recover_email])
    msg.html = f"""<h1>Su nueva contraseña es: {recover_password}</h1>"""
    current_app.mail.send(msg)
    return jsonify({"msg": "Su nueva clave ha sido enviada al correo electrónico ingresado"}), 200