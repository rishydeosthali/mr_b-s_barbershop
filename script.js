const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
  }
);

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});

document.querySelectorAll(".section-reveal").forEach((element) => {
  observer.observe(element);
});

const heroCenter = document.querySelector(".hero-center");
const heroHeader = document.querySelector(".site-header--hero");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const updateHeroMotion = () => {
  const scrollY = window.scrollY;

  if (heroCenter && !reduceMotion.matches) {
    const offset = Math.min(scrollY * 0.08, 26);
    heroCenter.style.transform = `translate3d(0, ${offset}px, 0)`;
  }

  if (heroHeader) {
    heroHeader.classList.toggle("is-scrolled", scrollY > 18);
  }
};

updateHeroMotion();
window.addEventListener("scroll", updateHeroMotion, { passive: true });
