"""empty message

Revision ID: f2d2b34f0834
Revises: 51b032054227
Create Date: 2022-10-27 22:46:05.560553

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f2d2b34f0834'
down_revision = '51b032054227'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('sales',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('date', sa.String(length=80), nullable=False),
    sa.Column('notion', sa.String(length=80), nullable=False),
    sa.Column('amount', sa.String(length=80), nullable=False),
    sa.PrimaryKeyConstraint('id')
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
    op.drop_table('training')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('training',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('workout_name', sa.VARCHAR(length=80), autoincrement=False, nullable=False),
    sa.Column('type_of_muscle', sa.VARCHAR(length=80), autoincrement=False, nullable=False),
    sa.Column('description', sa.VARCHAR(length=80), autoincrement=False, nullable=False),
    sa.PrimaryKeyConstraint('id', name='training_pkey')
    )
    op.drop_table('exercise')
    op.drop_table('shopping_cart')
    op.drop_table('routines')
    op.drop_table('payment')
    op.drop_table('outstanding')
    op.drop_table('sales')
    # ### end Alembic commands ###