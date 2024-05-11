

export default async function ytChannelParser(channelName) {
	// const channelName = channelName;
	const url = '/ytgetchannel';

	const options = {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			channelName: channelName,
			count: 1
		})
	}

	fetch(url, options);



	let result;
	await fetch(url)
	.then(res => res.json())
	.then(res => result = res)
	

	return result

}