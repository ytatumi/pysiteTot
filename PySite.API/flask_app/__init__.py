from flask import Flask
from flask_cors import CORS
import logging

# print("This is the name our flask application takes: ", __name__)
app = Flask(__name__)

# Set the log level to capture all messages (DEBUG level)
"""
app.logger.setLevel(logging.DEBUG)

# Define a log file to save logs to a file
file_handler = logging.FileHandler("flask.log")
formatter = logging.Formatter("%(asctime)s - %(name)s - %(levelname)s - %(message)s")
file_handler.setFormatter(formatter)

app.logger.addHandler(file_handler)

"""
from flask_app import routes
