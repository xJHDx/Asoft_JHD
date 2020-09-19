const express = require('express'); 
const router = express.Router(); 

/** Controllers  */
const pacienteController = require('../controllers/pacienteController'); 

module.exports = function(){

    // Agrega nuevos pacientes via POST.
    router.post('/pacientes',
        pacienteController.nuevoCliente 
    ); 

    // Obtener todos los registros de pacientes en la BD. (Base Datos)
    router.get('/pacientes',
        pacienteController.obtenerPacientes 
    );

    // Obtiene un paciente en espacifico (ID)
    router.get('/pacientes/:id',
        pacienteController.obtenerPaciente
    );

    // Actualizar un registro con un ID especifico. 
    router.put('/pacientes/:id',
    pacienteController.actualizarPaciente
    );

    // Eliminar un paciente del registro por su id.  
    router.delete('/pacientes/:id',
    pacienteController.eliminarPaciente
    );


    return router; 
}