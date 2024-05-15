

export default async function vkCommunityParsing(channelName, countEntries, access_token) {
	// const channelName = channelName;
	const url = 'http://localhost:3002/vkgetcommunity';
	// const url = '/vkgetcommunity';
	let result;
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

	result =  await fetch(url, options).then(res => res.json());
	

	return result

}