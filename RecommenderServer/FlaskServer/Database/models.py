import sys, os
sys.path.append(os.path.abspath(os.path.join('..', 'app')))

from flask_sqlalchemy import SQLAlchemy
from app import app

db = SQLAlchemy()

POSTGRES = {
    'user': 'user',
    'db': 'mydb',
    'host': 'localhost',
    'port': '5432',
}

postGresUri = 'postgresql://%(user)s@%(host)s:%(port)s/%(db)s' % POSTGRES
print(postGresUri)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://%(user)s:\s@%(host)s:%(port)s/%(db)s' % POSTGRES