

export default async function vkCommunityParsing(channelName, countEntries, access_token) {
	// const channelName = channelName;
	const url = '/vkgetcommunity';

	const options = {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			channelName: channelName,
			countEntries: countEntries,
			access_token: access_token
		})
	}

	fetch(url, options);


	let result;
	await fetch(url)
	.then(res => res.json())
	.then(res => result = res)
	

	return result

}