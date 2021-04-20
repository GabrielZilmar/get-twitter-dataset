const readCsv = require('./app/readCsv');

const app = async () => {
	console.log(await readCsv());
};

app();
