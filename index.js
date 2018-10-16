const cheerio = require("cheerio");
const crawler = require('./crawler.js');
cb = (error, response, body) => {
  console.log("error:", error);
  console.log("statusCode:", response && response.statusCode);
  const $ = cheerio.load(body);
};
crawler('https://www.biqudu.com/','get',cb)