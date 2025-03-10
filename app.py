from flask import Flask, jsonify
from flask_cors import CORS
import requests
from bs4 import BeautifulSoup
import sqlite3
from LinkedinScrapper import extract_jobs


app = Flask(__name__)
CORS(app) #Enable CORS(Cross Origin Resource Sharing) So React access this API

# Define Job Search Parameters
keyword = "Software%20Internship"
experience = "1%2C2%2C3"
jobType = "1%2C2%2C3"

@app.route('/jobs', methods=['GET'])
def get_jobs():
    # Extract Jobs from Linkedin
    jobs = extract_jobs(keyword, experience, jobType)
    print(type(jobs))
    return jsonify(jobs)

@app.route('/test')
def test():
    return "<h1>Flask is running!</h1>"


if __name__ == '__main__':
    app.run(debug=True)
