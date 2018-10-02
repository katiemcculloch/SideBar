const pg = require("pg");
const Sequelize = require("sequelize");

const connection = new Sequelize("starkloud", "katiemcculloch", "", {
  dialect: "postgres",
  host: "localhost",
  port: 5432
});

connection
  .authenticate()
  .then(() =>
    console.log("!!!!!Successfully connected to the postgres database!!!!!")
  )
  .catch(err => console.log("Error connecting to the database...", err));

module.exports = connection;
