const axios = require("axios");

async function bkOkGetGroups_getAlbums(
  groupId = "70000001858236",
  count = 5,
  okAccessToken,
  okApplicationID,
  okApplicationPublicKey,
  okSessionSecretKey,
  okApplicationSecretKey
) {
	result = await axios.get("https://api.ok.ru/api/photos/getAlbums", {
		params: {
		  application_id: okApplicationID,
		  application_key: okApplicationPublicKey,
		  application_secret_key: okApplicationSecretKey,
		  permissions: "VALUABLE_ACCESS;LONG_ACCESS_TOKEN",
		  access_token: okAccessToken,
		  session: "oauth",
		  oauth: "server",
		  gid: groupId, 
		//   fields: 'albums',
		//   fields: 'anchor,entities,etag,has_more,photos,totalCount',
		  // format: "json",
		},
	  });

  if ('error_code' in result.data && 'error_msg' in result.data) {
    return result.data.error_msg;
  } else {
    return result.data.albums;
  }
}

module.exports = bkOkGetGroups_getAlbums;
