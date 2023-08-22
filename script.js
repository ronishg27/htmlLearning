// "use strict";

// function display() {
//   //   console.log("Hello world!");
//   document.querySelector("#demo").innerHTML = "Hello world!";
// }

// const btn1 = document.getElementById("btn1");
// btn1.addEventListener("click", function () {
//   document.querySelector("#demo").innerHTML = "Another Hello World!";
// });
// btn1.addEventListener("dblclick", function () {
//   alert("Double clicked!");
// });

// // display();

// function calculateValue(amt, per) {
//   return (per / 100) * amt;
// }
// console.log(calculateValue(5000, 15));

// setTimeout(() => {
//   console.log("after 5 seconds");
// }, 5000);

function f1() {
  const booking = ["booking1", "booking2", "booking3", "booking4", "booking5"];
  booking.push("booking6");
  booking.push("booking7");
  console.log(booking);
  const lastELement = booking.pop();
  console.log(booking);
  console.log(lastELement);
  booking.forEach((x) => {
    document.querySelector("#another").innerHTML += "<br>Array Element: " + x;
  });
}

function getBooking() {
  const booking = {
    booking1: "Booking 1",
    booking2: "Booking 2",
    booking3: "Booking 3",
    booking4: "Booking 5",
  };

  // document.querySelector("#another").innerHTML += booking.booking1;
  document.querySelector("#another").innerHTML = JSON.stringify(booking);
}

function operatorExamples() {
  // let x = "A";
  // let y = "a";
  let x = "20";
  let y = "5";
  document.querySelector(".operator").innerHTML = x < y;
  let age = null;

  //nullish coalesce operator
  let isOld = age ?? "younger"; //checks for null value
  console.log(isOld);
}

// operatorExamples();

// iife -> imediately invoke function expression

let fun = (function () {
  let privateValue = 5; // private value cant be accessed directly
  // console.log(b);
  return {
    getter: function () {
      console.log(privateValue); // fun.getter()
    },
    setter: function (val) {
      privateValue = val; // fun.setter(66)
    },
  };
})();

//prototype
let person = {
  name: "Tom", // go to browser console and type 'person.' and you'll see various properties not created by you, that is called prototype
};

// console.log(person.hasOwnProperty("name"));
// returns true

//more examples
// let ar = [1, 2, 3, 4, 5];
// console.log(ar.length); //here .length is alse a prototype. similarly there are lots of prototype

//inheritance

let tomObject = {
  age: 20,
  course: "CS",
};
tomObject.__proto__ = person;
// console.log(tomObject);

//this in eventlistener gives the tag that is to be listened

//call apply bind method

function abc(v1 = 3, v2 = 4) {
  //for default values
  console.log(this);
  console.log(v1, v2);
}

var ob = { age: 3 };

// abc();
// abc.call(ob, 1, 2); // passing arguments
// abc.apply(ob, [1, 2]); //array for the arguments
// let bindedFunction = abc.bind(ob); //just bind the function with an object and return another function which is binded with that object
// bindedFunction(6, 5); //and can be called later

// pure and impure functions
// pure functions are those functions which returns same result everytime when called with same arguments and doesn't change the value of global variables.
// rest are impure functions

// console.log("hey");
// setTimeout(function () {
//   console.log("after 5sec");
// }, 5000);
// console.log("bye");

let str = 'Hello "world"';
let str2 = "Hello world";

console.log(str);
console.log(str2.length);
console.log(str2.slice(2, str2.length));
console.log(str2.substring(2,5));
console.log(str2.substr(2,5));




