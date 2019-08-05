module.exports = {
    Q1: {
        strText: "key1=value1;key2=value2\nkeyA=value for key A;keyB=value for key B",
        array: [
            { key1: 'value1', key2: "value2" },
            { keyA: "value for key A", keyB: "value for key B" }
        ]
    },
    Q3: {
        listUser: [
            { "id": 1, "name": "User 1", type: "IS_AN_EMPLOYEE", totalBill: 300 },
            { "id": 2, "name": "User 2", type: "IS_AN_AFFILIATE", totalBill: 300 },
            { "id": 3, "name": "User 3", type: "IS_CUSTOMER_FOR_OVER_2_YEAS", totalBill: 300 },
            { "id": 4, "name": "User 4", type: "CASE_OTHER", totalBill: 300 }
        ]
    }
}