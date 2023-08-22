// const box = document.querySelector("#box");
// box.addEventListener("click", function () {
//   gsap.to("#box", {
//     scale: 0.67,
//     x: 700,
//     y: 300,
//     duration: 2,
//     backgroundColor: "blue",
//     rotate: 360,
//   });
// });

// gsap.to("h1", {
//   x: 300,
//   color: "orange",
//   duration: 2,
//   delay: 2,
//   fontWeight: "bold",
//   fontSize: "70",
//   stagger: 0.25, //for individual elements with same tagName
// });

// gsap.to("h2", {
//   x: 330,
//   color: "green",
//   duration: 2,
//   delay: 2.5,
//   fontWeight: "bold",
//   fontSize: "60",
//   repeat: 5, //for infinite repetitions give value -1
//   yoyo: true,
// });

// gsap.to("h3,h2,h1", {
//   x: 330,
//   color: "salmon",
//   duration: 1.5,
//   delay: 3,
//   fontWeight: "bold",
//   fontSize: "50",
// });

var tl = gsap.timeline();

tl.to("h1", {
  x: 500,
  duration: 1.5,
});
tl.to("h2", {
  x: 500,
  duration: 1.5,
});
tl.to("h3", {
  x: 500,
  duration: 1.5,
});
