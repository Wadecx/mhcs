gsap.registerPlugin(ScrollTrigger);

gsap.to(".join_us", {
  opacity: 1,
  duration: 1,
}),
  gsap.from(".contact_form", {
    scrollTrigger: {
      trigger: "contact_form",
      start: "top top",
    },
    y: 500,
    opacity: 0,
    duration: 1.5,
    ease: "power4",
  });

gsap.from(".mhcs_paragraphe", {
  scrollTrigger: {
    trigger: "mhcs_paragraphe",
    start: "top top",
  },
  y: 500,
  opacity: 0,
  duration: 1.5,
  ease: "power4",
});
