import emojipedia from "./emojipedia";

var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

function double(x) {
  return x * 2;
}

const newNumbers = numbers.map(double);

console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.

const filteredNum = numbers.filter(function (x) {
  return x > 10;
});
console.log(filteredNum);
//Reduce - Accumulate a value by doing something to each item in an array.

var reducedNum = numbers.reduce((accumulator, currentNumber) => {
  console.log("accumulator: " + accumulator);
  console.log("currentNumber: " + currentNumber);
  return accumulator + currentNumber;
}, 1);

console.log(reducedNum);
//Find - find the first item that matches from an array.

const findNum = numbers.find((x) => {
  return x > 10;
});

console.log(findNum);
//FindIndex - find the index of the first item that matches.

const findIndexNum = numbers.findIndex((x) => {
  return x > 10;
});

console.log(findIndexNum);

const truncatedMeaning = emojipedia.map((x) => {
  return x.meaning.substring(0, 100);
});
console.log(truncatedMeaning);
