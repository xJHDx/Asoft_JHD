const mysql = require('mysql');

// MySql 
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mydb'
});

/** Crear un Nueva Venta */
exports.nuevaVenta = async (req, res, next) => {
    const sql = 'INSERT INTO venta SET ?';

    const customerObj = {
        fecha: req.body.fecha
    }
    connection.query(sql, customerObj, error => {
        if (error) throw error;
        res.send('Customer Created!!');
    })
}

/** Obtiene Todas las Ventas. */
exports.obtenerVentas = async (req, res, next) => {

    const sql = 'SELECT * FROM venta';

    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('Not result..');
        }
    })
}

/** Obtener Venta por ID  */
exports.obtenerVenta = async (req, res, next) => {

    const { id } = req.params;
    const sql = `SELECT * FROM venta WHERE idVenta = ${id}`;

    connection.query(sql, (error, result) => {
        if (error) throw error;
        if (result.length > 0) {
            res.json(result);
        } else {
            res.send('Not result..');
        }
    })
}

/** Actualizar Venta por su ID  */
exports.actualizarVenta = async (req, res, next) => {
    const { id } = req.params;
        const { fecha } = req.body;
        const sql = `UPDATE venta SET fecha = '${fecha}'`;

        connection.query(sql, error => {
            if (error) throw error;
            res.send('Customer UPDated!!');
        })
}

/** Eliminar Venta por ID  */
exports.eliminarCliente = async (req, res, next) => {
    const { id } = req.params;
        const sql = `DELETE FROM venta WHERE idVenta = ${id}`

        connection.query(sql, error => {

            if (error) throw error;
            res.send('Delete Customer');
        });
}