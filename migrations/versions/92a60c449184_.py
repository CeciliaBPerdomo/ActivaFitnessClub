"""empty message

Revision ID: 92a60c449184
Revises: 
Create Date: 2022-11-16 20:29:33.612154

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '92a60c449184'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('product',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=80), nullable=False),
    sa.Column('stock', sa.String(length=80), nullable=False),
    sa.Column('sale_price', sa.String(length=80), nullable=False),
    sa.Column('photo', sa.String(length=80), nullable=False),
    sa.Column('purchase_price', sa.String(length=80), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('sales',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('date', sa.String(length=80), nullable=False),
    sa.Column('notion', sa.String(length=80), nullable=False),
    sa.Column('amount', sa.String(length=80), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('ci', sa.String(length=11), nullable=False),
    sa.Column('name', sa.String(length=80), nullable=False),
    sa.Column('last_name', sa.String(length=80), nullable=False),
    sa.Column('phone', sa.String(length=9), nullable=False),
    sa.Column('date_of_admission', sa.String(length=80), nullable=False),
    sa.Column('birthday', sa.String(length=80), nullable=False),
    sa.Column('mutualist', sa.String(length=80), nullable=False),
    sa.Column('medical_conditions', sa.String(length=80), nullable=False),
    sa.Column('medicines', sa.String(length=80), nullable=False),
    sa.Column('training_goals', sa.String(length=80), nullable=False),
    sa.Column('email', sa.String(length=80), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('activities', sa.String(length=80), nullable=False),
    sa.Column('role', sa.String(length=80), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.Column('cuota', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('ci'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('phone')
    )
    op.create_table('outstanding',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('state', sa.String(length=80), nullable=False),
    sa.Column('amount', sa.String(length=80), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('product_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['product_id'], ['product.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('payment',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('payment_date', sa.String(length=80), nullable=False),
    sa.Column('payment_amount', sa.String(length=80), nullable=False),
    sa.Column('bill_n', sa.String(length=80), nullable=False),
    sa.Column('state', sa.Boolean(), nullable=False),
    sa.Column('description', sa.String(length=150), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('routines',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('shopping_cart',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('idCarrito', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('product_id', sa.Integer(), nullable=True),
    sa.Column('cantidad', sa.Integer(), nullable=False),
    sa.Column('precio', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['product_id'], ['product.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('exercise',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('exercise_name', sa.String(length=80), nullable=False),
    sa.Column('type_of_muscle', sa.String(length=80), nullable=False),
    sa.Column('description', sa.String(length=500), nullable=False),
    sa.Column('photo_exercise', sa.String(length=250), nullable=True),
    sa.Column('video_exercise', sa.String(length=200), nullable=True),
    sa.Column('routines_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['routines_id'], ['routines.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('rutinaejercicios',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('idRutina', sa.Integer(), nullable=True),
    sa.Column('idEjercicios', sa.Integer(), nullable=True),
    sa.Column('series', sa.Integer(), nullable=False),
    sa.Column('repeticiones', sa.Integer(), nullable=True),
    sa.Column('carga', sa.Integer(), nullable=True),
    sa.Column('semana', sa.Integer(), nullable=False),
    sa.Column('finaliza', sa.String(length=15), nullable=False),
    sa.ForeignKeyConstraint(['idEjercicios'], ['exercise.id'], ),
    sa.ForeignKeyConstraint(['idRutina'], ['routines.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('rutinaejercicios')
    op.drop_table('exercise')
    op.drop_table('shopping_cart')
    op.drop_table('routines')
    op.drop_table('payment')
    op.drop_table('outstanding')
    op.drop_table('user')
    op.drop_table('sales')
    op.drop_table('product')
    # ### end Alembic commands ###
