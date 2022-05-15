let burgerBtn = document.querySelector(".burger");
let burgerMenu = document.querySelector(".burger-mobile");

function mobileMenu(){
	burgerMenu.classList.toggle("_active");
}
burgerBtn.onclick = mobileMenu;