/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function mobileMenu() {
  var menu = document.getElementById("topnavmenu");
  var ham =  document.getElementById("hamburger-icon");
  const isExpanded = ham.getAttribute('ariaExpanded') === 'true';

  if(isExpanded) {
    menu.classList.remove("visible")
    ham.classList.remove("fa-xmark")
    ham.classList.add("fa-bars")
    ham.style.fontSize = "24px";
    ham.setAttribute("ariaExpanded", "false");
  } else {
    menu.classList.add("visible")
    ham.classList.remove("fa-bars")
    ham.classList.add("fa-xmark")
    ham.style.fontSize = "28px";
    ham.setAttribute("ariaExpanded", "true");
  }
}

// ---- Scroll To Top Button ----
const scrollToTopBtn = document.getElementById("toTopButton");
scrollToTopBtn.getElementsByTagName("i")[0].classList.add("fa", "fa-angle-up");

// Button anzeigen, wenn nach unten gescrollt wird
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) { // Zeige den Button, wenn mehr als 300px gescrollt wurde
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

// Smooth Scroll nach oben
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});