from flask import Flask
from models import db

app = Flask(__name__)
app.config['DEBUG'] = True

#PostGres Config
POSTGRES = {
    'user': 'user',
    'db': 'mydb',
    'host': 'localhost',
    'port': '5432',
}

postGresUri = 'postgresql://%(user)s@%(host)s:%(port)s/%(db)s' % POSTGRES


app.config['SQLALCHEMY_DATABASE_URI'] = postGresUri

@app.route("/")
def hello():
    return "Hello, World2!"

if __name__ == "__main__": # I need to put this last 
    app.run()