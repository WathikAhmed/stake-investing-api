const request = require('request');
const cheerio = require('cheerio');

const address1 = 'https://www.npmjs.com/package/cheerio'
const address2 = 'ttps://trading.hellostake.com/dashboard/portfolio'


request(address1, (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);

    
    //console.log($.html())

    const myVar = $('._36ae70e9');

    //console.log(myVar.html());
    //console.log(myVar.text());

    const output = myVar.find('h1').text();
    const output2 = myVar.children('h1').next().text();

    console.log(output);
    console.log(output2);

    console.log('Scraping Done...');
  }
});