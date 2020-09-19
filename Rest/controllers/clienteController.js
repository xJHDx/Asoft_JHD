const Cliente = require("../models/cliente");


// Cuando se crea un nuevo cliente. 
exports.nuevoCliente = async (req, res, next ) => {
    // TODO : Insertar en la base de datos. 
    // Crear objeto de paciente con datos de req.body. 
    const cliente = new Cliente(req.body);

    try{
        await Cliente.save(); 
        res.json({ mensaje : 'El cliente se Agrego Correctamente'});
    }catch(error){
        console.log(error);
        next(); 
    }     
}

/** Obtiene Todos los Cliente. */
exports.obtenerCliente = async (req,res,next) => {
    try {
        const  Cliente = await Cliente.find({}); 
        res.json( Cliente);
    } catch (error) {
        console.log(error); 
        next(); 
    }
}

/** Obtiene ID de Cliente */
exports.obteneCliente = async (req, res, next) => {
    try {
        const Cliente = await Cliente.findById(req.params.id); 
        res.json (Cliente);
    } catch (error) {
        console.log(error)
        next(); 
    }
}

/** Actualiza un Registro por su ID. Cliente */
exports.actualizaCliente = async (req, res, next) => {
    try {
        const Cliente = await Cliente.findOneAndUpdate({_id : req.params.id}, req.body, {
            new: true
        });
        res.json (Cliente);
    } catch (error) {
        console.log(error)
        next(); 
    }
}

/** Elimina Un cliente del registro desde el ID. */
exports.eliminaCliente = async (req, res, next) => {
    try {
        const eliminado = await Cliente.findOneAndDelete({_id : req.params.id})
        res.json(eliminado, {mensaje: 'El Cliente Fue Eliminado'});
    } catch (error) {
        console.log(error)
        next(); 
    }
}