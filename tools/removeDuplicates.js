module.exports = function removeDuplicates(itemArr) {

    //convert JSON to string (to make objects comparable) and map to new array
    let jsonObject = itemArr.map(JSON.stringify);
    //passes new array to set to remove duplicates
    let uniqueSet = new Set(jsonObject);
    //converts set back to array and parses back to JSON
    let uniqueArray = Array.from(uniqueSet).map(JSON.parse);

    return uniqueArray;
}