document.addEventListener('scroll', function() {
    animation('.o_mnie > .title_section', 'animation_title_section');
    animation('.portfolio > .title_section', 'animation_title_section');
    animation('.skills > .title_section', 'animation_title_section');
    animation('.oprions > .title_section', 'animation_title_section');
    animation('.contact > .title_section', 'animation_title_section');
    animation('.portfolio > .size > .wrapper', 'animation_right');
    animation('.portfolio > .size > .wrapper', 'animation_right');
    animationArr('.o_mnie > .size >.content> .item > p', 'animation_left');
    animationArr('.skills > .size > .item >.title', 'animation_left');
    animationArr('.skills > .size > .item > progress', 'animation_right');
});

const animationArr = (element, toggleTeg) => {
    const html = document.querySelectorAll(element);
    for(let i = 0; i<html.length; i++){
        animation('.o_mnie > .size > .item > p', toggleTeg, html[i]);
    }
}
const animation = (element, toggleTeg, html) => {
    const content = html || document.querySelector(element);
    const contentPosition = content.getBoundingClientRect().top+100; // Позиция элемента относительно окна
    const windowHeight = window.innerHeight;

    if (contentPosition < windowHeight) {
        content.classList.add(toggleTeg);
    }
}