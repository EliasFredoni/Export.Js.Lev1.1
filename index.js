const { method, method2 } = require("./data");
const { sortjs } = require("./sort");

const numbers = method.sort(sortjs);
console.log(numbers)

const cars = method2.sort(sortjs);
console.log(cars);
