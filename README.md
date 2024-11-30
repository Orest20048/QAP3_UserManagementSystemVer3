# QAP 3 - User Management System

## Overview

This project is a simple **User Management System** built using **Node.js**, **Express**, and **EJS**. It demonstrates the following features:
- User registration and login with secure password hashing.
- Session-based authentication.
- Role-based access for admin users.
- A responsive and intuitive user interface.

## Features

- **Register Users:** New users can sign up with a username, email, and password.
- **Login:** Existing users can log in securely.
- **Role-Based Access:** Admins can view all registered users; regular users can access their dashboard.
- **Logout:** Ends the session and redirects users to the homepage.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate into the project directory and install dependencies:
   ```bash
   cd <project-name>
   npm install
   ```

3. Create a `.env` file and set your session secret:
   ```bash
   echo "SESSION_SECRET=your_secret_key_here" > .env
   ```

4. Start the server:
   ```bash
   npm start
   ```

5. Open the app in your browser at `http://localhost:3000`.

## Testing

To run tests, ensure you have **Mocha** installed globally or locally, then execute:
```bash
npx mocha test/app.test.js
```

## Contribution

Feel free to fork and contribute to the project. Create a pull request with your changes!

## License

This project is licensed under the MIT License.
