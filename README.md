<h1 align="center">MovieNotes Backend</h1>

Welcome to the backend of MovieNotes - Your ultimate movie note-taking application!

> Status: developing 🚧

## Project Overview

The MovieNotes backend is responsible for managing storage, authentication, and data manipulation related to user's movie notes.

## Directory Structure

- **src/controllers**: Controllers for data manipulation (Movies, Genres, Users).
- **src/database**: Configurations and scripts related to the database (Knex and SQLite).
- **src/configs, src/middleware, src/providers, src/routes, src/utils**: Various configurations and utilities for the project.

## Technologies Used

- **Express**: Web framework for Node.js.
- **Knex**: SQL query builder.
- **SQLite and SQLite3**: Database used for local storage.
- **Axios, Bcryptjs, Cors, Jsonwebtoken**: Packages for various functionalities (HTTP requests, encryption, CORS control, authentication).

## API Endpoints

- **/api/signin**: Route for user authentication.
- **/api/signup**: Route for user registration.
- **/api/movies**: Route for movie manipulation.
- **/api/genres**: Route for genre manipulation.
- **/api/users**: Route for user information.

## Contribution

Contributions are welcome! Feel free to open issues and pull requests.

## License

This project is licensed under the ISC License. See the LICENSE.md file for more details.
