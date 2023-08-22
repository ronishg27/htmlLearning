const submit = document.querySelector("#submitBtn");
const car = document.querySelector("#carID");

function changed() {
  //   console.log(car.value);
  document.querySelector("p").innerHTML = car.value;
}

const img = document.querySelector("img");
img.addEventListener("mouseover", function () {
  this.style.scale = 1.5;
});
img.addEventListener("mouseout", function () {
  this.style.scale = 1 / 1.5;
  this.style.position = "relative";
  this.style.margin = 0;
});
