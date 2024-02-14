window.addEventListener("DOMContentLoaded", () => {
  const timeLine = gsap.timeline();
  timeLine
    // .fromTo(".hero", { scaleY: 0 }, { scaleY: 1, duration: 1 })
    .fromTo(".hero__title__main", { x: 2000 }, { x: 0, duration: 0.8 })
    .fromTo(".hero__title__sub", { x: 2000 }, { x: 0, delay: 1, duration: 0.8 })
    .fromTo(".hero__title__3rd", { x: 2000 }, { x: 0, delay: 1, duration: 0.8 })
    .fromTo(
      ".priceCircle",
      { scaleX: 0, scaleY: 0 },
      { scaleX: 1, scaleY: 1, duration: 0.8 }
    )
    .fromTo(
      ".hero__eyecatche",
      { autoAlpha: 0 },
      { autoAlpha: 1, delay: 0.5, duration: 0.5 }
    )
    .fromTo(
      ".annotationLists",
      { autoAlpha: 0 },
      { autoAlpha: 1, delay: 0.5, duration: 0.1 }
    )
    .add(() => {
      console.log("gsap test");
    });

  const templateImages = document.querySelectorAll(".templates__imgBox img");
  templateImages.forEach((image) => {
    image.addEventListener("mouseenter", () => {
      gsap.fromTo(
        image,
        { scaleX: "100%", scaleY: "100%" },
        { scaleX: "120%", scaleY: "120%", ease: "power2.out" }
      );
    });
    image.addEventListener("mouseleave", () => {
      gsap.fromTo(
        image,
        { scaleX: "120%", scaleY: "120%" },
        { scaleX: "100%", scaleY: "100%", ease: "power2.out" }
      );
    });
  });
});
