

export default async function vkProfilesParsing(userIds, access_token) {
	// const channelName = channelName;
	const url = '/vkgetprofiles';
	console.log('vkgetprofiles')
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