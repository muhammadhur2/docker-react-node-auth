# My Full-Stack Project #
## Overview ##
This project is a full-stack application featuring:

Frontend built with React (Located in the /client folder)
Backend API built with Node.js (Located in the /server folder)
MongoDB server for the database
Docker Compose for containerization and orchestration

## API Endpoints

- `POST /api/register`: Registers a new user
- `POST /api/login`: Logs in a user
- `GET /api/profile`: Retrieves the user profile (requires JWT token)
- `PUT /api/updateProfile`: Updates the user profile (requires JWT token)
- `DELETE /api/deleteAccount`: Deletes the user account (requires JWT token)


## Project Structure ##
```plaintext
.
├── client # Frontend React App
│ └── ...
├── server # Backend Node.js API
│ └── ...
└── docker-compose.yaml # Docker Compose file
```

## Prerequisites ##
Node.js
Docker
Docker Compose


## Setup and Usage ##
### Without Docker ###
### Frontend Setup ###

Navigate to the client folder and run:

```bash
npm install
npm start
```

The React app will start and can be accessed at http://localhost:3000.

### Backend Setup ###

Navigate to the server folder and run:

```bash
npm install
npm start
```

The Node.js API will start and can be accessed at http://localhost:3001.

### With Docker Compose ###
### Build and Start Containers ### 

From the project root, run:

```bash
docker-compose up --build
```

This will start the React app, the Node.js API, and the MongoDB server in individual containers.

## Contributing ##
To contribute to this project:

Fork the repository
Create your feature branch (`git checkout -b feature/fooBar`)
Commit your changes (`git commit -am 'Add some fooBar'`)
Push to the branch (`git push origin feature/fooBar`)
Create a new pull request

## License ##
This project is licensed under the MIT License.