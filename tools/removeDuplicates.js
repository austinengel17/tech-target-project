module.exports = function removeDuplicates(itemArr) {
    jsonObject = itemArr.map(JSON.stringify);

    uniqueSet = new Set(jsonObject);
    uniqueArray = Array.from(uniqueSet).map(JSON.parse);

    return uniqueArray;
}