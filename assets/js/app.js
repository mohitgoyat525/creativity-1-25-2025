window.addEventListener("load", () => {
  gsap.fromTo(
    "#hero-title",
    { opacity: 0, y: 100 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 0.5 }
  );
  gsap.fromTo(
    "#hero-subheading",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "bounce.out", delay: 1 }
  );
  gsap.fromTo(
    "#hero-additional",
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1, duration: 1.5, ease: "power3.out", delay: 1.5 }
  );
  const cursor = document.getElementById("cursor");
  document.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.1,
    });
  });
  const cursorElements = document.querySelectorAll("#hero-title");

  cursorElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      cursor.classList.add("cursor-active");
    });
    element.addEventListener("mouseleave", () => {
      cursor.classList.remove("cursor-active");
    });
  });
});
