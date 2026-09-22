//.env
require('dotenv').config();

const express = require('express');
const app = express();
const bcrypt = require('bcrypt'); //POUR HASH
const mysql = require('mysql2'); //Mysql
//Token
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(express.static('html')); //Selection du dossier html
app.use(express.json()); //Sert a utiliser json

//Connexion a la base de donner
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});
connection.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données :', err);
    return;
  }
  console.log('Connecté à la base de données MySQL.');
});