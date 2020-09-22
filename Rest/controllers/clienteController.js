const mysql = require('mysql');

// MySql 
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mydb'
});

/** Crear un Nuevo Cliente */
exports.nuevoCliente = async (req, res, next) => {
    const sql = 'INSERT INTO Cliente SET ?';

    const customerObj = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        dni: req.body.dni,
        telefono: req.body.telefono,
        email: req.body.email
    }

    connection.query(sql, customerObj, error => {
        if (error) throw error;
        res.send('Customer Created!!');
    })
}

/** Obtiene Todos los Clientes. */
exports.obtenerClientes = async (req, res, next) => {

    const sql = 'SELECT * FROM Cliente';

    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('Not result..');
        }
    })
}

/** Obtener Cliente por ID  */
exports.obtenerCliente = async (req, res, next) => {

    const { id } = req.params;
    const sql = `SELECT * FROM Cliente WHERE idCliente = ${id}`;

    connection.query(sql, (error, result) => {
        if (error) throw error;
        if (result.length > 0) {
            res.json(result);
        } else {
            res.send('Not result..');
        }
    })
}

/** Actualizar Cliente por su ID  */
exports.actualizarCliente = async (req, res, next) => {
    const { id } = req.params;
        const { nombre, apellido, dni, telefono, email } = req.body;
        const sql = `UPDATE Cliente SET nombre = '${nombre}', apellido='${apellido}', dni='${dni}', telefono='${telefono}', email='${email}' WHERE idCliente =${id}`;

        connection.query(sql, error => {
            if (error) throw error;
            res.send('Customer UPDated!!');
        })
}


/** Eliminar Cliente por ID  */
exports.eliminarCliente = async (req, res, next) => {
    const { id } = req.params;
        const sql = `DELETE FROM Cliente WHERE idCliente = ${id}`

        connection.query(sql, error => {

            if (error) throw error;
            res.send('Delete Customer');
        });
}