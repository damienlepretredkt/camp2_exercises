const request = require("request");

/*
Let's write a function called simpleGet(callback) where the callback is a function with the parameter result.
This function will perform a query on https://postman-echo.com/get and execute the callback by passing only the result of the query.
*/
function simpleGet(callback) {
  request("https://postman-echo.com/get", function (error, response, body) {
    callback(body);
  });
}

/*
Let's write a function called simpleGetWithParams(callback) where the callback is a function with the parameter result.
This function will perform a query on https://postman-echo.com/get with a parameter foo which is equal to bar,
a parameter program which is equal to camp2 and a parameter people which is an array with the values Frieda and Francis,
and execute the callback by passing only the the field args from the result of the query.
*/
function simpleGetWithParams(callback) {
  request(
    {
      method: "GET",
      url: "https://postman-echo.com/get", qs: {"foo": "bar", "program": "camp2", "people": ["Frieda", "Francis"]}}
    ,
    function (error, response, body) {
      callback(JSON.parse(body).args);
    });
}

/*
Using the object Date, let's write a function called validateTimestamp(callback) where the callback is a function with the parameter result.
This function will perform a query on https://postman-echo.com/time/valid with a parameter timestamp wich is equal
to the current date with the format YYYY-mm-dd and execute the callback by passing only the result of the query.

Be careful, the Date may have a risky behavior, you should test that it works before using it!
*/
function validateTimestamp(callback) {
  const aujdhui = new Date();
  const dateToValid = aujdhui.getFullYear() + "-" + aujdhui.getMonth() + "-" + aujdhui.getDay();

  request(
    {
      method: "GET",
      url: "https://postman-echo.com/time/valid", qs: {"timestamp": dateToValid}
    }
    ,
    function (error, response, body) {
      callback(body);
    });
}

// 
// function output(result) {
//   console.log(result);
// }
//
// validateTimestamp(output);

module.exports = {
  simpleGet: simpleGet,
  simpleGetWithParams: simpleGetWithParams,
  validateTimestamp: validateTimestamp
};
