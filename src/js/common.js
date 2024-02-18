window.addEventListener("DOMContentLoaded", () => {
  const timeLine = gsap.timeline();
  timeLine
    .fromTo(".js_hero", { autoAlpha: 0 }, { autoAlpha: 1, duration: 2 })
    .fromTo(
      ".js_hero__title__main",
      { scaleY: 0 },
      { scaleY: 1, duration: 0.2 }
    )
    .fromTo(
      ".js_hero__title__sub",
      { scaleY: 0 },
      { scaleY: 1, delay: 0.5, duration: 0.2 }
    )
    .fromTo(
      ".js_hero__title__3rd",
      { scaleY: 0 },
      { scaleY: 1, delay: 0.5, duration: 0.2 }
    )
    .fromTo(
      ".js_priceCircle",
      { scaleX: 0, scaleY: 0 },
      { scaleX: 1, scaleY: 1, delay: 0.5, duration: 0.8 }
    )
    .fromTo(
      ".js_hero__eyecatche",
      { autoAlpha: 0 },
      { autoAlpha: 1, delay: 0.5, duration: 0.5 }
    )
    .fromTo(
      ".js_annotationLists",
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 0.1 }
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
        { scaleX: "110%", scaleY: "110%", ease: "power2.out" }
      );
    });
    image.addEventListener("mouseleave", () => {
      gsap.fromTo(
        image,
        { scaleX: "110%", scaleY: "110%" },
        { scaleX: "100%", scaleY: "100%", ease: "power2.out" }
      );
    });
  });
});
