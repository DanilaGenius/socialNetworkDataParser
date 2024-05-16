const axios = require("axios");

async function bkOkGetGroups_getVideos(
  groupId = "70000001858236",
  count = 5,
  okAccessToken,
  okApplicationID,
  okApplicationPublicKey,
  okSessionSecretKey,
  okApplicationSecretKey
) {
  result = await axios.get("https://api.ok.ru/api/group/getCounters", {
    params: {
      application_id: okApplicationID,
      application_key: okApplicationPublicKey,
      application_secret_key: okApplicationSecretKey,
      permissions: "VALUABLE_ACCESS;LONG_ACCESS_TOKEN",
      access_token: okAccessToken,
      session: "oauth",
      oauth: "server",
      group_id: groupId,
      counterTypes: 'videos',
      // format: "json",
    },
  });

  if ('error_code' in result.data && 'error_msg' in result.data) {
    return result.data.error_msg;
  } else {
    return result.data;
  }
}

module.exports = bkOkGetGroups_getVideos;
