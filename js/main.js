/* ============================================================
   Confidence Concierge — main.js
   CONFIGURE: edit the two lines below.
   Phone: country code + number, no + or spaces. e.g. 526241234567
   ============================================================ */

const WA_NUMBER  = "526241234567";
const WA_MESSAGE = "Hello! I'd like to inquire about Confidence Concierge services in Los Cabos.";

document.addEventListener("DOMContentLoaded", function () {

  var waUrl = "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(WA_MESSAGE);
  document.querySelectorAll(".js-wa").forEach(function (el) {
    el.setAttribute("href", waUrl);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");
  });

  var nav = document.getElementById("siteNav");
  if (nav && !nav.classList.contains("nav--solid")) {
    var onScroll = function () {
      if (window.scrollY > 50) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  var burger = document.getElementById("navBurger");
  var links  = document.getElementById("navLinks");
  if (burger && links) {
    burger.addEventListener("click", function () {
      var isOpen = links.classList.toggle("open");
      burger.setAttribute("aria-expanded", String(isOpen));
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  var yr = document.getElementById("yr");
  if (yr) yr.textContent = new Date().getFullYear();

});
