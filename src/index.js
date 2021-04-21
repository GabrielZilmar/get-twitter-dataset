const readCsv = require('./app/readCsv');
const getTweet = require('./app/getTweet');

const app = async () => {
	const dataset = await readCsv();
	const comments = [];
	for (let i = 0; i < dataset.length; i += 1) {
		comments.push(await getTweet(dataset[i].TweetID));
	}
	console.log(comments);
};

app();
