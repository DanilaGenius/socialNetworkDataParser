

export default async function telegramCommunityParsing(channelName, countEntries) {
	// const channelName = channelName;
	const url = '/tggetcommunity';

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

	fetch(url, options);

	// try {
		
	// } catch (ex) {
	// 	console.log('Something failed');
	// 	console.log(ex);
	// }


	let result;
	await fetch(url)
	.then(res => res.json())
	.then(res => result = res)
	

	return result

}