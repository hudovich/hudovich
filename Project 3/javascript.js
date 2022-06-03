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