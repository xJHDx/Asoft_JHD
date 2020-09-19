const Producto = require("../models/Producto");


exports.nuevoProducto = async (req, res, next ) => {

    const producto = new Producto(req.body);

    try{
        await producto.save(); 
        res.json({ mensaje : 'El cliente se Agrego Correctamente'});
    }catch(error){
        console.log(error);
        next(); 
    }     
}

exports.obtenerProductos = async (req,res,next) => {
    try {
        const productos = await Producto.find({}); 
        res.json(productos);
    } catch (error) {
        console.log(error); 
        next(); 
    }
}

exports.obtenerProducto = async (req, res, next) => {
    try {
        const producto = await Producto.findById(req.params.id); 
        res.json(producto);
    } catch (error) {
        console.log(error)
        next(); 
    }
}

exports.actualizarProducto = async (req, res, next) => {
    try {
        const producto = await Producto.findOneAndUpdate({_id : req.params.id}, req.body, {
            new: true
        });
        res.json(producto);
    } catch (error) {
        console.log(error)
        next(); 
    }
}


exports.eliminarProducto = async (req, res, next) => {
    try {
        const eliminado = await Producto.findOneAndDelete({_id : req.params.id})
        res.json(eliminado, {mensaje: 'El Producto Fue Eliminado'});
    } catch (error) {
        console.log(error)
        next(); 
    }
}