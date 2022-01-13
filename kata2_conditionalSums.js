const conditionalSum = function(values, condition) {
  if (values.length === 0) return 0;
  return values.filter(
    num => (num % 2 === (condition === 'even' ? 0 : 1)))
    .reduce(
      (previousValue, currentValue) => previousValue + currentValue);
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));