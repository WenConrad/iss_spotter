const request = require('request');

const fetchMyIP = (callback) => {
  request("https://api.ipify.org/?format=json", (err, response, body) => {
    if (err) {
      callback(err, null);
    } else if (!response || response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
    } else {
      const data = JSON.parse(body);
      callback(null, data.ip);
    }
  });
};

module.exports = { fetchMyIP };