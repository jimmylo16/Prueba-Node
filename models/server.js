const express = require('express');
const cors = require('cors');
require('dotenv').config();

class Server {
	constructor() {
		this.app = express();
		this.usuariosPath = '/api/';
		
		//Middlewares
		this.middlewares();

		//Rutas de la app, muy importante cargar primero los middlewares que las rutas, 
		//para que se procese adecuadamente el body
		this.port = process.env.PORT;
		this.routes();
	}
	middlewares() {
		//Cors para ver quien puede acceder a mi api
		this.app.use(cors());
        // Lectura y parseo del body
        this.app.use(express.json());
		// this.app.use(bodyParser.urlencoded({ extended: false }))
		//directorio de los assets
		this.app.use(express.static('assets'));
	}

	routes() {
		this.app.use( '/api/', require('../routes/rutas'));
	}
	listen() {
		this.app.listen(this.port, () => {
			console.log(`escuchando el puerto ${this.port}`);
		});
	}
}

module.exports = Server;
