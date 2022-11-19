var button;
function menu(button) {
    var content = document.getElementsByClassName("content");
    var projects = document.getElementsByClassName("projects");
    var social = document.getElementsByClassName("social");
    var menu = document.getElementsByClassName("menu");
    

    if(button == "home") {
        content[0].style.display = "none";
        projects[0].style.display = "none";
        social[0].style.display = "none";

        menu[0].classList.add("active");
        menu[1].classList.remove("active");
        menu[2].classList.remove("active");
    } else if(button == "projects") {
        content[0].style.display = "flex";
        projects[0].style.display = "flex";
        social[0].style.display = "none";

        menu[0].classList.remove("active");
        menu[1].classList.add("active");
        menu[2].classList.remove("active");
    } else if(button == "social") {
        content[0].style.display = "flex";
        projects[0].style.display = "none";
        social[0].style.display = "flex";

        menu[0].classList.remove("active");
        menu[1].classList.remove("active");
        menu[2].classList.add("active");
    }

}