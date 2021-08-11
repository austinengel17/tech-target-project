
//loading local modules
const parser = require('../tools/parser');
const arrayMerger = require('../tools/arrayMerger');

//Loading third party modules
const fetch = require('node-fetch');

module.exports = async function(rssArr){
    let itemArr = [];

    for(let i = 0; i < rssArr.length; i++) {
        //fetch each rss feed, parse to JSON and merge into array
        await fetch(rssArr[i])
            .then(response => response.text()) //returns text content of xml
            .then(body => parser(body)) //parses to JSON
            .then(promise => {
                arrayMerger(promise, itemArr); //merges into main array
            });
    }

    return itemArr;

}