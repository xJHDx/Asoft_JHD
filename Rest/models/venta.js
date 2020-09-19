const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const ventaSchema = new Schema({
    idVenta:{
        type: Number, 
        trim: true,        
    },
    idClientes: {
        type: Number, 
        trim: true,  
    },
    hora:{
        type: String,
        trim: true,
    }
}); 

module.exports = mongoose.model('venta', ventaSchema); 