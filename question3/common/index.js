function validateInputUser(data) {
    let check = true
    if (data && data.length > 0) {
        data.map(item => {
            let { totalBill } = item
            if (isNaN(totalBill)) {
                check = false
                return false
            }
        })
    } else {
        return false
    }
    return check
}
module.exports = {
    validateInputUser: validateInputUser
}