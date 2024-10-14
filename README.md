###############################################################################################
# Authentication Project

This is a MERN stack project that implements user registration, login, and authentication with React, Node.js, Express.js, MongoDB, and Axios. Upon successful login or registration, the user is navigated to the home page, and an alert is generated for confirmation.

## Features

- User registration and login
- Frontend: React.js
- Backend: Node.js, Express.js, and MongoDB
- RESTful API for authentication
- Axios for HTTP requests
- Navigation using `react-router-dom`
- Form validation
- Displays alerts for successful login and registration

## Prerequisites

Ensure that you have the following installed on your machine:

- **Node.js**: [Download Node.js](https://nodejs.org/)
- **MongoDB**: [Install MongoDB locally](https://docs.mongodb.com/manual/installation/)
- **NPM**: Comes with Node.js. Check version with:

  ```bash
  npm -v

## Project Setup
Step 1: Clone the Repository
Clone this project repository using Git:
  
   git clone https://github.com/Vikascoder1/Login.git

## 2. Install Dependencies
## Backend
Navigate to the backend folder and install the necessary Node.js dependencies:


cd backend

npm install

## Frontend
Navigate to the frontend folder and install the React dependencies:

cd ../frontend

npm install

## Step 3: Setup MongoDB
Ensure MongoDB is running on your local machine. By default, it runs on mongodb://localhost:27017. If you want to use a different port or database name, modify the MongoDB connection URI in your backend server.js file:

const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/mydatabase'; // Replace with your database name

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

## Step 4: Start the Backend Server
Navigate to the backend directory and start the server:

cd backend

npm start

This will start your Express.js server on http://localhost:5000.

## Step 5: Start the Frontend React App
Navigate to the frontend directory and start the React development server:

cd ../frontend

npm start

The React app will now be running on http://localhost:3000.

## Step 6: Open the Application
Once both the backend and frontend servers are running, you can open your browser and navigate to: http://localhost:3000

## Available Routes

## Backend (API Endpoints):

User Registration: POST /api/auth/register

User Login: POST /api/auth/login

## Frontend Routes:

Home Page: /home

Login Page: /login

Registration Page: /

## Technologies Used

## Frontend:

React.js

Axios

React Router DOM

## Backend:

Node.js

Express.js

MongoDB

Mongoose

