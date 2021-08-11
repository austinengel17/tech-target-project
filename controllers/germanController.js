//loading local modules
const articleArrayBuilder = require('../tools/articleArrayBuilder');
const removeDuplicates = require('../tools/removeDuplicates');


module.exports = function(app){
    app.get('/de', async function(req, res){


        const rssArr = [
            'https://www.computerweekly.com/de/rss/Security.xml',
            'https://www.computerweekly.com/de/rss/RSS-Feed-von-ComputerWeeklyde.xml'
        ];

        //build article object array
        let itemArr = await articleArrayBuilder(rssArr);

        //sort array by pubDate
        itemArr = itemArr.sort((a, b) => b.pubDate - a.pubDate);

        itemArr = removeDuplicates(itemArr);


        res.render('feed', {itemArr});
    });
}
