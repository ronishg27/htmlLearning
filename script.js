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
  let isOld = age ?? "younger";  //checks for null value
  console.log(isOld);
}

operatorExamples();
