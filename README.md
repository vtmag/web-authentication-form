# Login and Signup System

This project aims to provide a basic authentication system where users can sign up with their name, email, and password, and then log in to access authenticated features. It utilizes Node.js and Express for the backend server, MongoDB as the database to store user information, and HTML/CSS/JavaScript for the frontend interface.

## Features

- User authentication (signup and login)
- Client-side and server-side validation
- Simple UI with options to switch between signup and login forms
- Modern and responsive user interface design with smooth transitions between login and signup forms.

## Technologies Used

- **Node.js**: A JavaScript runtime environment for building server-side applications.
- **Express**: A web application framework for Node.js that simplifies building web applications and APIs.
- **MongoDB**: A NoSQL database used to store user information.
- **Mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js, used to interact with MongoDB in an easy-to-use manner.
- **Realm App Users**: Authentication service provided by Realm to manage app users securely.
- **HTML/CSS/JavaScript**: Frontend technologies for creating the user interface and handling client-side functionality.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/vtmag/web-authentication-form.git
   ```

2. Install dependencies:

   ```bash
   cd login-signup
   npm install
   nmp install realm
   ```

3. Set up MongoDB Atlas account and configure database connection URI in `server.js`.

## Usage

1. Start the server:

   ```bash
   npm start
   ```

2. Open the browser and navigate to `http://localhost:3000` to access the application.

3. Sign up with your name, email, and password, or log in with existing credentials.


