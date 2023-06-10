
menu = document.querySelector(".menu");
menu.onclick = function() {
    nav = document.querySelector(".nav");
    nav.classList.toggle("active");
}
 

var icon = document.getElementById("icon");
icon.onclick = function() {
    document.body.classList.toggle("darkmode");
    if(document.body.classList.contains("darkmode")){
        icon.src = "sun.png";
    } else {
        icon.src = "moon.png";
    }
}