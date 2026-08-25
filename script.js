document.addEventListener("DOMContentLoaded", () => {
  // Hamburger menu toggle
  const b = document.getElementById("hamb");
  const m = document.getElementById("menu");

  if (b && m) {
    b.onclick = () => m.classList.toggle("open");
  }

  // মেনু লিংকে ক্লিক করলে মেনু বন্ধ হয়ে যাবে
  if (m) {
    document.querySelectorAll(".menu a").forEach((a) => {
      a.onclick = () => m.classList.remove("open");
    });
  }

  // ফুটারে বছর অটো-আপডেট
  document.querySelectorAll(".year").forEach((x) => {
    x.textContent = new Date().getFullYear();
  });
});
