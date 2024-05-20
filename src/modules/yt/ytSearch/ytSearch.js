export default async function ytSearch(keys, options = {}) {

    
	// const channelName = channelName;
	// const url = 'http://localhost:3002/vkgetcommunity';
	const url = '/ytSearch';
	let result;
	const requestOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			keys: keys,
			options: options,
		})
	}
	console.log(url, requestOptions.body)
	result =  await fetch(url, requestOptions).then(res => res.json());
	
   
    
	return result
	
}