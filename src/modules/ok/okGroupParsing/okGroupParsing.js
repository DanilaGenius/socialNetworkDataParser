export default async function okGroupParsing(groupId, options = {}) {

    
	// const channelName = channelName;
	// const url = 'http://localhost:3002/vkgetcommunity';
	const url = '/okgetgroups';
	let result;
	const requestOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			groupId: groupId,
			options: options,
		})
	}

	result =  await fetch(url, requestOptions).then(res => res.json());
	
   
    
	return result

}