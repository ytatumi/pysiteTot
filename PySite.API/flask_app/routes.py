from flask_app import app
from flask import jsonify


@app.route("/api", methods=["GET"])
def items():
    return {"user": "kenny", "message": "This is a message from the backend!"}
