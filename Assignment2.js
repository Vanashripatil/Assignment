//1. Declare a variable hello.
// Assign a function to it returning 'Hello world!'.

const msg = "Hello";

function myFunction() {
  return `${msg} world!`;
}

console.log(myFunction());

//2. Write a Javascript program which takes n as input and
// consoles the addition of the even and odd numbers from
// 1 to n as ‘Even Sum’ and ‘Odd Sum’. Do not use more than
// one loop.

function evenOddSum(n) {
  var evenSum = 0,
    oddSum = 0;
  for (let i = 0; i <= n; i++) {
    // console.log(i);
    i % 2 == 0 ? (evenSum += i) : (oddSum += i);
  }
  console.log(evenSum, oddSum);
}

evenOddSum(5);

//3.    Write a function equals that checks two values for
// strict equality. If the two values are equal, the string
//  'EQUAL' should be returned. If they are unequal, you
// should get 'UNEQUAL'. The call equals(1, 1) should return
// 'EQUAL', the call equals(1, ‘1’) should return 'UNEQUAL'.

function equals(a, b) {
  if (a === b) {
    console.log("EQUAL");
  } else {
    console.log("UNEQUAL");
  }
}

equals(1, 1);
equals(1, "1");

//4. Write a JavaScript program to create a new string
// from a given input changing the type to string and
// changing the position of first and last characters.
// The string length must be greater than or equal to 1."

function changePosition(str) {
  if (str.length < 1) {
    return str;
  }
  const msg1 = str.substring(1, str.length - 1);
  return str.charAt(str.length - 1) + msg1 + str.charAt();
}
console.log(changePosition("Vanashri"));
