let btnCat = document.querySelector(".button_category");
let boxCategoryList = document.querySelector(".mobile_category_list");
let btnMain = document.querySelector(".mobile_main_button");
let categoryActive = () => {
  btnCat.classList.toggle("button_category_active");
  if(document.querySelector(".button_category_active")){
    boxCategoryList.style.display = "grid";
  }else{
    boxCategoryList.style.display = "none";
  }
}
btnCat.onclick = categoryActive;

let btnSearch = document.querySelector(".search>svg");
let activeSearchInput = document.querySelector(".input_search_header");
let btnExitSearch = document.querySelector(".icon_mobile_exit_search");
btnSearch.onclick = () => activeSearchInput.style.display = 'grid';
btnExitSearch.onclick = () => activeSearchInput.style.display = 'none';

let accountLoginBox = document.querySelector(".account_active_box");
let btnAccount = document.querySelector(".account");
let btnExitAccountBox = document.querySelector(".account_active_box>form>.header>.exit");
btnAccount.onclick = () => accountLoginBox.style.display = "grid";
btnExitAccountBox.onclick = () => accountLoginBox.style.display = "none";

let pagesMain = document.querySelector(".pages_main");
let btnPagesMain = document.querySelector(".mobile_main_button");
btnPagesMain.onclick = () => {
  pagesMain.classList.toggle("pages_main_active");
  if(document.querySelector(".pages_main_active")){
    document.querySelector("body").style.overflow = "hidden";
  }else{
    document.querySelector("body").style.overflow = "auto";
  }
}
let cookieBtn = document.querySelector(".cookie>svg");
let cookie = document.querySelector(".cookie");
cookieBtn.onclick = () => {
  cookie.style.display = 'none';
}