module.exports = {
    Q1: {
        strText: "key1=value1;key2=value2\nkeyA=value for key A;keyB=value for key B",
        array: [
            { key1: 'value1', key2: "value2" },
            { keyA: "value for key A", keyB: "value for key B" }
        ]
    },
    Q3: {
        listUser: [{ id: 1, "name": "Tom", "type": "IS_AN_EMPLOYEE" },
        { id: 2, "name": "Jery", "type": "IS_AN_AFFILIATE" },
        { id: 3, "name": "Other", "type": "IS_CUSTOMER_FOR_OVER_2_YEAS" }],
        listProduct: [{ id: 1, price: 100 },{ id: 2, price: 200 }]
    }
}