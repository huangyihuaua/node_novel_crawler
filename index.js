const cheerio = require("cheerio");
const crawler = require('./crawler.js')
cb = (error, response, body) => {
  console.log("error:", error);
  console.log("statusCode:", response && response.statusCode);
  const $ = cheerio.load(body);
  console.log($($("#newscontent h2")[0]).text());
};
crawler('https://www.biqudu.com/','get',cb)