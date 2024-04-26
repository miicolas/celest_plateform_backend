import mysql from "mysql2";

const pool = mysql.createPool({ // Création d'un pool de connexion à la base de données 

  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,

});


export default pool;

