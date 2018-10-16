const request = require("request");
module.exports = (url,method,cb)=>{
  let options = {
    url,
    method,
    headers: {
      'Accept': '*/*',
      'Accept-Language': 'en-US,en;q=0.8',
      'Cache-Control': 'max-age=0',
      'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.116 Safari/537.36',
      'Connection': 'keep-alive',
      'Referer': 'http://www.baidu.com/'
    },
    rejectUnauthorized: false
  };
  request(options, cb);
}