
# Guardiana

Guardiana is an educational project designed to explore the fundamental concepts of web development, cryptography, and cybersecurity. This project features an authentication system utilizing the Caesar cipher for educational purposes.
 
## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Challenges Faced](#challenges-faced)
- [Future Improvements](#future-improvements)
- [License](#license)

## Overview
Guardiana is an authentication system that demonstrates basic principles of web development and encryption. It uses the Caesar cipher to manage user passwords securely.

## Features
- User registration and login system.
- Basic encryption using the Caesar cipher for password management.
- Backend server with Node.js and Express.js.
- Frontend interface with HTML and CSS.
- PostgreSQL database for storing user data.
- JavaScript for frontend functionality.

## Technologies Used
- **Node.js**: Backend server.
- **Express.js**: Web framework for Node.js.
- **Sequelize**: ORM for PostgreSQL.
- **HTML & CSS**: Frontend design and layout.
- **JavaScript**: Frontend scripting.
- **PostgreSQL**: Database management.
- **pgAdmin4**: PostgreSQL database administration.

## Installation
1. **Clone the repository**:
 ```
   git clone https://github.com/maartaa10/Guardiana.git
   cd Guardiana
   ```
2. **Install dependencies**:
   ```
   npm install
   ```
3. **Set up the database**:
   - Ensure PostgreSQL is installed and running.
   - Create a database and configure `config/config.json` with your database details.

4. **Run migrations**:
   ```
   npx sequelize-cli db:migrate
   ```

5. **Start the server**:
   ```
   npm start
   ```

## Usage
- Navigate to `http://localhost:3000` in your web browser.
- Register a new account and log in using the credentials.
- The system uses the Caesar cipher to manage passwords. Users must provide a "secret word" to complete the login process, which is registered in the database.

## Challenges Faced
- **PostgreSQL Integration**: Initially challenging due to lack of prior experience, but overcome with continuous learning and troubleshooting.
- **JavaScript Frontend**: Learning curve with JavaScript for creating a responsive UI.

## Future Improvements
- Implement more secure encryption methods.
- Enhance frontend design for better user experience.
- Add unit and integration tests for robust testing.
- Deploy the application to a cloud platform.

## License
This project is open-source and available under the [MIT License](LICENSE).
