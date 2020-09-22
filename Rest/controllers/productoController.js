const mysql = require('mysql');

// MySql 
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mydb'
});

/** Crear un Nuevo Producto */
exports.nuevoProducto = async (req, res, next) => {
    const sql = 'INSERT INTO Producto SET ?';

    const customerObj = {
        nombreP: req.body.nombreP,
        precio: req.body.precio
    }

    connection.query(sql, customerObj, error => {
        if (error) throw error;
        res.send('product Created!!');
    })
}

/** Obtiene Todos los Productos. */
exports.obtenerProductos = async (req, res, next) => {

    const sql = 'SELECT * FROM producto';

    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('Not result..');
        }
    })
}

/** Obtener Producto por ID  */
exports.obtenerProducto = async (req, res, next) => {

    const { id } = req.params;
    const sql = `SELECT * FROM producto WHERE idProducto = ${id}`;

    connection.query(sql, (error, result) => {
        if (error) throw error;
        if (result.length > 0) {
            res.json(result);
        } else {
            res.send('Not result..');
        }
    })
}

/** Actualizar Producto por su ID  */
exports.actualizarProducto = async (req, res, next) => {
    const { id } = req.params;
        const { nombreP, precio  } = req.body;
        const sql = `UPDATE producto SET nombreP = '${nombreP}', precio='${precio}'`;

        connection.query(sql, error => {
            if (error) throw error;
            res.send('product UPDated!!');
        })
}


/** Eliminar Producto por ID  */
exports.eliminarProducto = async (req, res, next) => {
    const { id } = req.params;
        const sql = `DELETE FROM Producto WHERE idProducto = ${id}`

        connection.query(sql, error => {

            if (error) throw error;
            res.send('Delete product');
        });
}