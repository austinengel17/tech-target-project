
//loading local modules
const parser = require('../tools/parser');
const arrayMerger = require('../tools/arrayMerger');
const removeDuplicates = require('../tools/removeDuplicates');


//Loading third party modules
const fetch = require('node-fetch');


module.exports = function(app){
    var itemArr = [];
    app.get('/en', async function(req, res){
        const RSS_URL1 = `https://searchsecurity.techtarget.com/rss/ContentSyndication.xml`;
        const RSS_URL2 = 'https://searchsecurity.techtarget.com/rss/Network-Security-Tactics.xml';
        const RSS_URL3 = 'https://searchsecurity.techtarget.com/rss/Security-New-White-Papers.xml'

        //fetch each rss feed, parse to JSON and merge into array
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
        await fetch(RSS_URL3)
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