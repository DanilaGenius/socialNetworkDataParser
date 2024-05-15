

export default async function ytChannelParser(channelName,count, ytApiKey) {

	// const url = 'http://localhost:3002/ytgetchannel';
	const url = '/ytgetchannel';
	let result;
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

	result =  await fetch(url, options).then(res => res.json());



	return result

}