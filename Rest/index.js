const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require("body-parser");
const cors = require("cors");
const propierties = require('./config/properties');
const DB = require('./config/db');


// Crear el Servidor.
const app = express();

// Habilitar Cors a un solo domino.
const whitelist = ["http://localhost:3000"];
const corsOptions = {
  origin: (origin, callback) => {
    // console.log(origin);
    const existe = whitelist.some((dominio) => dominio === origin);
    if (existe) {
      callback(null, true);
    } else {
      callback(new Error("No Permitido por CORS"));
    }
  },
};

// Habilitar CORS 
//app.use(cors(corsOptions));
app.use(cors()); 


// Conectar a Mongodb
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/JPA", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

// Habilitar el body-Parser.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Habilitar Routing
app.use("/", routes());

// Creamos Puerto y arranca el servidor.
app.listen(3000, () => {
  console.log("Servidor Funcionando...");
});
