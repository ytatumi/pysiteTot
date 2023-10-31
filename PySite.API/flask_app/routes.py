from flask_app import app
from flask import jsonify, request

# Initialize the users list with a single user
users = [{"name": "Initial User"}]


@app.route("/api/users", methods=["GET", "POST"])
def handle_users():
    if request.method == "GET":
        return jsonify({"users": users})
    elif request.method == "POST":
        data = request.get_json()
        # Example: data should contain user information to add or update
        for user in data:
            users.append(user)
        return jsonify({"message": "Users updated successfully"})


@app.route("/")
def hometest():
    return {"user": "kenny", "message": "Message from home"}
