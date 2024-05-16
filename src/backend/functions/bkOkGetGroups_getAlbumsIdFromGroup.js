const axios = require("axios");

async function bkOkGetGroups_getAlbumsIdFromGroup(
  groupId = "70000001858236",
  count = 5,
  okAccessToken,
  okApplicationID,
  okApplicationPublicKey,
  okSessionSecretKey,
  okApplicationSecretKey
) {
	res = await axios.get("https://api.ok.ru/api/photos/getAlbums", {
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

  if ('error_code' in res.data && 'error_msg' in res.data) {
    return res.data.error_msg;
  } else {
	let arrIds = []
    res.data.albums.forEach(e => {
		arrIds.push(e.aid)
	});
	const result = arrIds.join(',')
	return result
  }
}

module.exports = bkOkGetGroups_getAlbumsIdFromGroup;
