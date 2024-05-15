

export default async function ytChannelParser(channelName,count, ytApiKey) {
	// const channelName = channelName;
	const url = '/ytgetchannel';

	const options = {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			channelName: channelName,
			count: count,
			ytApiKey: ytApiKey
		})
	}

	fetch(url, options);



	let result;
	await fetch(url)
	.then(res => res.json())
	.then(res => result = res)
	

	return result

}