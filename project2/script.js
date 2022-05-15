
// Анимация скрола

const observer = new IntersectionObserver(entries => {
   entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('practice__box-name-animation');
      return;
    }
  });
 });
observer.observe(document.querySelector('.practice__box-name'));

// Бургер

let btnBurger = document.querySelector(".burger-menu");

function burder(){
	let mobileMenu = document.querySelector(".header__menu");
	mobileMenu.classList.toggle('header__menu__active');

}
btnBurger.onclick = burder;

// Слайдер

let btnBack = document.querySelector(".btnBack");
let btnNext = document.querySelector(".btnNext");
let arrSlid = document.querySelectorAll(".comment_slid");
let summSlid = arrSlid.length
let idSlid = 1;

function slide(q){
	for(let i=0; i<q; i++){
		arrSlid[i].style.marginRight = "-300px";
	}
	console.log(idSlid);	
}
slide(idSlid);