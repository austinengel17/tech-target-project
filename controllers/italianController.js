
//loading local modules
const parser = require('../tools/parser');
const arrayMerger = require('../tools/arrayMerger');
const removeDuplicates = require('../tools/removeDuplicates');


//Loading third party modules
const fetch = require('node-fetch');


module.exports = function(app){
    var itemArr = [];
    app.get('/it', async function(req, res){
        const RSS_URL1 = `https://www.zerounoweb.it/techtarget/searchdatacenter/rss/`;

        //fetch each rss feed and merge into array
        await fetch(RSS_URL1)
            .then(response => response.text())
            .then(body => parser(body))
            .then(promise => {
                arrayMerger(promise, itemArr);
            });

        itemArr = removeDuplicates(itemArr);

        res.render('feed', {itemArr});
    });
}