from flask import Flask


app = Flask(__name__)
app.config['DEBUG'] = True

@app.route("/")
def hello():
    return "Hello, World2!"

if __name__ == "__main__": # I need to put this last 
    app.run()