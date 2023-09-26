# Running Project

- Entry **task-2** Folder
- Install nodemon globally

  ```json
  npm install nodemon -g
  ```

- And runnig project

  ```json
  nodemon index
  ```

# API Documentation

To run the API use **POSTMAN** or install the **REST Client** extension in VScode, then go to the **test-api.rest** file then **send request**.

The base URL for our API is `http://localhost:5000/`

## Authentication API

This API provides authentication and token management functionality.

### LOGIN

Authenticate a user and get an access token & refresh token.

- **URL:** `/login`
- **Method:** `POST`
- **Request Body:**

  ```json
  {
    "username": "exampleusername",
    "password": "secretpassword"
  }
  ```

### REFRESH TOKEN

This API provides new access tokens using refresh tokens.

- **URL:** `/token`
- **Method:** `POST`
- **Request Body:**

  ```json
  {
    "token": "y0uRsEcRetT0ken$"
  }
  ```
