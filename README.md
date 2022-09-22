# To-do React Application with PostgresDB

## Front-end Setting

### Environment setting

create a file called `.env` in the project directory, then copy `REACT_APP_API_SERVER = http://localhost:8000` inside the file. Then you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

## Back-end Setting

### Install packages before start the server

`npm install express cors knex jsonwebtoken bcrypt dotenv pg passport passport-jwt sqlite3`

## Environment setting

create a file called `.env` in the project directory, then set up `DB_NAME, DB_USERNAME, DB_PASSWORD, JWT_SECRET` inside the file.

## Server setting

turn on your postgres server.
run `knex migrate:latest` then `knex seed:run`.

## Demo user for testing

`email: "1@1" password:1` `email: "2@2" password:2` `email: "3@3" password:3`
