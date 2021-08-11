//loading local modules
const parser = require('../tools/parser');
const arrayMerger = require('../tools/arrayMerger');
const removeDuplicates = require('../tools/removeDuplicates');


//Loading third party modules
const fetch = require('node-fetch');


module.exports = function(app){
    app.get('/de', async function(req, res){
        const RSS_URL1 = `https://www.computerweekly.com/de/rss/Security.xml`;
        const RSS_URL2 = 'https://www.computerweekly.com/de/rss/RSS-Feed-von-ComputerWeeklyde.xml';

        var itemArr = [];

        await fetch(RSS_URL1)
            .then(response => response.text())
            .then(body => parser(body))
            .then(promise => {
                arrayMerger(promise, itemArr);
            });

        await fetch(RSS_URL2)
            .then(response => response.text())
            .then(body => parser(body))
            .then(promise => {
                arrayMerger(promise, itemArr);
            });

        //sort array by pubDate
        itemArr = itemArr.sort((a, b) => b.pubDate - a.pubDate);

        itemArr = removeDuplicates(itemArr);


        res.render('feed', {itemArr});
    });
}
