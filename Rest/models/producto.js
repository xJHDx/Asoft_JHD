const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const productoSchema = new Schema({
    nombre:{
        type: String, 
        trim: true,        
    },
    precio: {
        type: String, 
        trim: true,  
    }
}); 

module.exports = mongoose.model('producto', productoSchema); 