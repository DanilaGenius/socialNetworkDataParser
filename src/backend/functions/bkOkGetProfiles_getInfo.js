const axios = require("axios");

async function bkOkGetProfiles_getInfo(
	profilesId,
  count = 5,
  okAccessToken,
  okApplicationID,
  okApplicationPublicKey,
  okSessionSecretKey,
  okApplicationSecretKey
) {
	result = await axios.get("https://api.ok.ru/api/users/getInfo", {
		params: {
		  application_id: okApplicationID,
		  application_key: okApplicationPublicKey,
		  application_secret_key: okApplicationSecretKey,
		  permissions: "VALUABLE_ACCESS;LONG_ACCESS_TOKEN",
		  access_token: okAccessToken,
		  session: "oauth",
		  oauth: "server",
		  uids: profilesId, 
		  fields: fields,
		  count: count,
		  // format: "json",
		},
	  });

  if ('error_code' in result.data && 'error_msg' in result.data) {
    return result.data;
  } else {
    return result.data;
  }
}

module.exports = bkOkGetProfiles_getInfo;


const fields = 'accessible,age,allow_add_to_friend,allows_anonym_access,allows_messaging_only_for_friends,bio,birthday,blocked,blocks,bookmarked,business,can_use_referral_invite,can_vcall,can_vmail,city_of_birth,close_comments_allowed,common_friends_count,current_location,current_status,current_status_date,current_status_date_ms,current_status_id,current_status_mood,current_status_track_id,email,executor,external_share_link,first_name,first_name_instrumental,followers_count,forbids_mentioning,friend,friend_invitation,friends_count,gender,has_daily_photo,has_email,has_moderating_groups,has_phone,has_pinned_feed,has_products,has_service_invisible,invited_by_friend,is_merchant,last_name,last_name_instrumental,last_online,last_online_ms,locale,location,location_of_birth,modified_ms,name,name_instrumental,nn_photo_set_ids,online,partner_link_create_allowed,photo_id,pic1024x768,pic128max,pic128x128,pic180min,pic190x190,pic224x224,pic240min,pic288x288,pic320min,pic50x50,pic600x600,pic640x480,pic_1,pic_2,pic_3,pic_4,pic_5,pic_base,pic_full,pic_max,picgif,picmp4,picwebm,possible_relations,premium,presents,private,profile_buttons,profile_cover,ref,registered_date,registered_date_ms,relations,relationship,shortname,show_lock,skill,status,total_photos_count,uid,url_chat,url_chat_mobile,url_profile,url_profile_mobile,vip'