// win menu
let winMenuButton = document.querySelector(".nav").firstChild;
let winMenu = document.querySelector(".display_nav_menu");

function  menu(){
    let q = winMenu.classList.toggle("display_nav_menu_active");
    if(q){
        document.addEventListener('click', function(e){
            if (!(e.target == winMenu) && !(e.target == winMenuButton)){
                winMenu.classList.remove("display_nav_menu_active");
            }
        });
    }
}
winMenuButton.onclick = menu;

// time
let timeElem = document.querySelector('.time');
function time() {
   return new Date().toTimeString().replace(/ .*/, '');
}
setInterval(
   () => timeElem.innerHTML = time(),
   1000
);
// open folder
let folder = document.querySelectorAll('.folder');
let openDisp = document.querySelector('.display'); 
let itemMenu = document.querySelectorAll('.item_nav');
let footerNavBar = document.querySelector('.box_file');

document.addEventListener("dblclick", function(e){
    for(let i=0; i<folder.length; i++){
        if(e.target == folder[i] || e.target.closest('.folder') == folder[i]){
            let name = folder[i].name;
            for(let g=0; g<projectUrl.length; g++){
                if(`project-${g}` == name){
                    iFrame.src = projectUrl[g];
                }
            }
            openFolder(openDisp, footerNavBar);
        } 
    }
});
document.addEventListener("click", function(e){
    for(let i=0; i<itemMenu.length; i++){
        if(e.target == itemMenu[i] || e.target.closest('.item_nav') == itemMenu[i]){
            let name = folder[i].name;
            for(let g=0; g<projectUrl.length; g++){
                if(`project-${g}` == name){
                    iFrame.src = projectUrl[g];
                }
            }
            openFolder(openDisp, footerNavBar);
        }
    }
});

function openFolder (fold, nav){
    fold.classList.add('_open');
    nav.classList.add('box_file_activ');
}
// exit folder

let exitBtn = document.querySelector(".exit");
function exitFolder (fold, nav){
    iFrame.src = 'null';
    fold.classList.remove('_open');
    nav.classList.remove('box_file_activ');
}
exitBtn.addEventListener('click', () => exitFolder(openDisp, footerNavBar));


//footer menu folder
let closeFotterBtn = document.querySelector(".none");

function openFooter (fold){
    fold.classList.add('_open');
}
function closeFooter (fold){
    fold.classList.remove('_open');
}
closeFotterBtn.addEventListener('click', () => closeFooter(openDisp));
footerNavBar.addEventListener('click', function(e){
    if(openDisp.classList.contains('_open')){
        closeFooter(openDisp);
    }else{
        openFooter (openDisp)
    }
});

//display width height
let winDisplay = document.querySelector(".win_display");
let openWidth = document.querySelector(".open");

openWidth.addEventListener('click', function (){
    let width = openDisp.offsetWidth;
    let dispWidth = winDisplay.offsetWidth;
    let dispHeight = winDisplay.offsetHeight;
    
    if(width<dispWidth){
        openDisp.style.width = dispWidth+'px';
        openDisp.style.height = dispHeight+'px';
    }else{ 
        openDisp.style.width = '600px';
        openDisp.style.height = '600px';
    }
});

// content display

let projectUrl = ['https://hudovich.github.io/hudovich/Project3/',
                'https://hudovich.github.io/hudovich/project/',
                'https://hudovich.github.io/hudovich/project2/',
                'https://hudovich.github.io/hudovich/',]
let iFrame = document.querySelector('iFrame');


