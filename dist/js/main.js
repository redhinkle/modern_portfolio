// Select DOM items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

// Set initial state of menu
let showMenu = false; //let will allow the value to change

menuBtn.addEventListener("click", toggleMenu);
function toggleMenu() {
  //If menu overlay is not shown, static page:
  if (!showMenu) {
    //Assigns classes to menu items
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));
    //forEach will loop through each nav-item because there is more than one. arrow function will take the parameter of 'item' in navItems and assign the show class to them.

    //Set menu state
    showMenu = true;
  } else {
    //REMOVE classes
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show")); //Set menu state
    showMenu = false;
  }
}
