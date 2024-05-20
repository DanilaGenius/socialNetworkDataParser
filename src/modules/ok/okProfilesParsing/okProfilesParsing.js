export default async function okGroupParsing(profilesId, options = {}) {

    
	// const channelName = channelName;
	// const url = 'http://localhost:3002/vkgetcommunity';
	const url = '/okgetprofiles';
	let result;
	const requestOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			profilesId: profilesId,
			options: options,
		})
	}
	console.log(options)
	result =  await fetch(url, requestOptions).then(res => res.json());

	return result
	
}