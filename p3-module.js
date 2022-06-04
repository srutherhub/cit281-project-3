/* 
    CIT 281
    Project 3
    Sam Rutherford
*/
module.exports = {
  coinCount,
};

const coinValue = [1, 5, 10, 25, 50, 100];
const coins = [{denom: 25, count: 2},{denom: 1, count: 7}];
// Function that returns true if coin parameter returns value of 1,5,10,25,50,100
let validDenomination = (coin) => coinValue.indexOf(coin) !== -1;

// Caluculates total value of coin object eg: {denom: 25, count: 3} total = 75
let valueFromCoinObject = (obj) => {
  const { denom, count } = obj;
  return denom * count;
};

//Iterates through a coin array and gives the total value of all coins
/*
function valueFromArray(arr) {
  arr.reduce((total,currentValue) => {
    return total + valueFromCoinObject(currentValue);
  }, 0);
}
*/

//Iterates through a coin array and gives the total value of all coins
function valueFromArray(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += valueFromCoinObject(arr[i]);
  }
  return result;
}

//console.log(valueFromArray(coins));

//...coinage rest/spread operator

function coinCount(...coinage) {
  return valueFromArray(coinage);
}
/*
console.log("{}", coinCount({denom: 5, count: 3}));
console.log("{}s", coinCount({denom: 5, count: 3},{denom: 10, count: 2}));
const coins = [{denom: 25, count: 2},{denom: 1, count: 7}];
console.log("...[{}]", coinCount(...coins));
  */
