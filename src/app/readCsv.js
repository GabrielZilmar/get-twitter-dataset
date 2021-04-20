const neatCsv = require('neat-csv');
const fs = require('fs');
const csv = '../data/NAACL_SRW_2016.csv';

const readCsv = () => {
	return fs.readFile(csv, async (err, data) => {
		if (err) {
			console.error(err);
			return;
		}

		const datas = await neatCsv(
			data,
			(options = {
				mapHeaders: ({ index }) => {
					return index === 0 ? 'TweetID' : 'Classification';
				},
			})
		);

		return datas;
	});
};

module.exports = readCsv;
