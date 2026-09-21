/* ============================================================
   Cultivora Land — script principal
   Pour l'instant : uniquement l'ouverture/fermeture du tiroir
   de navigation mobile. Vanilla JS, aucune dépendance.
============================================================ */

(function () {
  "use strict";

  var burger = document.querySelector(".header__burger");
  var nav = document.getElementById("mobile-nav");

  if (!burger || !nav) return;

  var closeBtn = nav.querySelector(".mobile-nav__close");
  var backdrop = nav.querySelector(".mobile-nav__backdrop");
  var links = nav.querySelectorAll("a");

  function openNav() {
    nav.classList.add("is-open");
    burger.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
    if (closeBtn) closeBtn.focus();
  }

  function closeNav() {
    nav.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
    burger.focus();
  }

  burger.addEventListener("click", function () {
    if (nav.classList.contains("is-open")) {
      closeNav();
    } else {
      openNav();
    }
  });

  if (closeBtn) closeBtn.addEventListener("click", closeNav);
  if (backdrop) backdrop.addEventListener("click", closeNav);

  links.forEach(function (link) {
    link.addEventListener("click", closeNav);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && nav.classList.contains("is-open")) {
      closeNav();
    }
  });

  // Ferme le menu si on repasse en largeur desktop (ex : rotation
  // d'écran ou redimensionnement de fenêtre) pour éviter un état
  // "menu ouvert" incohérent avec la nav horizontale qui réapparaît.
  window.addEventListener("resize", function () {
    if (window.innerWidth > 900 && nav.classList.contains("is-open")) {
      closeNav();
    }
  });
})();

/* ============================================================
   Scroll reveal (.reveal / .reveal-stagger)
   Amélioration progressive : le contenu est visible par défaut
   (voir motion.css). On ne le masque que si ce script s'exécute
   vraiment, juste avant de l'observer, pour ne jamais bloquer la
   lecture si JS échoue. Désactivé si l'utilisateur préfère moins
   de mouvement.
============================================================ */
(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  var targets = document.querySelectorAll(".reveal, .reveal-stagger");
  if (!targets.length || prefersReducedMotion) return;

  if (!("IntersectionObserver" in window)) return;

  targets.forEach(function (el) {
    el.classList.add("reveal-hidden");
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.remove("reveal-hidden");
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  targets.forEach(function (el) {
    observer.observe(el);
  });
})();
