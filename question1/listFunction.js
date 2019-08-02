const CHARATAR1 = ';'
const CHARATAR2 = '='
function load(value) {
    return JSON.stringify(value)
}
function store(params = '') {
    let listData = []
    try {
        let repAllCharacter = params.replace(/[\\n "]/g, CHARATAR1);
        repAllCharacter && repAllCharacter.split(CHARATAR1).map(item => {
            if (item) {
                let obj = {}
                obj[item.split(CHARATAR2)[0]] = item.split(CHARATAR2)[1]
                listData.push(obj)
            }
        })
    } catch{

    }
    return listData
}
module.exports = {
    load: load,
    store: store
}