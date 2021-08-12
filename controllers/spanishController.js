
//loading local modules
const articleArrayBuilder = require('../tools/articleArrayBuilder');
const removeDuplicates = require('../tools/removeDuplicates');


module.exports = function(app){

    const rssArr =[
        `https://searchdatacenter.techtarget.com/es/editorspicks`
    ]

    app.get('/es', async function(req, res){


        //build article object array
        let itemArr = await articleArrayBuilder(rssArr);

        //sort array by pubDate
        itemArr = itemArr.sort((a, b) => b.pubDate - a.pubDate);

        itemArr = removeDuplicates(itemArr);

        res.render('feed', {itemArr});
    });
}