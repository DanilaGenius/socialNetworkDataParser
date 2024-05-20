const axios = require('axios')

async function vkSearch(keys, options) {
	try {
        const {Obyavleniya,TovaryMagazinov,Video,Fotografii,Novosti,Lyudi,Muzyka,Klipy,Servisy,Soobschestva,count,vkAccessToken} = options
		let result;
			
        const ads =  Obyavleniya && await vkSearch_getAds(keys, count, vkAccessToken) || 'no requested and error'
        const storeGoods =  TovaryMagazinov && await vkSearch_getStoreGoods(keys, count, vkAccessToken) || 'no requested and error'
        const video =  Video && await vkSearch_getVideo(keys, count, vkAccessToken) || 'no requested and error'
        const photos =  Fotografii && await vkSearch_getPhotos(keys, count, vkAccessToken) || 'no requested and error'
        const news =  Novosti && await vkSearch_getNews(keys, count, vkAccessToken) || 'no requested and error'
        const people = Lyudi && await vkSearch_getPeople(keys, count, vkAccessToken) || 'no requested and error'
        const music =  Muzyka && await vkSearch_getMusic(keys, count, vkAccessToken) || 'no requested and error'
        const clips =  Klipy && await vkSearch_getClips(keys, count, vkAccessToken) || 'no requested and error'
        const services =  Servisy && await vkSearch_getServices(keys, count, vkAccessToken) || 'no requested and error'
        const communities =  Soobschestva && await vkSearch_getCommunities(keys, count, vkAccessToken) || 'no requested and error'
			
        result = {
            ads,
            storeGoods,
            video,
            photos,
            news,
            people,
            music,
            clips,
            services,
            communities,
        }
    
        return result       
	} catch (error) {
		console.error('Error fetching data:', error);
		return error;
	}
}

module.exports = vkSearch

async function vkSearch_getAds(keys, count, vkAccessToken) {
    result = await axios.get("https://api.vk.com/method/wall.get", {
		params: {          
		    access_token: vkAccessToken,
            q: keys,
		    count: count,
            v: '5.131'
		},
	  });

    if ('error_code' in result.data && 'error_msg' in result.data) {
        return result.data;
    } else {
        return result.data;
    }
}

async function vkSearch_getStoreGoods(keys, count, vkAccessToken) {
    result = await axios.get("https://api.vk.com/method/market.search", {
		params: {          
		    access_token: vkAccessToken,
            q: keys,
		    count: count,
            v: '5.131'
		},
	  });

    if ('error_code' in result.data && 'error_msg' in result.data) {
        return result.data;
    } else {
        return result.data;
    }
}

async function vkSearch_getVideo(keys, count, vkAccessToken) {
    result = await axios.get("https://api.vk.com/method/video.search", {
		params: {          
		    access_token: vkAccessToken,
            q: keys,
		    count: count,
            v: '5.131'
		},
	  });

    if ('error_code' in result.data && 'error_msg' in result.data) {
        return result.data;
    } else {
        return result.data;
    }
}

async function vkSearch_getPhotos(keys, count, vkAccessToken) {
    result = await axios.get("https://api.vk.com/method/photos.search", {
		params: {          
		    access_token: vkAccessToken,
            q: keys,
		    count: count,
            v: '5.131'
		},
	  });

    if ('error_code' in result.data && 'error_msg' in result.data) {
        return result.data;
    } else {
        return result.data;
    }
}

async function vkSearch_getNews(keys, count, vkAccessToken) {
    result = await axios.get("https://api.vk.com/method/wall.get", {
		params: {          
		    access_token: vkAccessToken,
            q: keys,
		    count: count,
            v: '5.131'
		},
	  });

    if ('error_code' in result.data && 'error_msg' in result.data) {
        return result.data;
    } else {
        return result.data;
    }
}

async function vkSearch_getPeople(keys, count, vkAccessToken) {
    result = await axios.get("https://api.vk.com/method/users.search", {
		params: {          
		    access_token: vkAccessToken,
            q: keys,
		    count: count,
            v: '5.131'
		},
	  });

    if ('error_code' in result.data && 'error_msg' in result.data) {
        return result.data;
    } else {
        return result.data;
    }
}

async function vkSearch_getMusic(keys, count, vkAccessToken) {
    result = {}
    return result
}

async function vkSearch_getClips(keys, count, vkAccessToken) {
    result = {}
    return result
}

async function vkSearch_getServices(keys, count, vkAccessToken) {
    result = {}
    return result
}

async function vkSearch_getCommunities(keys, count, vkAccessToken) {
    result = await axios.get("https://api.vk.com/method/wall.search", {
		params: {          
		    access_token: vkAccessToken,
            q: keys,
            owner_id: keys,
		    count: count,
            v: '5.131'
		},
	  });

    if ('error_code' in result.data && 'error_msg' in result.data) {
        return result.data;
    } else {
        return result.data;
    }
}
