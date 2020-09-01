## Node js Boiler Plate with sequelize and express

supported for mysql, postgres, mariadb

## Used package.
jsonwebtoken
bcryptjs
sequelize
pg-hstore
pg
morgan
express
dotenv

## Way of uses
1. clone the project
2. npm install 
3. goto config > config.json 
    set your db and production.
4. create .env if not then update your secret key and desirable port
5.  make sure you have .sequelizerc file in root folder, if not create one

//.sequelizerc
#
    const path = require('path');
    module.exports = {
      "config": path.resolve('./config', 'config.json'),
      "models-path": path.resolve('./models'),
      "seeders-path": path.resolve('./seeders'),
      "migrations-path": path.resolve('./migrations')
    }
    
 ##Sequelize
 Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. It features solid transaction support, relations, eager and lazy loading, read replication and more.
https://sequelize.org/

Migrations

for running

    npx sequelize-cli db:migrate
    
creating migration file

    npx sequelize-cli migration:generate --name migration-skeleton

Seeding
for running seeder

    npx sequelize-cli db:seed:all

for creating seeder
    
    npx sequelize-cli seed:generate --name user
Model

     npx sequelize-cli model:generate --name User --attributes first_name:string,last_name:string
    

Finally run  nodemon .Then your server works. 

Check the api 

http://localhost:8080/api/users

## Happy Coding
