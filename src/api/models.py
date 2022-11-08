from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    ci = db.Column(db.String(11), unique=True, nullable=False)
    name = db.Column(db.String(80), nullable=False)
    last_name = db.Column(db.String(80), nullable=False)
    phone = db.Column(db.String(9), unique=True, nullable=False)
    date_of_admission = db.Column(db.String(80), nullable=False) 
    birthday = db.Column(db.String(80), nullable=False)
    mutualist = db.Column(db.String(80), nullable=False)
    medical_conditions = db.Column(db.String(80), nullable=False)
    medicines = db.Column(db.String(80), nullable=False)
    training_goals = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    activities = db.Column(db.String(80), unique=False, nullable=False)
    role = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    cuota = db.Column(db.Integer, nullable=True)
    
    carrito = db.relationship('ShoppingCart', backref="user", cascade="all, delete-orphan", lazy=True)
    rutinas = db.relationship('Routines', backref="user", cascade="all, delete-orphan", lazy=True)
    payment_id = db.relationship('Payment', backref="user", cascade="all, delete-orphan", lazy=True)
    outstanding_id = db.relationship('Outstanding', backref="user", cascade="all, delete-orphan", lazy=True)


    def __repr__(self):
        return f'<User {self.email}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "last_name": self.last_name,
            "phone": self.phone,
            "date_of_admission": self.date_of_admission, 
            "birthday": self.birthday,
            "mutualist": self.mutualist,
            "medical_conditions": self.medical_conditions,
            "medicines": self.medicines,
            "training_goals": self.training_goals,
            "activities": self.activities,
            "role": self.role, 
            "is_active": self.is_active,
            "ci": self.ci, 
            "cuota": self.cuota
            # "carrito": self.list(map(lambda x: x.serialize(), self.carrito))
        }



class Product(db.Model): 
    id= db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    stock = db.Column(db.String(80), nullable=False)
    sale_price = db.Column(db.String(80), nullable=False)
    photo = db.Column(db.String(80), nullable=False)
    purchase_price = db.Column(db.String(80), nullable=False)

    carrito_id = db.relationship('ShoppingCart', backref = "product", cascade="all, delete-orphan", lazy=True)
    outstanding_id = db.relationship('Outstanding', backref = "product", cascade="all, delete-orphan", lazy=True)

    def __repr__(self):
        return f'<Producto {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "stock": self.stock,
            "sale_price": self.sale_price,
            "photo": self.photo,
            "purchase_price": self.purchase_price,
            
        }

class Exercise(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    exercise_name = db.Column(db.String(80), nullable=False)
    type_of_muscle = db.Column(db.String(80), nullable=False)
    description = db.Column(db.String(80), nullable=False)
    photo_exercise = db.Column(db.String(200), nullable=True)
    video_exercise = db.Column(db.String(200), nullable=True)

    routines_id = db.Column(db.Integer, db.ForeignKey("routines.id"))
    id_rutina_ejericios = db.relationship("Rutinaejercicios", backref="exercise", cascade="all, delete-orphan", lazy=True)

    def __repr__(self):
        return f'<Exercise {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "exercise_name": self.exercise_name,
            "type_of_muscle": self.type_of_muscle,
            "description": self.description,
            "photo_exercise": self.photo_exercise,
            "routines_id":self.routines_id,
            "video_exercise": self.video_exercise
        }

# Rutinas
class Routines(db.Model):
    id = db.Column(db.Integer, primary_key=True)
	# Clave foranea de id de usuario
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    # Relacion con la tabla auxiliar Rutina-Ejercicio
    id_rutina_ejericios = db.relationship("Rutinaejercicios", backref="routines", cascade="all, delete-orphan", lazy=True)

    def __repr__(self):
        return f'<Routines {self.id}>'

    def serialize(self):
        return {
			"id": self.id,
			"user_id": self.user_id
		}

	# Desearializa los datos del usuario.
    def serializeUser(self):
        results = User.query.filter_by(id = self.user_id).first()
        return {
            "userInfo": results.serialize(),
        }

    def serializeRutinas(self):
        results = Rutinaejercicios.query.filter_by(idRutina = self.id).all()
        rutinas = list(map(lambda x: x.serialize(), results))
        return {
            "results": rutinas, "idRutina": self.id
        }

