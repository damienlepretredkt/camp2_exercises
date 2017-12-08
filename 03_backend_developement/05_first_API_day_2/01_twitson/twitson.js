const twitter = require("./twitter");
const watson = require("./watson");

// on détecte l'humeur de la personne via watson basée sur ses derniers tweets.

const feelings = {
  "neutral" : "😐",
  "positive" : "😊"
};

function fetchTweets() {
  twitter.fetchLastTweets(getTweetTextAndAskWatson);
}

function getTweetTextAndAskWatson(tweetTextList) {
  tweetTextList.map((element) => getSentimentAndEmotionFromWatson(element));
}

function getSentimentAndEmotionFromWatson(sentence) {
  watson.fetchStringAnalysis(sentence, function(json) {
    console.log(`\n ${sentence} => is mostly ${feelings[json.sentiment.document.label]} (emotion)`);
    const emotions = json.emotion.document.emotion;

    Object.keys(emotions).map((emotion) =>
      console.log(`${emotion} : ${Math.round(emotions[emotion] * 100)}`)
    );
  });
}




fetchTweets();

module.exports = {
  fetchTweets: fetchTweets,
  getSentimentAndEmotionFromWatson: getSentimentAndEmotionFromWatson,
  getTweetTextAndAskWatson: getTweetTextAndAskWatson
};
