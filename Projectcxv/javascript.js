// Бургер меню


let burgerBtn = document.querySelector(".header_top_nav_mobile")	
let burgerMenu = document.querySelector(".header_top_nav");

function mobileMenu(){
	burgerMenu.classList.toggle("header_top_nav_active");
	console.log("Сработало");
}
burgerBtn.onclick = mobileMenu;


// Анимация увеличение чисел в header
let number = document.querySelectorAll(".number");
let index = 0;
setInterval(function () {
	index++;
	for(let i=0; i<number.length; i++){
		let numberExit = number[i].dataset.max;
		if (index<=numberExit){
	    	number[i].innerHTML = index;
		}
	}
}, 15);

// =======================================section_servise===========================

let massBox = document.querySelectorAll(".servise_box");
let massText = document.querySelectorAll(".servise_box_content");
let massStyle = document.querySelectorAll(".servise_slid");
let btn = document.querySelector(".servise_slider");

function acordion (){
	for(let i = 0; massBox.length>i; i++){
		massBox[i].addEventListener("click", function(){
			if (massText[i].classList.contains("servise_slid--active")){
				massText[i].classList.remove("servise_slid--active");
				massStyle[i].style.borderBottom = "5px solid #E5E5E5";
			}else{
				for(let q=0; massText.length>q; q++){
					massText[q].classList.remove("servise_slid--active");
					massStyle[q].style.borderBottom = "5px solid #E5E5E5";
				}
				massText[i].classList.add("servise_slid--active");
				massStyle[i].style.borderBottom = "5px solid #B65C19";
			}
		});
	}
	
}
acordion();

// Слайдер

let massSlid = document.querySelectorAll(".servise_slid");
	btnNext = document.querySelector(".servise_mobile_next");
	btnLeading = document.querySelector(".servise_mobile_leading");
	idSlid = 0;

function Nextslider(){
	for(let i=0; i<massSlid.length; i++){
		massSlid[i].classList.remove("servise_slid_active");
		if (massText[i].classList.contains("servise_slid--active")){
				massText[i].classList.remove("servise_slid--active");
				massStyle[i].style.borderBottom = "5px solid #E5E5E5";
		}
	}
	if(massSlid.length>(idSlid+1)){
		++idSlid;
		massSlid[idSlid].classList.toggle("servise_slid_active");
	}else{
		massSlid[0].classList.toggle("servise_slid_active");
		idSlid=0;
	}
}

function Prewslider(){
	for(let i=0; i<massSlid.length; i++){
		massSlid[i].classList.remove("servise_slid_active");
		if (massText[i].classList.contains("servise_slid--active")){
				massText[i].classList.remove("servise_slid--active");
				massStyle[i].style.borderBottom = "5px solid #E5E5E5";
		}
	}
	if(!idSlid==0){
		--idSlid;
		massSlid[idSlid].classList.toggle("servise_slid_active");
	}else{
		massSlid[massSlid.length-1].classList.toggle("servise_slid_active");
		idSlid=massSlid.length-1;
	}
}
Nextslider();
btnLeading.onclick = Nextslider;
btnNext.onclick = Prewslider;

// =======================================section_faq===========================

let massFaq = document.querySelectorAll(".faq_item_box");
let arrFaqText = document.querySelectorAll(".faq_text");
let arrFaqItem = document.querySelectorAll(".faq_item");
let arrFaqIco = document.querySelectorAll(".faq_ico");
function acordionFaq(){
	for(let i = 0; massFaq.length>i; i++){
			massFaq[i].addEventListener("click", function(){
				arrFaqText[i].classList.toggle("faq_text_active");
				if (arrFaqIco[i].classList.contains("faq_ico_activ")){
					arrFaqItem[i].style.backgroundColor = "#fff";
				}else{
					arrFaqItem[i].style.backgroundColor = "#E5E5E5";
				}
				arrFaqIco[i].classList.toggle("faq_ico_activ");
			});
	}
}
acordionFaq();

// ======================================Анимация====================================
const observer = new IntersectionObserver(entries => {
   entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('header_content_item_icon_animation');
      return;
    }
  });
 });
observer.observe(document.querySelector('.header_content_item_icon'));

