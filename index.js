'use strict';
const exchangeRate = 26;
let result = '';
for (let dollars = 10; dollars <= 100; dollars += 10) {
    const costInHryvnias = dollars * exchangeRate;
    result += dollars + ' USD = ' + costInHryvnias + ' UAH\n';
}
console.log(result);
