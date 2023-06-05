// Using concat to merge arrays
var array1 = [1, 2, 3];
var array2 = [4, 5, 6];
var mergedArray = array1.concat(array2);
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]

// Using copyWithin to copy and replace elements within an array
var fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
fruits.copyWithin(1, 3, 4);
console.log(fruits); // Output: ["Apple", "Mango", "Orange", "Mango", "Grapes"]

// Using map to create a new array with modified elements
var numbers = [1, 2, 3, 4, 5];
var squaredNumbers = numbers.map(function (num) {
  return num * num;
});
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// Using every to check if all elements satisfy a condition
var ages = [22, 30, 25, 18, 35];
var isAllAdults = ages.every(function (age) {
  return age >= 18;
});
console.log(isAllAdults); // Output: true

// Using some to check if at least one element satisfies a condition
var numbers = [1, 2, 3, 4, 5];
var hasEvenNumber = numbers.some(function (num) {
  return num % 2 === 0;
});
console.log(hasEvenNumber); // Output: true

// Using filter to create a new array with elements that pass a condition
var numbers = [1, 2, 3, 4, 5];
var evenNumbers = numbers.filter(function (num) {
  return num % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4]

// Using find to find the first element that satisfies a condition
var ages = [22, 30, 25, 18, 35];
var foundAge = ages.find(function (age) {
  return age >= 25;
});
console.log(foundAge); // Output: 30

// Using findIndex to find the index of the first element that satisfies a condition
var ages = [22, 30, 25, 18, 35];
var foundIndex = ages.findIndex(function (age) {
  return age >= 25;
});
console.log(foundIndex); // Output: 1

// Using indexOf to find the index of an element
var fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
var index = fruits.indexOf("Orange");
console.log(index); // Output: 2

// Using lastIndexOf to find the last index of an element
var fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes", "Orange"];
var lastIndex = fruits.lastIndexOf("Orange");
console.log(lastIndex); // Output: 5

// Using push to add elements to the end of an array
var numbers = [1, 2, 3];
numbers.push(4, 5);
console.log(numbers); // Output: [1, 2, 3, 4, 5]

// Using pop to remove the last element from an array
var numbers = [1, 2, 3, 4, 5];
numbers.pop();
console.log(numbers); //
