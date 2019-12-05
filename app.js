var boton = document.getElementById("menuOpen")
var menuExpanded = document.getElementById("hamburgerMenu")

boton.addEventListener('click', showMenu)

function showMenu(event){
    event.preventDefault();
    menuExpanded.classList.toggle("menuExpanded");
}