// menu mobile
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", function () {
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
  });
});

// switch FR / EN
// chaque texte traduisible a un attribut data-fr et data-en dans le HTML
const langButtons = document.querySelectorAll(".lang-btn");

const titles = {
  fr: "Kilian · Étudiant ingénieur, Statistique & Data Science",
  en: "Kilian · Engineering Student, Statistics & Data Science"
};

function setLang(lang) {
  document.documentElement.lang = lang;
  document.title = titles[lang];

  document.querySelectorAll("[data-fr]").forEach(function (el) {
    el.textContent = lang === "fr" ? el.dataset.fr : el.dataset.en;
  });

  langButtons.forEach(function (btn) {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

langButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    setLang(btn.dataset.lang);
  });
});
