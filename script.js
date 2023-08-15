"use strict";

function display() {
  //   console.log("Hello world!");
  document.querySelector("#demo").innerHTML = "Hello world!";
}

const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", function () {
  document.querySelector("#demo").innerHTML = "Another Hello World!";
});
btn1.addEventListener("dblclick", function () {
  alert("Double clicked!");
});

// display();

function calculateValue(amt, per) {
  return (per / 100) * amt;
}
console.log(calculateValue(5000, 15));
