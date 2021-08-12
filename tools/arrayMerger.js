
module.exports = function(data, objArr){
    for(let i = 0; i < data.rss.channel.item.length; i++){
        //changes date string to Date object -> for sorting purposes
        data.rss.channel.item[i].pubDate = new Date(data.rss.channel.item[i].pubDate);
        objArr.push(data.rss.channel.item[i]);
    }
}