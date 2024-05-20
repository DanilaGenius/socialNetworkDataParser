const axios = require("axios");

async function bkOkGetProfiles_getFriends(
  profilesId,
  count = 5,
  okAccessToken,
  okApplicationID,
  okApplicationPublicKey,
  okSessionSecretKey,
  okApplicationSecretKey
) {
	result = await axios.get("https://api.ok.ru/api/friends/get", {
		params: {
		  application_id: okApplicationID,
		  application_key: okApplicationPublicKey,
		  application_secret_key: okApplicationSecretKey,
		  permissions: "VALUABLE_ACCESS;LONG_ACCESS_TOKEN",
		  access_token: okAccessToken,
		  session: "oauth",
		  oauth: "server",
		  fid: profilesId, 

		},
	  });

  if ('error_code' in result.data && 'error_msg' in result.data) {
    return result.data;
  } else {
    return result.data;
  }
}

module.exports = bkOkGetProfiles_getFriends;