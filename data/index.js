module.exports = {
    Q1: {
        strText: "key1=value1;key2=value2\nkeyA=value for key A;keyB=value for key B",
        array: [
            { key1: 'value1', key2: "value2" },
            { keyA: "value for key A", keyB: "value for key B" }
        ]
    },
    Q3: {
        listUser: [{ id: 1, "name": "Tom", "type": "IS_AN_AFFILIATE" },
        { id: 2, "name": "Jery", "type": "IS_CUSTOMER_FOR_OVER_2_YEAS" },
        { id: 3, "name": "Jason", "type": "IS_AN_EMPLOYEE" }],
        listProduct: [{ id: "product1", price: 120, qty: 1 }]
    }
}