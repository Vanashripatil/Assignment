//1.  What will be the output of the following code snippet?

function isTwoPassed() {
  var args = Array.prototype.slice.call(arguments);
  console.log(args);
  console.log(args.indexOf(2) != -1);
}

isTwoPassed(1, 4); //Output = false
isTwoPassed(5, 3, 1, 2); //Output = true

//2.  Which value of a will be logged?

var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a); // 1

//3.  Write a multiplication function which will produce the following outputs when invoked:

function multiplication(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}

console.log(multiplication(2)(3)(4)); // output : 24
console.log(multiplication(4)(3)(4)); // output : 48

//4. How to empty an array in JavaScript?

var arrayList = ["a", "b", "c", "d", "e", "f"];

//1
const len = arrayList.length;
const arr1 = arrayList.slice(len);
console.log(arr1);
//2
function remove(arr) {
  while (arr.length) {
    arr.shift();
  }
  console.log(arr);
}

remove(arrayList);

//5. What will be the output of the following code?

var output = (function (x) {
  delete x;
  return x;
})(0);
console.log(output); // Output = 0

//6. Write code for merge two JavaScript Object dynamically.

const obj1 = {
  name: "Vanashri",
  location: "Pen",
};

const obj2 = {
  Food: ["tea", "Coffie", "Biscuit"],
};

const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

//7. Find output of the following:

var strA = "hi there";
var strB = strA;
strB = "bye there!";
console.log(strA); // Output = hi there

//8. How to empty an array javascript

var arr = [1, 2, 3, 4, 5, 6, 7, 8];

const emptyArr = arr.slice(arr.length, 0);
console.log(emptyArr);

//9. Calculate the length of an object by iterating through the object

const vanashri = {
  name: "vanshri",
  location: "Pen",
  food: "Pizza",
};

objectLen = Object.keys(vanashri).length;
console.log(objectLen);

//10. Write an example of promise.
//Resolve
const doPromise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const food = ["Pizza", "Salad", "Biscuit"];
    if (food.length > 0) {
      resolve(food);
    } else {
      reject("There is something wrong");
    }
  }, 2000);
});

doPromise1
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error));

//Reject

const doPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const food = ["Pizza", "Salad", "Biscuit"];
    if (food.indexOf() !== -1) {
      resolve("My food is here");
    } else {
      reject("There is something wrong");
    }
  }, 2000);
});

doPromise2
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error));
