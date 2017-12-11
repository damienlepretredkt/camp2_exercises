const OAuth = require("OAuth");

const TWITTER_API_KEY = process.env.TWITTER_API_KEY;
const TWITTER_SECRET = process.env.TWITTER_SECRET;
const TWITTER_ACCESS_TOKEN = process.env.TWITTER_ACCESS_TOKEN;
const TWITTER_AT_SECRET = process.env.TWITTER_AT_SECRET;

const OAuthHandler = new OAuth.OAuth("https://api.twitter.com/oauth/request_token", "https://api.twitter.com/oauth/access_token", TWITTER_API_KEY, TWITTER_SECRET, "1.0A", null, "HMAC-SHA1");


function fetchLastTweets(callback) {
  OAuthHandler.get(
    "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=TheNotoriousMMA&count=10&exclude_replies=true",
    TWITTER_ACCESS_TOKEN, //test user token
    TWITTER_AT_SECRET, //test user secret
    function (e, data){
      if (e) console.error(e);
      const json = JSON.parse(data);
      callback(json.map(parseTweetAndReturnText));

    });
}

function parseTweetAndReturnText(tweet) {
  return tweet.text;
}


module.exports = {
  fetchLastTweets: fetchLastTweets
};
