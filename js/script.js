// call functions

// load header and foot

// loadHeaderAndFooter(); //

constructHeader();
constructFooter();

// call scroll to top button

scrollToTop();

// call concert dates

concertDates();


//
// functions
//

// --- set active class for menu itmes ---

function highlightActiveLink() {
  let path = window.location.pathname;
  let page = path.split("/").pop();
  let menu = document.getElementById("topnav-bar");
  let links = menu.getElementsByTagName("a");
  if (page === "music.html") links[1].classList.add("active");
  if (page === "live.html") links[2].classList.add("active");
  if (page === "studio.html") links[3].classList.add("active");
  if (page === "research.html") links[4].classList.add("active");
  if (page === "about.html") links[5].classList.add("active");
}


// --- Dark Mode Toggler ---

let darkMode = localStorage.getItem("darkMode");

// enable dark mode

const enableDarkMode = () => {
  document.body.classList.add("dark-mode");
  localStorage.setItem("darkMode", "enabled");
}

// disable dark mode

const disableDarkMode = () => {
  document.body.classList.remove("dark-mode");
  localStorage.setItem("darkMode", null);
}

// check if dark mode is enabled

if (darkMode === "enabled") {
  enableDarkMode();
}

// --- function to toggle between light and dark mode ---

function toggleDarkMode() {

  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    const root = document.documentElement;
    root.style.setProperty('--transistion-time', '0');
    enableDarkMode();
    setTimeout(() => {
      root.style.setProperty('--transistion-time', '200ms');
    }, 400);
  } else {
    const root = document.documentElement;
    root.style.setProperty('--transistion-time', '0');
    disableDarkMode();
    setTimeout(() => {
      root.style.setProperty('--transistion-time', '200ms');
    }, 200);
  }
}

// --- toggle mobile menu with hamburger icon ---

function openMobileMenu() {
  var menu = document.getElementById("topnav-menu");
  var hamburger = document.getElementById("hamburger-icon");
  const isExpanded = hamburger.getAttribute('ariaExpanded') === 'true';

  // mobile menu not visibale

  if (isExpanded) {
    menu.classList.remove("visible")
    hamburger.setAttribute("ariaExpanded", "false");
    hamburger.classList.remove("is-active")

    // mobile menu visible

  } else {
    menu.classList.add("visible")
    hamburger.setAttribute("ariaExpanded", "true");
    hamburger.classList.add("is-active")
  }
}

// --- Scroll To Top Button ---

function scrollToTop() {

  const scrollToTopBtn = document.getElementById("toTopButton");
  scrollToTopBtn.getElementsByTagName("i")[0].classList.add("fa", "fa-angle-up");

  // show botton after scrolling 200px down

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  // smooth scroll to top

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

}


// --- Concert Dates ---

function concertDates() {

  // check if id concert-dates is loaded
  // if so, run function
  if (document.getElementById("concert-dates") != null) {

    let myArr;
    let myObj;
    let myArrLenght;

    // start to load data for table
    loadData();

    // load json data
    async function loadData() {

      // check if an error occurs while loading

      try {

        // load and parse concert-dates.json

        const response = await fetch("data/concert-dates.json");
        const myObj = await response.json();

        // set json data to an array

        myArr = myObj;

      }

      // if an error occured, write error message to html
      catch (error) {
        document.getElementById("concert-dates").innerHTML = "<p>Error loading data. Please try again later.</p>"
        return
      }

      writeHtmlTable(myArr)
    }

    // construct html from the loaded date

    function writeHtmlTable(myArr) {

      let x = 0;
      let htmlTable = "";

      // construct headings and container

      htmlTable = "<h2>Dates</h2>";
      htmlTable += "<article class='grid-table-container'>";
      htmlTable += "<div class='grid-table-row'>";
      htmlTable += "<h3>Date</h3><h3>Show</h3><h3>City</h3><h3>Venu</h3><h3>Ticket</h3></div>";
      htmlTable += "<hr class='table-line'></hr>";

      // chech if array has no entries
      // if so, write a message into html

      if (myArr.length == 0) (
        htmlTable += "<p>No dates yet. Do you want to send a booking request?"
      )

      else

        // if arrays has entries, construct html from array

        for (x = 0; x < myArr.length; x++) {
          htmlTable += "<div class='grid-table-row'>";
          htmlTable += "<p>" + myArr[x].date + "</p>";
          htmlTable += "<p>" + myArr[x].show + "</p>";
          htmlTable += "<p>" + myArr[x].city + "</p>";
          htmlTable += "<p>" + myArr[x].venu + "</p>";

          //chech if ticket type is url
          // if you, construct a cta button with link inside
          if (myArr[x].ticket.type == "url") (
            htmlTable += "<p><a href='" + myArr[x].ticket.url + "' class='button-cta' aria-label='buy ticket for Insect O. " + myArr[x].show + " at " + myArr[x].venu + "'>Buy Ticket<i class='fa-solid fa-arrow-right link' aria-hidden='true'></i></a></p>"

          )

          if (myArr[x].ticket.type == "info") (
            htmlTable += "<p><a href='" + myArr[x].ticket.url + "' class='button-cta' aria-label='more information about " + myArr[x].show + " at " + myArr[x].venu + "'>more info<i class='fa-solid fa-arrow-right link' aria-hidden='true'></i></a></p>"

          )

          // if type is door, write door
          else if (myArr[x].ticket.type == "door") (
            htmlTable += "<p>at the door</p>"
          )

          // if its any other type, write coming soon

          else htmlTable += "<p>coming soon</p>"

          // close html containers

          htmlTable += "</div>";
          htmlTable += "<hr class='table-line'>";
        }

      // close article

      htmlTable += "</article>";

      // construct button for booking request

     // htmlTable += "<a href='contact.html' class='button-link-with-icon' aria-label='Go to page contact to send a booking request'>booking request<i class='fa-solid fa-arrow-right' aria-hidden='true'></i></a>";

      // write constructed html into DOM

      document.getElementById("concert-dates").innerHTML = htmlTable;
    };
  }
}


// --- Show More Button ---

// get selectors as variables
var isShowAll = false;
const loadMoreBtn = document.querySelector("#load-more-button");
const grid = document.querySelector(".grid-4");

// - check if page contains the grid-4 with itmes

if (grid) {

  // get grid-4 items as a collection

  gridItems = grid.querySelectorAll("li");

  // add eventlistener to load more button

  loadMoreBtn.addEventListener("click", function () {

    // check if showAll is not true

    if (!isShowAll) {

      // if so, add class to show all grid items to the li tags of all grid elementes

      for (let i = 0; i < gridItems.length; i++) {
        gridItems[i].classList.add("all-grid-items");

        // set showAll to true

        isShowAll = true;

        // change button text

        loadMoreBtn.innerText = "show less";
      }

    } else {

      // if its not true

      // remove class li tags of all grid elements

      for (let i = 0; i < gridItems.length; i++) {

        gridItems[i].classList.remove("all-grid-items");

        // set showAll to false

        isShowAll = false;

        // change button text
        loadMoreBtn.innerText = "show more";

      }
      // scroll down for h2 releases not get hidden by topnavbar

      const yOffset = -83;
      const y = document.querySelector("#grid-4").getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  });
}