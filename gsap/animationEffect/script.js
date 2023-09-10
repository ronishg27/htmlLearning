gsap.to(".img-container", {
  width: "100%",
  ease: Expo.easeInOut,
  stagger: 2,
});

gsap.to(".text h1", {
  width: "100%",
  ease: Expo.easeInOut,
  stagger: 2,
  top: 0,
});
gsap.to(".text h1", {
  delay: 2,
  ease: Expo.easeInOut,
  top: "-100%",
  stagger: 2,
});
