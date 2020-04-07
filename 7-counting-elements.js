/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {
  var elSet = new Set();
  var count = 0;
  arr.forEach(el => elSet.add(el));
  arr.forEach((el) => {
    if (elSet.has(el + 1)) {
      count++;
    }
  })
  return count;
};

console.log(countElements([1,1,2,2]));