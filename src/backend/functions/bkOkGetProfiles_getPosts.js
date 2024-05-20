const axios = require("axios");

async function bkOkGetProfiles_getPosts(
	profilesId = "70000001858236",
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
		  fid: profilesId, 
		//   fields: 'albums',
		//   fields: 'anchor,entities,etag,has_more,photos,totalCount',
		  // format: "json",
		},
	  });

  if ('error_code' in result.data && 'error_msg' in result.data) {
    return result.data;
  } else {
    return result.data.albums;
  }
}

module.exports = bkOkGetProfiles_getPosts;