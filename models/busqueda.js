const fs = require('fs');

class Busqueda {
	data = [];
	dbPath = './data/data.json';
	constructor() {}
    get getData(){
        return this.data;
    }
	readData() {
		const info = fs.readFileSync(this.dbPath, { encoding: 'utf-8' });
		const json = JSON.parse(info);
		this.data = json;
	}
}

module.exports = Busqueda;
