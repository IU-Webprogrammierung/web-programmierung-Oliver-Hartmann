/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function mobileMenu() {
  var x = document.getElementById("topnavmenu");
  if (x.style.display === "flex") {
    x.style.display = "none";
    document.getElementById("hamburger-icon").classList.remove("fa-xmark")
    document.getElementById("hamburger-icon").classList.add("fa-bars")
    document.getElementById("hamburger-icon").style.fontSize = "24px";
  } else {
    x.style.display = "flex";
    document.getElementById("hamburger-icon").classList.remove("fa-bars")
    document.getElementById("hamburger-icon").classList.add("fa-xmark")
    document.getElementById("hamburger-icon").style.fontSize = "28px";
  }
}

  // ---- Scroll To Top Button ----
  const scrollToTopBtn = document.getElementById("toTopButton");
  scrollToTopBtn.getElementsByTagName("i")[0].classList.add("fa-solid", "fa-angle-up");

        // Button anzeigen, wenn nach unten gescrollt wird
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) { // Zeige den Button, wenn mehr als 300px gescrollt wurde
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
