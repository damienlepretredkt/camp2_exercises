const twitter = require("./twitter");
const watson = require("./watson");

// on détecte l'humeur de la personne via watson basée sur ses derniers tweets.

const feelings = {
  "neutral" : "😐",
  "positive" : "😊",
  "negative": "😡"
};

function fetchTweets() {
  twitter.fetchLastTweets(getTweetTextAndAskWatson);
}

function getTweetTextAndAskWatson(tweetTextList) {
  tweetTextList.map((element) => getSentimentAndEmotionFromWatson(element));
}

function getSentimentAndEmotionFromWatson(sentence) {
  watson.fetchStringAnalysis(sentence, function(error, json) {
    if(error) {
      console.log(`${error}`);
    } else {
      if (json) {
        if(json.emotion && json.sentiment) {
          const emotions = json.emotion.document.emotion;
          const sentiment = json.sentiment.document.label;
          console.log(`\n ${sentence} => is mostly ${feelings[sentiment]} (${sentiment})`);

          Object.keys(emotions).map((emotion) =>
            console.log(`${emotion} : ${Math.round(emotions[emotion] * 100)}`)
          );
        } else {
          console.log("something get wrong");
        }

      }
    }
  });
}

fetchTweets();

module.exports = {
  fetchTweets: fetchTweets,
  getSentimentAndEmotionFromWatson: getSentimentAndEmotionFromWatson,
  getTweetTextAndAskWatson: getTweetTextAndAskWatson
};
