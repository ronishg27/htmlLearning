$("document").ready(() => {
  let slides = $(".slide");
  let dots = $(".dot");
  let index = 0;

  const changeSlide = () => {
    if (index > slides.length - 1) {
      index = 0;
    }
    if (index < 0) {
      index = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      dots[i].classList.remove("active");
    }
    slides[index].style.display = "block";
    dots[index].classList.add("active");
  };

  $("#left-arrow").click(() => {
    index -= 1;
    changeSlide();
  });

  $("#right-arrow").click(() => {
    index += 1;
    changeSlide();
  });
  changeSlide();

  //
});
