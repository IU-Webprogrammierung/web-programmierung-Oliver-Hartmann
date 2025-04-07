/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function mobileMenu() {
  var menu = document.getElementById("topnavmenu");
  var ham = document.getElementById("hamburger-icon");
  const isExpanded = ham.getAttribute('ariaExpanded') === 'true';

  if (isExpanded) {
    menu.classList.remove("visible")
    ham.setAttribute("ariaExpanded", "false");
    ham.classList.remove("is-active")

  } else {
    menu.classList.add("visible")
    ham.setAttribute("ariaExpanded", "true");
    ham.classList.add("is-active")
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



// ---- concert dates ----
// ---- zu erst prüfen ob der container mit id concert-dates vorhanden ist ----

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