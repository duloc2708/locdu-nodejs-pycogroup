const CHARATAR1 = '&'
const CHARATAR2 = '='
const CHARATAR3 = ';'
const CHARATAR4 = '\n'
function load(value) {
    let strText = value
    let listData = []
    strText = strText.replace(/\n/g, CHARATAR1);
    strText && strText.split(CHARATAR1).map(textElem => {
        let obj = {}
        if (textElem) {
            textElem.split(CHARATAR3).map(item => {
                obj[item.split(CHARATAR2)[0]] = item.split(CHARATAR2)[1]
            })
            listData.push(obj)
        }
    })
    return listData
}
function store(data = []) {
    let strContentBreakLine = ''
    data.map((itemArr, iArr) => {
        Object.keys(itemArr).forEach((item, i) => {
            strContentBreakLine = strContentBreakLine + item + CHARATAR2 + itemArr[item]
            if (i < Object.keys(itemArr).length - 1) strContentBreakLine = strContentBreakLine + CHARATAR3
        });
        if (iArr < data.length - 1) strContentBreakLine = strContentBreakLine + CHARATAR4
    })
    return strContentBreakLine
}
module.exports = {
    load: load,
    store: store
}