## Dependencies 

npm i express
npm install -g knex
npm install sqlite3
knex init
npm i nodemon -D
npm i express
npm i helmet

## Migrations

knex migrate:make [migration-name]
knex migrate:latest
knex migrate:make db-name-schema-update
knex migrate:latest
npx knex migrate:rollback
knex migrate:latest

## Seeds

knex seed:make 001-seedName (knex seed:make 001-cars)
knex seed:run

## Heroku

npm i -g gitignore
npm i helmet
create .env file
create config folder
add defaults.js into config
add secrets.js into config.