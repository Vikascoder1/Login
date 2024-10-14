## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Vikascoder1/Login.git

##2. Install Dependencies

##Navigate to the project directory and install the backend dependencies:

 In the backend, create a file .env and enter the code below: 
 MONGO_URI=mongodb://localhost:27017/Vikas12
 JWT_SECRET=your_jwt_secret_key
 
cd my-fullstack-app/backend


npm install

##Install the frontend dependencies:

cd ../frontend

npm install


##3. Set Up MongoDB

 CHECK IN .env file and Uncomment the local mongodbUri and comment the mongodb atlas uri
Make sure you have MongoDB installed and running on your local machine.
In mongodb compass, create new connection with : mongodb://localhost:27017/Vikas12
and click on connect

##Running the Project
##1. Start the Backend Server

##Navigate to the backend directory and start the server:

cd backend

node server.js

##2. Start the Frontend Application

##In a new terminal, navigate to the frontend directory and start the React application:

cd frontend

npm start

##3. Access the Application

Open your browser and go to http://localhost:3000 to access the application.
