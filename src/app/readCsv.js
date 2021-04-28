const neatCsv = require('neat-csv');
const fs = require('fs');
const path = require('path');

const readCsv = async () => {
	const data = await fs.readFileSync(
		path.join(__dirname, '../data/NAACL_SRW_2016.csv'),
		async (err, data) => {
			if (err) {
				console.error(err);
				return;
			}

			return data;
		}
	);

	return neatCsv(
		data,
		(options = {
			mapHeaders: ({ index }) => {
				return index === 0 ? 'TweetID' : 'Classification';
			},
		})
	);
};

module.exports = readCsv;
