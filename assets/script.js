document.addEventListener("DOMContentLoaded", () => {
  const taglines = document.querySelectorAll(".tagline");

  taglines.forEach(tag => {
    tag.addEventListener("mousemove", (e) => {
      const rect = tag.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      tag.style.setProperty("--mx", `${x}%`);
      tag.style.setProperty("--my", `${y}%`);
    });

    tag.addEventListener("mouseleave", () => {
      tag.style.setProperty("--mx", "50%");
      tag.style.setProperty("--my", "50%");
    });
  });
});