# Rutina con sus respectivos ejercicios
class Rutinaejercicios(db.Model):
    id = db.Column(db.Integer, primary_key=True)

	# Clave foranea de la rutina
    idRutina = db.Column(db.Integer, db.ForeignKey("routines.id"))

	# Clave foranea de ejercicios
    idEjercicios = db.Column(db.Integer, db.ForeignKey("exercise.id"))

	# Cantidades del ejercicio
    series = db.Column(db.Integer, nullable=False)
    repeticiones = db.Column(db.Integer, nullable=True)
    carga = db.Column(db.Integer, nullable=True)
    semana = db.Column(db.Integer, nullable=False)
    finaliza = db.Column(db.String(15), nullable=False)

    def __repr__(self):
        return f'<Rutinaejercicios {self.id}>'

    def serialize(self):
        return {
			"id": self.id,
			"idRutina": self.idRutina,
			"idEjercicios": self.idEjercicios,
			"series": self.series,
			"repeticiones": self.repeticiones,
			"carga": self.carga,
			"semana": self.semana,
			"finaliza": self.finaliza
		}

	# Desearializa los datos de los ejercicios.
    def serializeEjercicios(self):
        results = Exercise.query.filter_by(id = self.idEjercicios).first()
        return {
            "exerciseInfo": results.serialize(),
        }
class Sales(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.String(80), nullable=False)
    notion = db.Column(db.String(80), nullable=False)
    amount = db.Column(db.String(80), nullable=False)

    def __repr__(self):
        return f'<Producto {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "date": self.date,
            "notion": self.notion,
            "amount": self.amount
        }



class ShoppingCart(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    product_id = db.Column(db.Integer, db.ForeignKey("product.id"))

    def __repr__(self):
        return f'<Producto {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "user_id":self.user_id,
            "product_id":self.product_id

        }

# Mensualidades
class Payment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    payment_date = db.Column(db.String(80), nullable=False)
    payment_amount = db.Column(db.String(80), nullable=False)
    bill_n = db.Column(db.String(80), nullable=False)
    state = db.Column(db.Boolean(), unique=False, nullable=False)
    description = db.Column(db.String(150), nullable=False)

    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))

    def __repr__(self):
        return f'<Payment {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "payment_date": self.payment_date,
            "payment_amount": self.payment_amount,
            "bill_n": self.bill_n,
            "state": self.state,
            "description":self.description,
            "user_id":self.user_id
        }

    def serializeUser(self):
        results = User.query.filter_by(id = self.user_id).first()
        return {
            "userInfo": results.serialize(),
        }



class Outstanding(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    state = db.Column(db.String(80), nullable=False)
    amount = db.Column(db.String(80), nullable=False)

    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    product_id = db.Column(db.Integer, db.ForeignKey("product.id"))

    def __repr__(self):
        return f'<Outstanding {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "state": self.state,
            "amount": self.amount,
            "user_id":self.user_id,
            "product_id":self.product_id
        }


#class Routines(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     series = db.Column(db.String(80), nullable=False)
#     repetitions = db.Column(db.String(80), nullable=False)
#     burden = db.Column(db.String(80), nullable=False)
#     week = db.Column(db.String(80), nullable=False)
#     finish = db.Column(db.String(80), nullable=False)

#     excercise_id = db.relationship('Exercise', backref="routines", cascade="all, delete-orphan", lazy=True)
#     user_id = db.Column(db.Integer, db.ForeignKey("user.id"))

#     def __repr__(self):
#         return f'<Routines {self.id}>'

#     def serialize(self):
#         return {
#             "id": self.id,
#             "series": self.series,
#             "repetitions": self.repetitions,
#             "burden": self.burden,
#             "week": self.week,
#             "finish": self.finish,
            
#             "user_id":self.user_id
#         }
