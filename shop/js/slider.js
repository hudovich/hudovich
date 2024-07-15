let arrSlide = document.querySelectorAll(".slid");
let btnLeft = document.querySelector(".left");
let btnRight = document.querySelector(".right");
let idSlide = 0;
let activeSlide = () => {
  arrSlide.forEach(e => {
    e.style.display = 'none';
  });
}
arrSlide[idSlide].style.display = 'grid';
btnLeft.addEventListener('click', ()=>{
  activeSlide();
  idSlide % arrSlide.length === 0 ? idSlide = arrSlide.length - 1 : idSlide-- ;
  arrSlide[idSlide].style.display = 'grid';
});
btnRight.addEventListener('click', ()=>{
  activeSlide();
  idSlide % arrSlide.length === 1 ? idSlide = 0 : idSlide++ ;
  arrSlide[idSlide].style.display = 'grid';
});