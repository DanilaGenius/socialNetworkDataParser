const axios = require("axios");
const bkOkGetGroups_getAlbumsIdFromGroup = require('./bkOkGetGroups_getAlbumsIdFromGroup')
async function bkOkGetGroups_getPhotos(
  groupId = "70000001858236",
  count = 5,
  okAccessToken,
  okApplicationID,
  okApplicationPublicKey,
  okSessionSecretKey,
  okApplicationSecretKey
) {
	const albumsId =  await bkOkGetGroups_getAlbumsIdFromGroup(groupId, count, okAccessToken, okApplicationID, okApplicationPublicKey, okSessionSecretKey, okApplicationSecretKey)
result = await axios.get("https://api.ok.ru/api/photos/getPhotos", {
    params: {
      application_id: okApplicationID,
      application_key: okApplicationPublicKey,
      application_secret_key: okApplicationSecretKey,
      permissions: "VALUABLE_ACCESS;LONG_ACCESS_TOKEN",
      access_token: okAccessToken,
      session: "oauth",
      oauth: "server",
      gid: groupId,
	  aid: albumsId,
	  count: count

    },
  });

  if ('error_code' in result.data && 'error_msg' in result.data) {
    return result.data;
  } else {
    return result.data;
  }

}

module.exports = bkOkGetGroups_getPhotos;
