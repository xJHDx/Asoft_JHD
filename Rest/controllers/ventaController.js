const Venta = require("../models/venta");


exports.nuevoVenta = async (req, res, next ) => {
  
    const venta = new Venta(req.body);

    try{
        await venta.save(); 
        res.json({ mensaje : 'El venta se Agrego Correctamente'});
    }catch(error){
        console.log(error);
        next(); 
    }     
}


exports.obtenerVenta = async (req,res,next) => {
    try {
        const venta = await Venta.find({}); 
        res.json(venta);
    } catch (error) {
        console.log(error); 
        next(); 
    }
}

exports.obtenerVenta = async (req, res, next) => {
    try {
        const venta = await Venta.findById(req.params.id); 
        res.json(venta);
    } catch (error) {
        console.log(error)
        next(); 
    }
}

exports.Venta = async (req, res, next) => {
    try {
        const venta = await venta.findOneAndUpdate({_id : req.params.id}, req.body, {
            new: true
        });
        res.json(venta);
    } catch (error) {
        console.log(error)
        next(); 
    }
}

exports.eliminarVenta = async (req, res, next) => {
    try {
        const eliminado = await Venta.findOneAndDelete({_id : req.params.id})
        res.json(eliminado, {mensaje: 'El Venta Fue Eliminado'});
    } catch (error) {
        console.log(error)
        next(); 
    }
}