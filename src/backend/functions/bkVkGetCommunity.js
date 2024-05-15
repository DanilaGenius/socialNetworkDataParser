



async function bkVkGetCommunity(channelName, countEntries, accessToken) {


	try {
		let result = []
		countEntries = countEntries || 1

//region_nsk54
		const groupId = channelName; 
		

		const url = `https://api.vk.com/method/wall.get?domain=${groupId}&access_token=${accessToken}&v=5.131&count=4`;
		


		await fetch(url)
			.then(response => response.json())
			.then(data => {
					const posts = data.response.items;

					posts.forEach(post => {
	
						const objData = {
								postId: post.id,
								text: post.text,
								likes: post.likes.count,
								comments: post.comments.count,
								type: post.type,
								reposts: post.reposts.count,
								views: post.views.count,
								attachments: post.attachments

						}

						result.push(objData)

					});


			})
			


		return result || false
	} catch (error) {
		console.log(error)
	}



}

module.exports = bkVkGetCommunity