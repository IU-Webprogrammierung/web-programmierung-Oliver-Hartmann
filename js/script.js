// Funktionen aufrufen

// Header und Footer laden
loadHeaderAndFooter();

// Scroll to Top Button anlegen
scrollToTop();

// Concert Dates laden und einfügen
concertDates();

//
// Funktionen
//
// Header und Footer laden
function loadHeaderAndFooter() {

  // Prüfen ob Subpage geladen (Single Release)

  isSubpage = document.getElementsByTagName("main")[0].classList.contains("subpage");

  // Wenn ja, dann Header und Footer mit angepassten relativen Pfaden laden
  if (isSubpage) {

    headerPath = "../components/subpage-header.html";
    footerPath = "../components/subpage-footer.html";
    loadHeader(headerPath);
    loadFooter(footerPath);

  } else {

    // Sonst Standard Header und Footer laden
    headerPath = "components/header.html";
    footerPath = "components/footer.html";
    loadHeader(headerPath);
    loadFooter(footerPath);
  }
}

// header.html laden
function loadHeader(headerPath) {
  fetch(headerPath)
    .then(res => res.text())
    .then(html => {
      document.querySelector("header").innerHTML = html;

      // Jetzt ist der Header im DOM – also kann der Code sicher laufen:
      highlightActiveLink();
    });

}

// footer.html laden
function loadFooter(footerPath) {
  fetch(footerPath)
    .then(res => res.text())
    .then(html => {
      document.querySelector("footer").innerHTML = html;
    });
}

// Klasse Active im Menu Item abhängig von geladener Page setzen

function highlightActiveLink() {
  let path = window.location.pathname;
  let page = path.split("/").pop();
  let menu = document.getElementById("topnavbar");
  let links = menu.getElementsByTagName("a");
  if (page === "music.html") links[1].classList.add("active");
  if (page === "live.html") links[2].classList.add("active");
  if (page === "studio.html") links[3].classList.add("active");
  if (page === "about.html") links[4].classList.add("active");
}


// Dark Mode Toggler

let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("darkModeToggler");

const enableDarkMode = () => {
  document.body.classList.add("dark-mode");
  localStorage.setItem("darkMode", "enabled");
}

const disableDarkMode = () => {
  document.body.classList.remove("dark-mode");
  localStorage.setItem("darkMode", null);
}

if (darkMode === "enabled") {
  enableDarkMode();
}

function darkModeToggler() {

  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    const root = document.documentElement;
    root.style.setProperty('--transistion-time', '0');
    enableDarkMode();
    console.log(darkMode)
    setTimeout(() => {
     root.style.setProperty('--transistion-time', '200ms');
    }, 400);
  } else {
    const root = document.documentElement;
   root.style.setProperty('--transistion-time', '0');
    disableDarkMode();
    console.log(darkMode);
    setTimeout(() => {
      root.style.setProperty('--transistion-time', '200ms');
    }, 300);
    
  }

}


// Umschalten zwischen Anzeige / Verbergen von Menu bei Click auf Hamburger Icon

function mobileMenu() {
  var menu = document.getElementById("topnavmenu");
  var hamburger = document.getElementById("hamburger-icon");
  const isExpanded = hamburger.getAttribute('ariaExpanded') === 'true';

  // Mobile Menu nicht sichbar
  if (isExpanded) {
    menu.classList.remove("visible")
    hamburger.setAttribute("ariaExpanded", "false");
    hamburger.classList.remove("is-active")

    // Mobile Menu sichbar
  } else {
    menu.classList.add("visible")
    hamburger.setAttribute("ariaExpanded", "true");
    hamburger.classList.add("is-active")
  }
}


// ---- Scroll To Top Button ----

function scrollToTop() {

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

}


// Concert Dates
// zu erst prüfen ob der container mit id concert-dates vorhanden ist

function concertDates() {

  if (document.getElementById("concert-dates") != null) {

    let myArr;
    let myObj;
    let myArrLenght;

    // Start mit dem Laden der Daten für die Tabelle
    loadData();

    // JSON Daten für die Tabelle laden
    async function loadData() {

      // Prüfung ob beim Laden und Erzeugen des HTML der Tabellendaten ein Fehler auftritt
      try {
        // Datei mit Daten laden und parsen
        const response = await fetch("data/concert-dates.json");
        const myObj = await response.json();

        // geladene Daten in myArr Array übergeben
        myArr = myObj;

      }
      // Bei Auftreten eines Fehlers, Meldung in das DOM schreiben und mainnavi ausblenden
      catch (error) {
        document.getElementById("concert-dates").innerHTML = "<p>Error loading data. Please try again later.</p>"
        return
      }

      writeHtmlTable(myArr)
    }

    // HTML mit den Daten erzeugen
    function writeHtmlTable(myArr) {

      let x = 0;
      let htmlTable = "";

      // Überschrift und Container erzeugen erzeugen
      htmlTable = "<h2>Concerts</h2>";
      htmlTable += "<article class='grid-table-container'>";
      htmlTable += "<div class='grid-table-row'>";
      htmlTable += "<h3>Date</h3><h3>Show</h3><h3>City</h3><h3>Venu</h3><h3>Ticket</h3></div>";
      htmlTable += "<hr class='table-line'></hr>";

      // Prüfung, ob Einträge in den Daten vorhanden sind. Wenn nicht, Meldung ausgeben.
      if (myArr.length == 0) (
        htmlTable += "<p>No dates yet. Do you want to send a booking request?"
      )

      else

        // Wenn ja, Array auslesen und Tabellenfelder erzeugen
        for (x = 0; x < myArr.length; x++) {
          htmlTable += "<div class='grid-table-row'>";
          htmlTable += "<p>" + myArr[x].date + "</p>";
          htmlTable += "<p>" + myArr[x].show + "</p>";
          htmlTable += "<p>" + myArr[x].city + "</p>";
          htmlTable += "<p>" + myArr[x].venu + "</p>";

          // Wenn Ticket vom Typ url dann Buy Ticket Button erzeugen
          if (myArr[x].ticket.type == "url") (
            htmlTable += "<p><a href='" + myArr[x].ticket.url + "' class='button-cta' aria-label='buy ticket for Insect O. " + myArr[x].show + " at " + myArr[x].venu + "'>Buy Ticket<i class='fa-solid fa-arrow-right link' aria-hidden='true'></i></a></p>"

          )

          // Wenn Ticket vom Typ door dann Text ausgeben
          else if (myArr[x].ticket.type == "door") (
            htmlTable += "<p>at the door</p>"
          )

          // Text Coming Soon wenn etwas anderes angegeben ist
          else htmlTable += "<p>coming soon</p>"

          htmlTable += "</div>";
          htmlTable += "<hr class='table-line'>";
        }

      // article schließen
      htmlTable += "</article>";

      // Booking Request button erzeigen
      htmlTable += "<a href='contact.html' class='button-nav'>send booking request</a>";

      // erzeugtes HTML im DOM aktuallisieren
      document.getElementById("concert-dates").innerHTML = htmlTable;
    };
  }
}