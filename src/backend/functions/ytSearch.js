const axios = require('axios')

async function ytSearch(keys, options) {
	try {
        const {PoiskPoPleylistam,PoiskPoKanalam,PoiskPoVideo,PoiskPoTranslyaciyam, PoluchitShortVideo, count, ytApiKey} = options
		let result;
      
        const playlists =  PoiskPoPleylistam && await ytSearch_getPlaylists(ytApiKey, count, vkAccessToken) || 'no requested and error'
        const channels =  PoiskPoKanalam && await ytSearch_getChannels(ytApiKey, count, vkAccessToken) || 'no requested and error'
        const video =  PoiskPoVideo && await ytSearch_getVideo(ytApiKey, count, vkAccessToken) || 'no requested and error'
        const broadcast =  PoiskPoTranslyaciyam && await ytSearch_getBroadcast(ytApiKey, count, vkAccessToken) || 'no requested and error'
        const shortVideo =  PoluchitShortVideo && await ytSearch_getShortVideo(ytApiKey, count, vkAccessToken) || 'no requested and error'
       
			
        result = {
            playlists,
            channels,
            video,
            broadcast,
            shortVideo,
        }
    
        return result       
	} catch (error) {
		console.error('Error fetching data:', error);
		return error;
	}
}

module.exports = ytSearch

async function ytSearch_getPlaylists(keys, count, vkAccessToken) {
    result = await axios.get("https://www.googleapis.com/youtube/v3/search", {
		params: {          
		    key: 'vkAccessToken',
            // channelId: 'keys',
		    // part: 'count',
            // eventType: 'live',
            // type: 'video',
            // count: count
		},
	  });

    if ('error_code' in result.data && 'error_msg' in result.data) {
        return result.data;
    } else {
        return result.data;
    }
}
async function ytSearch_getChannels(keys, count, vkAccessToken) {
    result = await axios.get("https://www.googleapis.com/youtube/v3/search", {
		params: {          
		    key: 'vkAccessToken',
            // channelId: 'keys',
		    // part: 'count',
            // eventType: 'live',
            // type: 'video',
            // count: count
		},
	  });

    if ('error_code' in result.data && 'error_msg' in result.data) {
        return result.data;
    } else {
        return result.data;
    }
}
async function ytSearch_getVideo(keys, count, vkAccessToken) {
    result = await axios.get("https://www.googleapis.com/youtube/v3/search", {
		params: {          
		    key: 'vkAccessToken',
            // channelId: 'keys',
		    // part: 'count',
            // eventType: 'live',
            // type: 'video',
            // count: count
		},
	  });

    if ('error_code' in result.data && 'error_msg' in result.data) {
        return result.data;
    } else {
        return result.data;
    }
}
async function ytSearch_getBroadcast(keys, count, vkAccessToken) {
    result = await axios.get("https://www.googleapis.com/youtube/v3/search", {
		params: {          
		    key: 'vkAccessToken',
            // channelId: 'keys',
		    // part: 'count',
            // eventType: 'live',
            // type: 'video',
            // count: count
		},
	  });

    if ('error_code' in result.data && 'error_msg' in result.data) {
        return result.data;
    } else {
        return result.data;
    }
}
async function ytSearch_getShortVideo(keys, count, vkAccessToken) {
    result = await axios.get("https://www.googleapis.com/youtube/v3/search", {
		params: {          
		    key: 'vkAccessToken',
            // channelId: 'keys',
		    // part: 'count',
            // eventType: 'live',
            // type: 'video',
            // count: count
		},
	  });

    if ('error_code' in result.data && 'error_msg' in result.data) {
        return result.data;
    } else {
        return result.data;
    }
}