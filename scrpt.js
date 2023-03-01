"use strict";

// davaleba #1
function sum(...number) {
  let sumnumber = 0;
  for (let i of number) {
    if (i > 0) {
      sumnumber += i;
    }
  }
  return sumnumber;
}
let sumresult = sum(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);

console.log(sumresult);

// davaleba #2

function sum1(...numbers) {
  let numberssum = 0;
  for (let item of numbers) {
    numberssum += item;
  }
  return numberssum;
}
let result = sum1(10, 50, 6, 7, 8, 11, 6, 3, 9);
console.log(result);

// davaleba #3

let user = {
  firstname: "giorgi",
  lastname: "saakadze",
  age: 32,
  isloggedin: true,
};

function names() {
  if (user.isloggedin == true) {
    return `${user.firstname} ${user.lastname}`;
  } else {
    return false;
  }
}

let nameresult = names();
console.log(nameresult);

// davaleba #4
// ???????????????????????
// function task(...array) {
//     for (let x of array) {
//         // console.log(x);
//     }
//     return (Math.max(x));
// }
// let taskresult = task(12, 22, 42, 13, 17, 60);
// console.log(taskresult);

// davaleba#5

function even(y) {
  if (y % 2 == 0) {
    return "this number is even";
  } else if (y % 2 == 1) {
    return "this number is odd";
  }
}
let evresult = even(4);
console.log(evresult);

// davaleba #6
let array = ["html", "css", "python", "javascript", "bootstrap"];

// #1

for (let index = 0; index < array.length; index++) {
  const element = array[index];

  if (element.length > 4 && element.includes("av")) {
    console.log(element);
  }
}

// #2
for (const iterator of array) {
  // console.log(iterator);
  if (iterator.length > 4 && iterator.includes("av")) {
    console.log(iterator);
  }
}

// #3
array.forEach(function (item) {
  // console.log(item);
  if (item.length > 4 && item.includes("av")) {
    console.log(item);
  }
});

// davaleba #7
let array1 = [1, 2, 3, 4, 5];

for (let revers = array1.length; revers > 0; revers--) {
  console.log(revers);
}

// davaleba #8
let age = (birthyear, now) => {
    let result = now - birthyear > 18 ? "სრულწლოვანი" : "არასრულწლოვანი"
    console.log(result);
}
age(1991,2023)