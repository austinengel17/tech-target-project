module.exports = function removeDuplicates(itemArr) {
    let jsonObject = itemArr.map(JSON.stringify);

    let uniqueSet = new Set(jsonObject);
    let uniqueArray = Array.from(uniqueSet).map(JSON.parse);

    return uniqueArray;
}