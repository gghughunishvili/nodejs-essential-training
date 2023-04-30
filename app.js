const { inc, dec, getCount } = require("./myModule");

inc();
inc();
console.log(getCount());
dec();
console.log(getCount());

// const myModule = require("./myModule");
// console.log(myModule.name);
