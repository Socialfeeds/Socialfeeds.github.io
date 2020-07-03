function getInstagramStatistics(user) {

  user = user || "labnol";

  var url = "https://www.instagram.com/u/?__a=1";

  var result = UrlFetchApp.fetch(url.replace("u", user), {
    muteHttpExceptions: true
  });

  if (result.getResponseCode() === 200) {
    var json = JSON.parse(result.getContentText()).user;
    var data = {
      screen_name: json.username,
      full_name: json.full_name,
      is_private: json.is_private,
      is_verified: json.is_verified,
      profile_image: json.profile_pic_url,
      website_url: json.external_url,
      follower_count: json.followed_by.count,
      friend_count: json.follows.count
    }
    return data;
  } else {
    Logger.log("User not found");
    return null;
  }
}
