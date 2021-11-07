const PORT = 8090;
const express = require('express');     //  Framework that provides a robust set of features for web and mobile applications. Creating a robust API is quick and easy
const cheerio = require('cheerio');     //  Cheerio parses markup and provides an API for traversing/manipulating the resulting data structure.
const axios = require('axios');         //  Promise based HTTP client for the browser and node.js

const request = require('request');

const app = express();






app.listen(
    PORT,
    () => console.log(`Server running on PORT ${PORT}`)
);

app.get('/', (req, res) => {
    request('https://trading.hellostake.com/dashboard/portfolio', (error, response, html) => {
        if (!error && response.statusCode == 200) {
            const $ = cheerio.load(html);

            const value = $("div");



            console.log(value.text());
        }
    });
    res.json('Welcome to the Stake API')

});



app.get('/endpoint1', (req, res) => {
    res.status(200).send({
        text: 'Hi',
        text2: 'You have reached endpoint 1'
    })
});