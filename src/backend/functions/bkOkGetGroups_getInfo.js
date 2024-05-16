const axios = require("axios");

async function bkOkGetGroups_getInfo(
  groupId = "70000001858236",
  count = 5,
  okAccessToken,
  okApplicationID,
  okApplicationPublicKey,
  okSessionSecretKey,
  okApplicationSecretKey
) {
  result = await axios.get("https://api.ok.ru/api/group/getInfo", {
    params: {
      application_id: okApplicationID,
      application_key: okApplicationPublicKey,
      application_secret_key: okApplicationSecretKey,
      permissions: "VALUABLE_ACCESS;LONG_ACCESS_TOKEN",
      access_token: okAccessToken,
      session: "oauth",
      oauth: "server",
      uids: groupId,
	  fields: fields	
    },
  });

  if ('error_code' in result.data && 'error_msg' in result.data) {
    return result.data.error_msg;
  } else {
    return result.data;
  }
}
const fields = 'abbreviation,access_type,address,admin_id,bookmarked,business,category,city,comment_as_official,community,content_as_official,country,cover,created_ms,description,disable_photo_upload,disable_reason,end_date,feed_subscription,followers_count,friends,friends_count,gos_org,graduate_year,group_agreement,has_daily_photo,has_group_agreement,homepage_name,homepage_url,location_id,location_latitude,location_longitude,location_zoom,main_page_tab,main_photo,member_status,members_count,mentions_subscription,messages_allowed,min_age,mobile_cover,name,new_chats_count,notifications_subscription,paid_access,paid_access_description,paid_access_price,paid_content,paid_content_description,paid_content_price,partner_program_status,phone,photo_id,photos_tab_hidden,pin_notifications_off,possible_members_count,premium,private,products_tab_hidden,profile_buttons,ref,request_sent_date,role,scope_id,shortname,start_date,status,subcategory,subcategory_id,tags,transfers_allowed,uid,user_paid_access,user_paid_access_till,user_paid_content,user_paid_content_till,video_tab_hidden,who_can_comment,year_from,year_to'
module.exports = bkOkGetGroups_getInfo;
