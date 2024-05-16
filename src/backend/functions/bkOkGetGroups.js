const bkOkGetGroups_getUsers = require('./bkOkGetGroups_getUsers');
const bkOkGetGroups_getPhotos = require('./bkOkGetGroups_getPhotos');
const bkOkGetGroups_getInfo = require('./bkOkGetGroups_getInfo');
const bkOkGetGroups_getAlbums = require('./bkOkGetGroups_getAlbums');
const bkOkGetGroups_getVideos = require('./bkOkGetGroups_getVideos');
const bkOkGetGroups_getRecordings = require('./bkOkGetGroups_getRecordings');

async function bkOkGetGroups(groupId, options) {
	let result;
	const {PoluchitFotografii,PoluchitInformaciyu,PoluchitAlbomy,PoluchitUchastnikov,PoluchitVideo,PoluchitZapisi,
		count, okAccessToken, okApplicationID, okApplicationPublicKey, okSessionSecretKey, okApplicationSecretKey
	} = options
	
	const users =  PoluchitUchastnikov && await bkOkGetGroups_getUsers(groupId, count, okAccessToken, okApplicationID, okApplicationPublicKey, okSessionSecretKey, okApplicationSecretKey) || 'no requested and error'
	const photos =  PoluchitFotografii && await bkOkGetGroups_getPhotos(groupId, count, okAccessToken, okApplicationID, okApplicationPublicKey, okSessionSecretKey, okApplicationSecretKey) || 'no requested and error'
	const info =  PoluchitInformaciyu && await bkOkGetGroups_getInfo(groupId, count, okAccessToken, okApplicationID, okApplicationPublicKey, okSessionSecretKey, okApplicationSecretKey) || 'no requested and error'
	const albums =  PoluchitAlbomy && await bkOkGetGroups_getAlbums(groupId, count, okAccessToken, okApplicationID, okApplicationPublicKey, okSessionSecretKey, okApplicationSecretKey) || 'no requested and error'
	const videos =  PoluchitVideo && await bkOkGetGroups_getVideos(groupId, count, okAccessToken, okApplicationID, okApplicationPublicKey, okSessionSecretKey, okApplicationSecretKey) || 'no requested and error'
	const recordings =  PoluchitZapisi && await bkOkGetGroups_getRecordings(groupId, count, okAccessToken, okApplicationID, okApplicationPublicKey, okSessionSecretKey, okApplicationSecretKey) || 'no requested and error'

	 
	result = {
		users,
		photos,
		info,
		albums,
		videos,
		recordings
	}

	return result
}

module.exports = bkOkGetGroups