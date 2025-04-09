/*
function subpageMenu() {

  // console.log(document.getElementsByTagName("header")[0].getElementsByTagName("a"))

  let menu = document.getElementsByTagName("header")[0];
  let menuItems = menu.getElementsByTagName("a");

  console.log(menuItems);

  let menuItemsCount = menuItems.length - 1;

  console.log(menuItemsCount)

  for (let l = 0; l < menuItemsCount; l++) {
    let originalHref = menuItems[l].getAttribute("href");
    menuItems[l].setAttribute("href", "../" + originalHref);
    console.log(menuItems[l].getAttribute("href"));
  }

}
*/









/* changing links in the menu when subpage is loadad

  let main = document.querySelector("main");

  if (main.classList.contains("subpage")) {
    let menu = document.getElementById("topnavbar");
    let links = menu.getElementsByTagName("a");
    let linkscount = links.length - 1;

    for (let l = 0; l < linkscount; l++) {
      let originalHref = links[l].getAttribute("href");
      links[l].setAttribute("href", "../" + originalHref);
      console.log(links[l].getAttribute("href"));
    }
  }

  */



// Menu Links aktiv setzen
/*
document.addEventListener("DOMContentLoaded", function () {
if (document.getElementById("main").classList.contains("subpage")) {
  fetch("../components/header.html")
    .then(res => res.text())
    .then(html => {
      document.querySelector("header").innerHTML = html;

      console.log(html);

      // Jetzt ist der Header im DOM – also kann der Code sicher laufen:
      highlightActiveLink();
    });

} else {
  fetch("components/header.html")
    .then(res => res.text())
    .then(html => {
      document.querySelector("header").innerHTML = html;

      // Jetzt ist der Header im DOM – also kann der Code sicher laufen:
      highlightActiveLink();
    });
}
});
  */