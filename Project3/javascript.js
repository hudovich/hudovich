// Бургер меню


let burgerBtn = document.querySelector(".header_top_nav_mobile")	
let burgerMenu = document.querySelector(".header_top_nav");

function mobileMenu(){
	burgerMenu.classList.toggle("header_top_nav_active");
}

document.addEventListener('click', e => {
	if(burgerMenu.classList.contains('header_top_nav_active')){
		if((!(e.target.className == "header_top_nav_mobile burg"))||(!(e.target.className == "burg"))){
			mobileMenu();
		};
	}else{
		if((e.target.className == "header_top_nav_mobile burg")||(e.target.className == "burg")){
			mobileMenu();
		}
	}
})



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

// ======================================= Слайдер===========================

let massSlid = document.querySelectorAll(".servise_slid");
	btnNext = document.querySelector(".servise_mobile_next");
	btnNextS = document.querySelector(".servise_mobile_next_safari");
	btnLeading = document.querySelector(".servise_mobile_leading");
	btnLeadingS = document.querySelector(".servise_mobile_leading_safari");
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
btnNextS.onclick = Prewslider;
btnLeadingS.onclick = Nextslider;

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
      entry.target.classList.add('_anim');
      return;
    }
  });
 });
observer.observe(document.querySelector('.header_content_box'));
observer.observe(document.querySelector('.section_advantages_box_item'));
observer.observe(document.querySelector('.section_advantages_box_icon'));
observer.observe(document.querySelector('.advantages_box_option'));
observer.observe(document.querySelector('.section_algorithms_content'));
observer.observe(document.querySelector('.about_content_text_anim'));
observer.observe(document.querySelector('.about_anim_1'));
observer.observe(document.querySelector('.about_anim_2'));
observer.observe(document.querySelector('.about_anim_3'));
observer.observe(document.querySelector('.about_anim_4'));
observer.observe(document.querySelector('.about_anim_5'));
observer.observe(document.querySelector('.about_anim_6'));


// ======================================Телефон маска====================================
[].forEach.call(document.querySelectorAll('#phone'), function (input) {
        let keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            let pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            let matrix = "+380(__)_______",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                newValue = matrix.replace(/[_\d]/g, function (a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
                });
            i = newValue.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                newValue = newValue.slice(0, i);
            }
            let reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function (a) {
                    return "\\d{1," + a.length + "}";
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = newValue;
            if (event.type == "blur" && this.value.length < 5) this.value = "";
        }

        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false);
    });
// ======================================Проверка браузера====================================
function get_name_browser(){
    // получаем данные userAgent
    let ua = navigator.userAgent;    
    // с помощью регулярок проверяем наличие текста,
    // соответствующие тому или иному браузеру
    if (ua.search(/Chrome/) > 0) return 'Google';
    if (ua.search(/Firefox/) > 0) return 'Firefox';
    if (ua.search(/Opera/) > 0) return 'Opera';
    if (ua.search(/Safari/) > 0) return 'Safari';
    if (ua.search(/MSIE/) > 0) return 'Internet Explorer';
    // условий может быть и больше.
    // сейчас сделаны проверки только 
    // для популярных браузеров
    return 'Не определен';
}
let browser = get_name_browser();
let safariArr = document.querySelectorAll(".safari");
let safariOfArr = document.querySelectorAll(".safariof");

if(browser === "Safari"){
	for(let i=0; i<safariArr.length; i++){
		safariOfArr[i].style.display = "none";
		safariArr[i].style.display = "block";
	}	
}
