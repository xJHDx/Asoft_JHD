const mysql = require('mysql');
const bodyParser = require('body-parser');
const express = require('express');
const routes = express.Router();


/** Controllers */
const clienteController = require('../controllers/clienteController');
const productoController = require('../controllers/productoController');
const ventaController = require('../controllers/ventaController');


module.exports = function () {

    // Route 
    routes.get('/', (req, res) => {
        res.send('Welcome...');
    })

    /** CUSTOMERS  */
    routes.get('/customers',
        clienteController.obtenerClientes
    )

    routes.get('/customer/:id',
        clienteController.obtenerCliente
    )

    routes.post('/add',
        clienteController.nuevoCliente
    )

    routes.put('/update/:id',
        clienteController.actualizarCliente
    )

    routes.delete('/delete/:id',
        clienteController.eliminarCliente
    )

    /** PRODUCT */

    routes.get('/Product',
        productoController.obtenerProductos
    )

    routes.get('/Product/:id',
        productoController.obtenerProducto
    )

    routes.post('/add-Product',
        productoController.nuevoProducto
    )

    routes.put('/update-Product/:id',
        productoController.actualizarProducto
    )

    routes.delete('/delete-Product/:id',
        productoController.eliminarProducto
    )

    /** SALE */
    routes.get('/Sale',
        ventaController.obtenerVentas
    )

    routes.get('/Sale/:id',
        productoController.obtenerProducto
    )

    routes.post('/add-Sale',
        productoController.nuevoProducto
    )

    routes.put('/update-Sale/:id',
        productoController.actualizarProducto
    )

    routes.delete('/delete-Sale/:id',
        productoController.eliminarProducto
    )

    return routes;
}

