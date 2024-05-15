


const axios = require('axios')
async function bkVkGetCommunity(channelName, countEntries, accessToken) {


	try {
		let result = []
		countEntries = countEntries || 1

//region_nsk54
		const groupId = channelName; 
	
			try {
				let result;
			
				result = await axios.get('https://api.vk.com/method/wall.get', {
						params: {
							domain: groupId,
							access_token: accessToken,
							// fields: 'activities,about,blacklisted,blacklisted_by_me,books,bdate,can_be_invited_group,can_post,can_see_all_posts,can_see_audio,can_send_friend_request,can_write_private_message,career,common_count,connections,contacts,city,country,crop_photo,domain,education,exports,followers_count,friend_status,has_photo,has_mobile,home_town,photo_100,photo_200,photo_200_orig,photo_400_orig,photo_50,sex,site,schools,screen_name,status,verified,games,interests,is_favorite,is_friend,is_hidden_from_feed,last_seen,maiden_name,military,movies,music,nickname,occupation,online,personal,photo_id,photo_max,photo_max_orig,quotes,relation,relatives,timezone,tv,universities,is_verified',
							count: '5',
							extended: true,
							v: '5.131'
						}
					})
					
					
					return result;
			
			
			} catch (error) {
				console.error('Error fetching data:', error);
				return null;
			}
		
			


		
	} catch (error) {
		console.log(error)
	}



}

module.exports = bkVkGetCommunity