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