# User-Management-System


This User Management System is a web application built using technologies such as EJS, Node.js, MongoDB, and CSS. It provides a platform for managing user information and profile management.


# Technologies Used


• EJS (Embedded JavaScript): EJS is a templating engine for rendering dynamic content on the server side. It allows you to embed JavaScript code directly into your HTML templates.


• Node.js: Node.js is a JavaScript runtime that allows you to run JavaScript on the server side. It is used to handle server-side logic, routing, and communication with the database.


• MongoDB: MongoDB is a NoSQL database that stores data in a flexible, JSON-like format. It is used to store and retrieve user information in this application.


• CSS (Cascading Style Sheets): CSS is used to style the HTML templates and create a visually appealing user interface.


# Features

1. Create User: Allows users to add new user data to the system.
 
2. Read User: Displays a list of existing users with their details.
 
3. Update User: Enables users to modify the information of existing users.
 
4. Delete User: Permits users to remove a user from the system.


# Create .env file

Create a .env file to store your credentials.Example below:

MONGODB_URI = mongodb+srv://<username>:<password>@mongodburlhere


# Installation

To install and run this project-install dependencies using npm and then start your server:

$ npm install

$ npm start


# File Structure

- app.js: Main entry point for the application.
 
- config/: Configuration files, such as database configuration.
  
- controllers/: Contains controllers for handling user-related operations.
  
- models/: Defines the data models for MongoDB.
  
- public/: Static assets, including CSS file.
  
- routes/: Defines the routes and their corresponding controllers.
  
- views/: EJS templates for rendering HTML pages.



# Contributing

Feel free to contribute to the project by opening issues or submitting pull requests.

HAPPY CODING!

