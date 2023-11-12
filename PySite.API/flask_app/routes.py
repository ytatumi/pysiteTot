from flask_app import app
from flask import jsonify, request

# Add initial User
current_id = 0
users = {str(current_id): {"name": "Jonass"}}


@app.route("/api/users", methods=["GET", "POST", "PUT", "DELETE"])
def handle_users():
    global current_id
    if request.method == "GET":
        return jsonify({"users": users})

    elif request.method == "POST":
        # Recieved new request to add a user
        try:
            data = request.get_json()
            print("printing the data recieved from frontend", data)
            current_id += 1
            users[str(current_id)] = data
            return jsonify({"message": "Users updated successfully"})
        except Exception as e:
            print("Error occured: ", e)
            return jsonify({"message": "could not update users"}), 500
    
    elif request.method == "PUT":
        # Recieved new request to add a user
        try:
            data = request.get_json()
            print("printing the data recieved from frontend", data)
            for id, value in data.items():
                users[str(id)] = value
            return jsonify({"message": "Users updated successfully"})
        except Exception as e:
            print("Error occured: ", e)
            return jsonify({"message": "could not update users"}), 500
    elif request.method == "DELETE":
        try:
            users.clear()
            print(f"All users have been deleted successfully")
            return jsonify({"message": "All users are deleted successfully"})
        except Exception as e:
            print("Error occured: ", e)
            return jsonify({"message": "could not delete all users"}), 500 


@app.route("/api/users/<user_id>", methods=["GET", "PUT", "DELETE"])
def handle_user(user_id):
    """
    This function takes an ID as dynamic URL parameter, for example 0
    Note:
    - GET method is only available for debugging purposes, to test for a specific user
    open the browser with for example http://localhost:5000/api/users/0 to see the data

    - The assignment is to implement the PUT and DELETE methods for the specific ID, see assignment for specific instructions
    """
    if user_id in users:
        prev_data=users[str(user_id)] 
        if request.method == "GET":
            return jsonify(users[user_id])
        elif request.method == "PUT":
            try:
                data = request.get_json()
                users[str(user_id)] = data
                print(f"USER {user_id} {prev_data['name']} : Data has changed to {data}")
                return jsonify({"message": "A user is updated successfully"})
            except Exception as e:
                print("Error occured: ", e)
                return jsonify({"message": "could not update a user"}), 500
        elif request.method == "DELETE":
            try:
                del users[str(user_id)]
                print(f"USER {user_id} {prev_data['name']} has been deleted successfully")
                return jsonify({"message": "A user is deleted successfully"})
            except Exception as e:
                print("Error occured: ", e)
                return jsonify({"message": "could not delete user"}), 500
    else:
        return jsonify({"message": "User not found"}), 404
