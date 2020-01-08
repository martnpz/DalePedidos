//Lateal Menu
var boton = document.getElementById("menuOpen")
var menuExpanded = document.getElementById("hamburgerMenu")
var backMenu = document.getElementById("backMenu")

boton.addEventListener('click', showMenu);
backMenu.addEventListener('click', showMenu);

function showMenu(event){
    event.preventDefault();
    menuExpanded.classList.toggle("menuExpanded");
}

//menu function
function showHeaderBar(event){
    console.log("funciona");
}

//Header show event
window.onscroll = function() {scrollHeader()};

function scrollHeader() {
    if (document.body.scrollTo > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("header").style.cssText = 'background-color: #FF1D25; transition: .6s ease;';
    } else {
        document.getElementById("header").style.cssText = 'background-color: none; transition: .6s ease;';
    }
}

//product view

var product = document.getElementById('product')
var headerColor = document.getElementById('header') 
var productBox = document.getElementById('productBox')
var scrollNone = document.getElementById('body')
product.addEventListener("click", viewProduct)

function viewProduct(event) {
    scrollNone.classList.toggle("bodyNone")
    product.classList.toggle("productExpand")
    productBox.classList.toggle("productBox")
    headerColor.classList.toggle("colorSwitch")
    event.preventDefault()
}
