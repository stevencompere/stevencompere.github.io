/* stevencompere.com — interactions (langue, menu, navigation active, apparitions) */
(function () {
  "use strict";
  var root = document.documentElement;

  /* ---- Bascule FR / EN ---- */
  var titles = {
    fr: "Dr. Steven Compère — Chimie des matériaux, nanomatériaux carbonés & CVD",
    en: "Dr. Steven Compère — Materials chemistry, carbon nanomaterials & CVD"
  };
  function setLang(l) {
    root.lang = l;
    document.title = titles[l];
    try { localStorage.setItem("sc-lang", l); } catch (e) {}
    document.querySelectorAll("[data-lang]").forEach(function (b) {
      b.setAttribute("aria-pressed", b.getAttribute("data-lang") === l ? "true" : "false");
    });
  }
  document.querySelectorAll("[data-lang]").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
  });
  setLang(root.lang === "en" ? "en" : "fr");

  /* ---- Menu mobile ---- */
  var nav = document.querySelector(".nav");
  var menuBtn = document.querySelector(".menu-btn");
  function closeMenu() {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  }
  menuBtn.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
  });
  document.querySelectorAll(".nav-links a").forEach(function (a) { a.addEventListener("click", closeMenu); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeMenu(); });

  /* ---- Filet sous la barre de navigation après défilement ---- */
  function onScroll() { nav.classList.toggle("scrolled", window.scrollY > 8); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Lien actif selon la section visible ---- */
  var links = {};
  document.querySelectorAll(".nav-links a[href^='#']").forEach(function (a) {
    links[a.getAttribute("href").slice(1)] = a;
  });
  if ("IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        Object.keys(links).forEach(function (id) { links[id].classList.toggle("active", id === en.target.id); });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    Object.keys(links).forEach(function (id) {
      var s = document.getElementById(id);
      if (s) spy.observe(s);
    });

    /* ---- Apparition douce des blocs ---- */
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
  }

  /* ---- Année du pied de page ---- */
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
