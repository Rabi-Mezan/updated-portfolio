
var preloader = document.getElementById('loading');

function loadFunction() {
    preloader.style.display = 'none';
}


function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
}

