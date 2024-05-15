export default async function okGroupParsing(groupId, options = {}) {

    const {PoluchitFotografii,PoluchitInformaciyu,PoluchitAlbomy,PoluchitUchastnikov,PoluchitVideo,PoluchitZapisi,count} = options
	// const channelName = channelName;
	// const url = 'http://localhost:3002/vkgetcommunity';
	const url = '/okgetgroups';
	// let result;
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

	// result =  await fetch(url, requestOptions).then(res => res.json());
	
    console.log(groupId, options)
    
	// return result

}