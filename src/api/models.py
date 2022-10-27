from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    ci = db.Column(db.String(11), unique=True, nullable=False)
    name = db.Column(db.String(80), nullable=False)
    last_name = db.Column(db.String(80), nullable=False)
    phone = db.Column(db.String(9), unique=True, nullable=False)
    date_of_admission = db.Column(db.Column(db.String(80), nullable=False))
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
            "is_active": self.is_active
        }

class Producto(db.Model): 
    id= db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    stock = db.Column(db.String(80), nullable=False)
    sale_price = db.Column(db.String(80), nullable=False)
    photo = db.Column (db.Column(db.String(80), nullable=False))