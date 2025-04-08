    if ($("main").hasClass("subpage")) {
        $("header").load("../components/subpage-header.html");
        $("footer").load("../components/subpage-footer.html");
        $("#script").load("../js/script.js");
    } else {
        $("header").load("components/header.html");
        $("footer").load("components/footer.html");
        $("#script").load("js/script.js");
    }
