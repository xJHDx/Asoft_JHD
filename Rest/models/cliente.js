const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const clienteSchema = new Schema({
    nombre:{
        type: String, 
        trim: true,        
    },
    apellido: {
        type: String, 
        trim: true,  
    },
    dni: {
        type: String,
        trim: true,
    },
    telefono: {
        type: String,
        trim: true,
    },
    email:{
        type: String,
        trim: true,
    }
}); 

module.exports = mongoose.model('cliente', clienteSchema); 