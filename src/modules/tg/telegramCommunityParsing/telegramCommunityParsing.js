

export default async function telegramCommunityParsing(channelName, countEntries) {

	const url = 'http://localhost:3002/tggetcommunity';
	// const url = '/tggetcommunity';
	let result;
	const options = {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			channelName: channelName,
			countEntries: countEntries
		})
	}
	
	result =  await fetch(url, options).then(res => res.json());
	
	

	

	return result

}