/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function mobileMenu() {
  var x = document.getElementById("topNav");
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
