const needle = require('needle');

const getTweet = async (tweetId) => {
	const id = parseInt(tweetId, 10);
	const params = {
		id,
	};

	const token = process.env.BEARER_TOKEN;
	const endpointUrl = `https://api.twitter.com/1.1/statuses/show.json`;
	const res = await needle('get', endpointUrl, params, {
		headers: {
			'User-Agent': 'v2RecentSearchJS',
			authorization: `Bearer ${token}`,
		},
	});

	if (res.body) {
		return res.body.errors ? res.body.errors[0].message : res.body.text;
	} else {
		throw new Error('Unsuccessful request');
	}
};

module.exports = getTweet;
