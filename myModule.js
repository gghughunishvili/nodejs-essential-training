let count = 0;

const inc = () => ++count;
const dec = () => --count;

const getCount = () => count;

module.exports = {
    name: "Giorgi",
    getCount,
    inc,
    dec
};
