//1 . Write a program that asks the user for two numbers
//  and the operation to be performed. Based on the input
// operation performs the mathematical operation on the
// two numbers.

const num1 = Number(prompt("Enter 1st number"));
const num2 = Number(prompt("Enter 2nd number"));

function Perform(x) {
  if (x === "SUM") {
    return num1 + num2;
  } else if (x === "DIFF") {
    return num1 - num2;
  }
  console.log(sum);
}

console.log(Perform("SUM"));
console.log(Perform("DIFF"));

//2.  Write an optimized function to return the sorted list
// for an array of numbers"

//1
const arr = [5, 7, 3, 2, 1, 8];
arr.sort();
console.log(arr);

//2
arr.sort(function (a, b) {
  return a - b;
});
console.log(arr);
