const request = require("request");
module.exports = (url,method,cb)=>{
  let options = {
    url,
    method,
    headers: {
      "User-Agent": "request",
    },
    rejectUnauthorized: false
  };
  request(options, cb);
}