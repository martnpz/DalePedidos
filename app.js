var boton = document.getElementById("menuOpen")
var menuExpanded = document.getElementById("hamburgerMenu")
var backMenu = document.getElementById("backMenu")

boton.addEventListener('click', showMenu);
backMenu.addEventListener('click', showMenu);

function showMenu(event){
    event.preventDefault();
    menuExpanded.classList.toggle("menuExpanded");
}

function showHeaderBar(event){
    console.log("funciona");
}