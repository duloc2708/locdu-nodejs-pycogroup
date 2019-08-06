const CHARATAR1 = '&'
const CHARATAR2 = '='
const CHARATAR3 = ';'
const CHARATAR4 = '\n'
//Complexity analysis O(n)
let load = (strData) => {
    const arrSplit = strData.split(CHARATAR4);
    return arrSplit.map((item) => {
        const itemObj = item.split(CHARATAR3), obj = {};
        itemObj.forEach((element) => {
            const part = element.split(CHARATAR2);
            obj[part[0]] = part[1];
        });
        return obj;
    });
}
//Complexity analysis O(n)
let store = (data) => data.map((item) => Object.keys(item).map((key) => `${key}=${item[key]}`).join(CHARATAR3)).join(CHARATAR4);
module.exports = {
    load: load,
    store: store
}