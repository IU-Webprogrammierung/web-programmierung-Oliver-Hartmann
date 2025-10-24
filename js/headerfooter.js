// call functions

// load header and foot

constructHeader();
constructFooter();

//
// functions
//

//--- load header and functions ---

function constructHeader() {

  // check if subpage (single release) is loaded
  let urlAdd = "";
  isSubpage = document.getElementsByTagName("main")[0].classList.contains("subpage");

  // if so, add ../ to menu url

  if (isSubpage) {

    urlAdd = "../";

  }

  htmlHeader = "<!-- Top Navigation Bar -->";
  htmlHeader += "<nav id='topnav-bar'>";
  htmlHeader += "<a href='" + urlAdd + "index.html' aria-label='Go to homepage Insect O.' id='home'>Insect O.</a>";
  htmlHeader += "<ul id='topnav-menu' aria-label='menu'>";
  htmlHeader += "<li><a href='" + urlAdd + "music.html' aria-label='Go to page music'>Music</a></li>";
  htmlHeader += "<li><a href='" + urlAdd + "live.html' aria-label='Go to page live'>Live</a></li>";
  htmlHeader += "<li><a href='" + urlAdd + "studio.html' aria-label='Go to page studio'>Studio</a></li>";
  htmlHeader += "<li><a href='" + urlAdd + "research.html' aria-label='Go to page research'>Research</a></li>";
  htmlHeader += "<li><a href='" + urlAdd + "about.html' aria-label='Go to page about'>About</a></li>";

  htmlHeader += "<li><button onclick='toggleDarkMode()' aria-label='toggle dark mode' id='darkModeToggler'><i class='fa-solid fa-adjust' aria-hidden='true'></i></button></li>";
  htmlHeader += "</ul>";

  htmlHeader += "<button onclick='openMobileMenu()' id='hamburger-icon' aria-label='toggle mobile menu between open and close' aria-expanded='false' class='hamburger'>";
  htmlHeader += "<span class='line'></span>";
  htmlHeader += "<span class='line'></span>";
  htmlHeader += "<span class='line'></span>";
  htmlHeader += "</button>";
  htmlHeader += "</nav>";

  document.querySelector("header").innerHTML = htmlHeader;
}

function constructFooter() {

  // check if subpage (single release) is loaded
  let urlAdd = "";
  isSubpage = document.getElementsByTagName("main")[0].classList.contains("subpage");

  // if so, add ../ to menu url

  if (isSubpage) {

    urlAdd = "../";

  }

  htmlFooter = "<!-- Footer Navigation-->";
  htmlFooter += "<nav class='footer-nav' aria-label='footer navigation'>";
  htmlFooter += "<a class='footer-nav-item' href='" + urlAdd + "privacy.html' aria-label='Go to page privacy'>Privacy</a>";
  htmlFooter += "<a class='footer-nav-item' href='" + urlAdd + "imprint.html' aria-label='Go to page imprint'>Imprint</a>";
  htmlFooter += "<a class='footer-nav-item' href='" + urlAdd + "contact.html' aria-label='Go to page contact'>Contact</a>";
  htmlFooter += "</nav>";

  htmlFooter += "<!-- Social Navigation-->";
  htmlFooter += "<nav aria-label='social media links' class='footer-social-icons'>";
  htmlFooter += "<a href='https://insecto.bandcamp.com/' aria-label='Follow Insect O. on bandcamp'>";
  htmlFooter += "<i class='fa-brands fa-bandcamp icon-social' alt='Follow Insect O. on bandcamp'></i>";
  htmlFooter += "</a>";
  htmlFooter += "<a href='https://www.facebook.com/insecto.official' aria-label='Follow Insect O. on facebook'>";
  htmlFooter += "<i class='fa-brands fa-facebook icon-social' alt='Follow Insect O. on facebook'></i>";
  htmlFooter += "</a>";
  htmlFooter += "<a href='https://www.instagram.com/insecto_music/?hl=de' aria-label='Follow Insect O. on instagram'>";
  htmlFooter += "<i class='fa-brands fa-instagram icon-social' alt='Follow Insect O. on instagram'></i>";
  htmlFooter += "</a>";
  htmlFooter += "<a href='https://open.spotify.com/intl-de/artist/3DvAgRmwCrUUlnvqASCdDB' aria-label='Follow Insect O. on spotify'>";
  htmlFooter += "<i class='fa-brands fa-spotify icon-social' alt='Follow Insect O. on spotify'></i></a>";
  htmlFooter += "<a href='https://www.youtube.com/@insecto.3725' aria-label='Follow Insect O. on youtube'>";
  htmlFooter += "<i class='fa-brands fa-youtube icon-social' alt='Follow Insect O. on youtube'></i>";
  htmlFooter += "</a>";
  htmlFooter += "</nav>";


  htmlFooter += "<p class='center copyright' aria-label='Copyright information'>Copyright by Oliver Hartmann 2025</p>";

  document.querySelector("footer").innerHTML = htmlFooter;
}

//--- load header and functions ---


//--- load header and functions ---

function loadHeaderAndFooter() {

  // check if subpage (single release) is loaded

  isSubpage = document.getElementsByTagName("main")[0].classList.contains("subpage");

  // if so, load special header and footer html

  if (isSubpage) {

    headerPath = "../components/subpage-header.html";
    footerPath = "../components/subpage-footer.html";
    loadHeader(headerPath);
    loadFooter(footerPath);

  } else {

    // if not, load standard header and footer html

    headerPath = "components/header.html";
    footerPath = "components/footer.html";
    loadHeader(headerPath);
    loadFooter(footerPath);
  }
}

// --- load header.html ---

function loadHeader(headerPath) {
  fetch(headerPath)
    .then(res => res.text())
    .then(html => {
      document.querySelector("header").innerHTML = html;
      highlightActiveLink();
    });

}

// --- load footer.html ---

function loadFooter(footerPath) {
  fetch(footerPath)
    .then(res => res.text())
    .then(html => {
      document.querySelector("footer").innerHTML = html;
    });
}