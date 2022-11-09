"""empty message

Revision ID: 0f0cd62b54fb
Revises: fe9a1ed2a5de
Create Date: 2022-11-09 17:08:23.428924

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0f0cd62b54fb'
down_revision = 'fe9a1ed2a5de'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('exercise', 'description',
               existing_type=sa.VARCHAR(length=80),
               type_=sa.String(length=500),
               existing_nullable=False)
    op.alter_column('exercise', 'photo_exercise',
               existing_type=sa.VARCHAR(length=200),
               type_=sa.String(length=250),
               existing_nullable=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('exercise', 'photo_exercise',
               existing_type=sa.String(length=250),
               type_=sa.VARCHAR(length=200),
               existing_nullable=True)
    op.alter_column('exercise', 'description',
               existing_type=sa.String(length=500),
               type_=sa.VARCHAR(length=80),
               existing_nullable=False)
    # ### end Alembic commands ###