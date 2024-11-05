let form = document.querySelector('.contact>.size>form');
let orders = document.querySelector('.pop-app>.content>form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(form);
    sendFormData(formData)
    form.reset();
});
   
let btnOrders = document.querySelectorAll(".oprions>.size>.wrapper_options>.item>.btn");

let bgPopUp = document.querySelector(".pop-app");
let bgPopUpContent = document.querySelector(".pop-app>.content");
let btnExit = document.querySelector(".pop-app>.exit");

btnExit.onclick = () => {bgPopUp.style.display = "none"; document.body.style.overflow = "auto";}

btnOrders.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        let title;
        switch(index) {
            case 0:
                title = "Zamówienie projektu strony internetowej";
                break;
            case 1:
                title = "Zamówienie kodowania strony internetowej";
                break;
            default:
                title = "Zamówienie strony интернетowej pod klucz";
        }
        
        document.body.insertAdjacentHTML('beforeend', formDesing("Ваш заказ"));
        bgPopUpContent.innerHTML = formDesing(title);
        bgPopUp.style.display = 'flex';
        document.body.style.overflow = "hidden";

        const form = document.getElementById("orderForm");
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            sendFormData(formData)
            form.reset();
        });
    });
});

let formDesing = (title) => {
    return (
        `
        <form id="orderForm">
            <h3>${title}</h3>
            <p>E-mail:<input type="text" placeholder="E-mail" name="email"/></p>
            <p>Phone:<input type="text" placeholder="+48 000 000 000" name="phone"/></p>
            <button type="submit" class="btn">Zamówienie</button>
        </form>
        `
    );
}


async function sendFormData(formData) {
    /* f6c7c073a5dc2fc7f8924c4f01534595 vitaliycall@gmail.com*/
    let url = 'https://formsubmit.co/ajax/f6c7c073a5dc2fc7f8924c4f01534595';
    try {
        const response = await fetch(url, {
            method: "POST",
            body: formData,
        });

        if (!response.ok) {
            throw new Error(`Server error: ${response.status}`);
        }

        const result = await response.text();
        return { success: true, message: result };
    } catch (error) {
        console.error("Error during form submission:", error);
        return { success: false, message: "An error occurred. Please try again." };
    }
}

