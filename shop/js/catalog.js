let boxCatList = document.querySelector(".catalog>.products>.product_box") || 
                 document.querySelector(".catalog>.products>.product_box_table");
let btnToggleTable = document.querySelector(".catalog>.products>.head>.icons");
let catStyle = (e) => {
  let btnTable = document.querySelector(".catalog>.products>.head>.icons>.item>svg");
  let btnLine = document.querySelector(".catalog>.products>.head>.icons>.itemLine>svg");
  if (e) {
    boxCatList.classList.replace("product_box", "product_box_table");
    btnLine.style.fill = "#222222"
    btnTable.style.fill = "#22222250";
  } else {
    boxCatList.classList.replace("product_box_table", "product_box");
    btnLine.style.fill = "#22222250"
    btnTable.style.fill = "#222222";
  }
}
catStyle(false);
  btnToggleTable.addEventListener('click', ()=>{
  let isProductBox = boxCatList.classList.contains('product_box');
  catStyle(isProductBox);
});

let html = (title, img, color, volume, type) => {
  let htm = `
  <a class="item_product" href="#">
    <div class="title">${title}</div>
    <div class="img"><img src="${img}" alt = "title"/></div>
    <div class="color"><span>Цвет: </span>${color}</div>
    <div class="volume"><span>Обьем: </span>${volume}</div>
    <div class="type"><span>Тип: </span>${type}</div>
    <button>Узнать цену</button>
  </a>
  `;
  return htm;
}
let arrHtml = [];
for(let i = 0; i<mass.length; i++){
  arrHtml.push(html(mass[i].title, mass[i].img, mass[i].color, mass[i].volume, mass[i].type));
}

boxCatList.innerHTML = arrHtml.join('');


let optionBlockOn = document.querySelector(".products>.head>p>.optionBtn");
let checkboxes = document.querySelectorAll('.option input[type="checkbox"]');
let arrActiveOptions = [];

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('click', (event) => {
    let clickCheck = `<span>${event.target.nextSibling.textContent.trim()}</span>`;
    if (!arrActiveOptions.includes(clickCheck)){
      arrActiveOptions.push(clickCheck);
    }else{
      arrActiveOptions.splice(arrActiveOptions.indexOf(clickCheck), 1);
    }
    optionBlockOn.innerHTML = arrActiveOptions.join('');
  });
});



// localhost позиция каталога
// localhost корзина
