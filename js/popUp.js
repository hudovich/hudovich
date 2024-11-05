let btnMenu = document.querySelector(".icon");
let blockMenu = document.querySelector("nav");
let body = document.querySelector("body");

btnMenu.onclick = () => {
    blockMenu.classList.toggle("active")
};

document.addEventListener("mouseup", (e) => {
    if (blockMenu.classList.contains("active") && !btnMenu.contains(e.target)){
        blockMenu.classList.toggle("active");
    }
});

let btnPortfolio = document.querySelectorAll(".portfolio>.size>.wrapper>.item>.btn");

btnPortfolio.forEach((btn, index) => {
    btn.addEventListener("click", (e)=>{
        let currentImageIndex = 0;

        const updateImage = () => {
            const imgElement = bgPopUpContent.querySelector("img");
            imgElement.src = posts[index].images[currentImageIndex];
            imgElement.alt = posts[index].title; 
        };

        bgPopUpContent.innerHTML = `
            <div class="wraper">
                <div class="left">
                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 108.06"><title>back-arrow</title><path d="M63.94,24.28a14.28,14.28,0,0,0-20.36-20L4.1,44.42a14.27,14.27,0,0,0,0,20l38.69,39.35a14.27,14.27,0,0,0,20.35-20L48.06,68.41l60.66-.29a14.27,14.27,0,1,0-.23-28.54l-59.85.28,15.3-15.58Z"/></svg>
                </div>
                <img src="${posts[index].images[0]}" alt="${posts[index].title}" />
                <div class="right"><svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 108.06"><title>previous-arrow</title><path d="M58.94,24.28a14.27,14.27,0,0,1,20.35-20l39.49,40.16a14.28,14.28,0,0,1,0,20L80.09,103.79a14.27,14.27,0,1,1-20.35-20L74.82,68.41l-60.67-.29a14.27,14.27,0,0,1,.24-28.54l59.85.28L58.94,24.28Z"/></svg></div>
            </div>
            <h2>${posts[index].title}</h2>
            <h4>${posts[index].description}</h4>
            ${posts[index].button?`<a class="btn ${posts[index].btnClass}" href="${posts[index].button}" target="_blank" onclick="clickSound()">ZOBACZ DEMO</a>`:''}  
        `
        updateImage();

        bgPopUpContent.querySelector('.left').addEventListener('click', () => {
            currentImageIndex = (currentImageIndex - 1 + posts[index].images.length) % posts[index].images.length;
            updateImage();
        });

        bgPopUpContent.querySelector('.right').addEventListener('click', () => {
            currentImageIndex = (currentImageIndex + 1) % posts[index].images.length;
            updateImage();
        });


        bgPopUp.style.display = 'flex';
        document.body.style.overflow = "hidden";
    })
});