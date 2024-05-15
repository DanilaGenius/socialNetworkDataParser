

export default async function vkProfilesParsing(userIds, access_token) {
	// const channelName = channelName;
	// const url = 'http://localhost:3002/vkgetprofiles';
	const url = '/vkgetprofiles';
let result;
	const options = {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			userIds: userIds,
			access_token: access_token
		})
	}

	result =  await fetch(url, options).then(res => res.json());
	

	return result

}