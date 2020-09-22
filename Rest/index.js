const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const routes = require('./routes');


const PORT = process.env.PORT || 3050;


const app = express();


app.use(bodyParser.json());


// MySql 
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mydb'
});

// Habilitar Routing
app.use('/', routes());


// Check connect 
connection.connect(error => {
    if (error) throw error;
    console.log('Database Server Running!!..');
});


app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`);
});