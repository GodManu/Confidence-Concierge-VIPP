/* ============================================================
   Confidence Concierge — main.js

   CONFIGURA AQUÍ: cambia las dos líneas de abajo.
   Teléfono: código de país + número, sin "+" ni espacios.
   Ej. México (624): 526241181978
   ============================================================ */

const WA_NUMBER  = "526241181978";
const WA_MESSAGE = "Hello! I'd like to inquire about Confidence Concierge services in Los Cabos.";

document.addEventListener("DOMContentLoaded", function () {

  /* ---------- WhatsApp links ---------- */
  var waUrl = "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(WA_MESSAGE);
  document.querySelectorAll(".js-wa").forEach(function (el) {
    el.setAttribute("href", waUrl);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");
  });

  /* ---------- Sticky nav shading ---------- */
  var nav = document.getElementById("siteNav");
  if (nav && !nav.classList.contains("nav--solid")) {
    var onScroll = function () {
      if (window.scrollY > 50) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- Mobile menu ---------- */
  var burger   = document.getElementById("navBurger");
  var links    = document.getElementById("navLinks");
  var backdrop = document.getElementById("navBackdrop");

  function closeMenu() {
    if (!links) return;
    links.classList.remove("open");
    if (backdrop) backdrop.classList.remove("open");
    if (burger) {
      burger.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
      burger.setAttribute("aria-label", "Open menu");
    }
    document.body.classList.remove("nav-open");
  }

  function openMenu() {
    if (!links) return;
    links.classList.add("open");
    if (backdrop) backdrop.classList.add("open");
    if (burger) {
      burger.classList.add("is-open");
      burger.setAttribute("aria-expanded", "true");
      burger.setAttribute("aria-label", "Close menu");
    }
    document.body.classList.add("nav-open");
  }

  if (burger && links) {
    burger.addEventListener("click", function (e) {
      e.stopPropagation();
      if (links.classList.contains("open")) closeMenu();
      else openMenu();
    });

    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeMenu);
    });

    if (backdrop) backdrop.addEventListener("click", closeMenu);

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 940) closeMenu();
    });
  }

  /* ---------- Team member modal (about page) ---------- */
  var modal = document.getElementById("bioModal");
  if (modal) {
    var modalBody   = document.getElementById("bioModalBody");
    var modalClose  = document.getElementById("bioModalClose");
    var lastFocused = null;

    function openBio(card) {
      var tpl = card.querySelector(".bio-full");
      if (!tpl || !modalBody) return;
      lastFocused = card;
      modalBody.innerHTML = tpl.innerHTML;
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("nav-open");
      if (modalClose) modalClose.focus();
    }

    function closeBio() {
      modal.classList.remove("open");
      modal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("nav-open");
      if (lastFocused) lastFocused.focus();
    }

    document.querySelectorAll(".team-card").forEach(function (card) {
      card.addEventListener("click", function () { openBio(card); });
      card.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openBio(card);
        }
      });
    });

    if (modalClose) modalClose.addEventListener("click", closeBio);
    modal.addEventListener("click", function (e) {
      if (e.target === modal) closeBio();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && modal.classList.contains("open")) closeBio();
    });
  }

  /* ---------- Footer year ---------- */
  var yr = document.getElementById("yr");
  if (yr) yr.textContent = new Date().getFullYear();

});
