"""empty message

<<<<<<<< HEAD:migrations/versions/570f7818ee47_.py
Revision ID: 570f7818ee47
Revises: 
Create Date: 2022-11-02 14:13:48.118886
========
Revision ID: 7601f58d8ae4
Revises: 
Create Date: 2022-11-02 14:00:31.521171
>>>>>>>> 5e11c5a5bf8f28f5f4336d9e12a4078ce8bc36c1:migrations/versions/7601f58d8ae4_.py

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
<<<<<<<< HEAD:migrations/versions/570f7818ee47_.py
revision = '570f7818ee47'
========
revision = '7601f58d8ae4'
>>>>>>>> 5e11c5a5bf8f28f5f4336d9e12a4078ce8bc36c1:migrations/versions/7601f58d8ae4_.py
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
    sa.Column('series', sa.String(length=80), nullable=False),
    sa.Column('repetitions', sa.String(length=80), nullable=False),
    sa.Column('burden', sa.String(length=80), nullable=False),
    sa.Column('week', sa.String(length=80), nullable=False),
    sa.Column('finish', sa.String(length=80), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('shopping_cart',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('product_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['product_id'], ['product.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('exercise',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('exercise_name', sa.String(length=80), nullable=False),
    sa.Column('type_of_muscle', sa.String(length=80), nullable=False),
    sa.Column('description', sa.String(length=80), nullable=False),
    sa.Column('photo_exercise', sa.String(length=80), nullable=False),
    sa.Column('routines_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['routines_id'], ['routines.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('exercise')
    op.drop_table('shopping_cart')
    op.drop_table('routines')
    op.drop_table('payment')
    op.drop_table('outstanding')
    op.drop_table('user')
    op.drop_table('sales')
    op.drop_table('product')
    # ### end Alembic commands ###
