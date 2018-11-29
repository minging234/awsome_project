from flask import request, Flask, jsonify, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return "hello world"

app.run(port=5000, host='0.0.0.0')