import sys, os
sys.path.append(os.path.abspath(os.path.join('..', 'app')))

from flask_sqlalchemy import SQLAlchemy
from app import app

db = SQLAlchemy()

