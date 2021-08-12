
//loading local modules
const articleArrayBuilder = require('../tools/articleArrayBuilder');
const removeDuplicates = require('../tools/removeDuplicates');

module.exports = function(app){

    const rssArr = [
        `https://www.zerounoweb.it/techtarget/searchdatacenter/rss/`
    ];

    app.get('/it', async function(req, res){

        //build article object array
        let itemArr = await articleArrayBuilder(rssArr);

        itemArr = removeDuplicates(itemArr);

        res.render('feed', {itemArr});
    });
}