const validKeyBeforeAdd = (setables, name) => {
    if (!setables.includes(name)) {
        throw new Error(`Cannot set the ${name} property`);
    }
};
module.exports = {
    validKeyBeforeAdd: validKeyBeforeAdd
}