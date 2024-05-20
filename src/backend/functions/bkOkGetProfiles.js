const bkOkGetProfiles_getInfo = require('./bkOkGetProfiles_getInfo')
const bkOkGetProfiles_getVideos = require('./bkOkGetProfiles_getVideos')
const bkOkGetProfiles_getPhotos = require('./bkOkGetProfiles_getPhotos')
const bkOkGetProfiles_getGroups = require('./bkOkGetProfiles_getGroups')
const bkOkGetProfiles_getFriends = require('./bkOkGetProfiles_getFriends')
const bkOkGetProfiles_getNotes = require('./bkOkGetProfiles_getNotes')
const bkOkGetProfiles_getPosts = require('./bkOkGetProfiles_getPosts')


async function bkOkGetProfiles(profilesId, options) {
	let result;
	const {PoluchitVideo, PoluchitFotografii, PoluchitZametki,
		PoluchitGruppy, PoluchitSpisokDruzey, ZapisiNaStranice, InformaciyaOStranice,
		count,
		okAccessToken, okApplicationID, okApplicationPublicKey ,okSessionSecretKey ,okApplicationSecretKey
	} = options
	
	const info =  InformaciyaOStranice && await bkOkGetProfiles_getInfo(profilesId, count, okAccessToken, okApplicationID, okApplicationPublicKey, okSessionSecretKey, okApplicationSecretKey) || 'no requested and error'
	const videos =  PoluchitVideo && await bkOkGetProfiles_getVideos(profilesId, count, okAccessToken, okApplicationID, okApplicationPublicKey, okSessionSecretKey, okApplicationSecretKey) || 'no requested and error'
	const photos =  PoluchitFotografii && await bkOkGetProfiles_getPhotos(profilesId, count, okAccessToken, okApplicationID, okApplicationPublicKey, okSessionSecretKey, okApplicationSecretKey) || 'no requested and error'
	const groups =  PoluchitGruppy && await bkOkGetProfiles_getGroups(profilesId, count, okAccessToken, okApplicationID, okApplicationPublicKey, okSessionSecretKey, okApplicationSecretKey) || 'no requested and error'
	const friends =  PoluchitSpisokDruzey && await bkOkGetProfiles_getFriends(profilesId, count, okAccessToken, okApplicationID, okApplicationPublicKey, okSessionSecretKey, okApplicationSecretKey) || 'no requested and error'
	const notes =  PoluchitZametki && await bkOkGetProfiles_getNotes(profilesId, count, okAccessToken, okApplicationID, okApplicationPublicKey, okSessionSecretKey, okApplicationSecretKey) || 'no requested and error'
	const posts = ZapisiNaStranice && await bkOkGetProfiles_getPosts(profilesId, count, okAccessToken, okApplicationID, okApplicationPublicKey, okSessionSecretKey, okApplicationSecretKey) || 'no requested and error'

	 
	result = {
		info,
		videos,
		photos,
		groups,
		friends,
		notes,
		posts
	}

	return result
}

module.exports = bkOkGetProfiles

