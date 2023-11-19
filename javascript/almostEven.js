/**
 * Returns a [parts]-length array of equal or nearly equal
 * integers that add up to [num].
 */
var splitInteger = function (num, parts) {
  const remainder = num % parts;
   return Array(parts - remainder).fill(parseInt(num / parts)).concat(Array(remainder).fill(parseInt(num/parts) + 1));
};


console.log(splitInteger(20, 6));