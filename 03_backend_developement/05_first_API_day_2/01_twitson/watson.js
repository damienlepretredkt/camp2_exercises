const request = require("request");


const WATSON_USERNAME = process.env.WATSON_USERNAME;
const WATSON_PASSWORD = process.env.WATSON_PASSWORD;


function fetchStringAnalysis(sentence, callback) {
  const url = `https://${WATSON_USERNAME}:${WATSON_PASSWORD}@watson-api-explorer.mybluemix.net/natural-language-understanding/api/v1/analyze?version=2017-02-27&text=${sentence}`;
  request.get(
    {
      url: url,
      qs: {
        features: "emotion,sentiment",
        return_analyzed_text: false,
        clean: true,
        fallback_to_raw: true,
        concepts: {
          limit: 8
        },
        emotion: {
          document: true
        },
        entities: {
          limit: 50,
          mentions: false,
          emotion: false,
          sentiment: false
        },
        keywords: {
          limit: 50,
          emotion: false,
          sentiment: false
        },
        relations: {
          model: "en-news"
        },
        semantic_roles: {
          limit: 50,
          entities: false,
          keywords: false
        },
        sentiment: {
          document: true
        }
      }
    },
    function(error, response, body) {
      if (error) {
        callback(error, null);
      }
      if (response.statusCode !== 200) {
        callback(`error : ${response.statusCode}`, null)
      } else {
        callback(null, JSON.parse(body));
      }
    }
  );
}


//fetchStringAnalysis("'RT @FCMorgan: Nikon Italia, my sweet home ;-) @NikonItalia @NikonEurope @NikonProEurope @NikonNews @nikonrumors @nikonians @nikonownermag @…'");


module.exports = {
  fetchStringAnalysis: fetchStringAnalysis
};
