let state = {
    button:'Написать Мне',
    skills:{
        name: 'Скилы',
        skillsGo: {
            html:{
                src:'img/HTML5.png',
                alt: 'HTML',
                href: '#',
                name: 'HTML 5',
                progress: '4',
            },
            css:{
                src:'img/CSS3.png',
                alt: 'CSS',
                href: '#',
                name: 'CSS 3',
                progress: '4',
            },
            english:{
                src:'img/english.png',
                alt: 'english',
                href: '#',
                name: 'English',
                progress: '0',
            },
            react:{
                src:'img/React.png',
                alt: 'React',
                href: '#',
                name: 'React',
                progress: '2',
            },
            redux:{
                src:'img/redux.png',
                alt: 'redux',
                href: '#',
                name: 'Redux',
                progress: '1',
            },
            git:{
                src:'img/Git.png',
                alt: 'git',
                href: '#',
                name: 'Git',
                progress: '0',
            },
            flex:{
                src:'img/Flex.png',
                alt: 'flex',
                href: '#',
                name: 'Flex',
                progress: '4',
            },
            greed:{
                src:'img/none.png',
                alt: 'greed',
                href: '#',
                name: 'Greed',
                progress: '0',
            },
            scss:{
                src:'img/scss.png',
                alt: 'scss',
                href: '#',
                name: 'Scss',
                progress: '3',
            },
            js:{
                src:'img/js.webp',
                alt: 'JS',
                href: '#',
                name: 'JavaScript',
                progress: '3',
            },
            typescript:{
                src:'img/Typescript.svg',
                alt: 'typescript',
                href: '#',
                name: 'Typescript',
                progress: '0',
            },
            php:{
                src:'img/PHP.png',
                alt: 'PHP',
                href: '#',
                name: 'PHP',
                progress: '0',
            },
            wordpress:{
                src:'img/wordpress.png',
                alt: 'wordpress',
                href: '#',
                name: 'Wordpress',
                progress: '2',
            },
            woocomerce:{
                src:'img/WooCommerce.png',
                alt: 'WooCommerce',
                href: '#',
                name: 'WooCommerce',
                progress: '0',
            },
            reactPress:{
                src:'img/react-press.png',
                alt: 'react-press',
                href: '#',
                name: 'ReactPress',
                progress: '0',
            },
            larawel:{
                src:'img/Laravel.png',
                alt: 'larawel',
                href: '#',
                name: 'Larawel',
                progress: '0',
            },
            mySql:{
                src:'img/MySQL.png',
                alt: 'mysql',
                href: '#',
                name: 'MySql',
                progress: '1',
            },
            polisk:{
                src:'img/polish.png',
                alt: 'polisk',
                href: '#',
                name: 'Польский',
                progress: '3',
            },
            desinger:{
                src:'img/none.png',
                alt: 'desinger',
                href: '#',
                name: 'Дизайн',
                progress: '0',
            },
            seo:{
                src:'img/seo.webp',
                alt: 'seo',
                href: '#',
                name: 'SEO',
                progress: '1',
            },
            smm:{
                src:'img/SMM.webp',
                alt: 'smm',
                href: '#',
                name: 'SMM',
                progress: '1',
            },
            vue:{
                src:'img/Vue.png',
                alt: 'Vue',
                href: '#',
                name: 'Vue',
                progress: '0',
            },
            angular:{
                src:'img/Angular.png',
                alt: 'angular',
                href: '#',
                name: 'Angular',
                progress: '0',
            },
        }
    },
    user:{
        img: 'img/User.jfif',
        alt: 'userAvatar',
        name: 'Виталий Гудович',
        age: '28лет (8 октября 1995)',
        portfolio: 'Отсутствует', 
    },
    plan:{
        stybyPlan: [
            'Реакт', 
            '</br> Пройти курс IT Камасутра', 
            '</br> Освоить документацию реакт', 
            '</br> Cделать 3 простых макета на реакт', 
            '</br> Сделать сложный проект для портфолио',
        ]
    },
    question:{
        junior:[
            'Какие методы HTTP-запросов вы знаете?',
            'Какие версии HTTP-протокола вам известны?',
            'Какие знаете коды ответа (состояния) HTTP?',
            'Что такое Cross-Origin Resource Sharing? Как устранить проблемы с CORS?',
            'Что такое cookie?',
            'Какой максимальный размер cookie?',
            'Что означает директива use strict?',
            'Чем JS отличается при работе на front-end и back-end?',
            'Что такое статическая и динамическая типизации?',
            'Как клиент взаимодействует с сервером?',
            'Что такое REST?',
            'Объяснить понятие мутабельность/иммутабельность? Какие типы являются мутабельными и наоборот?',
            'Как искать ошибки в коде? Используете ли вы дебаггер?',
            'Какие существуют типы данных в JS?',
            'Как проверить, является ли объект массивом?',
            'Как проверить, является ли число конечным?',
            'Как проверить, что переменная равна NaN?',
            'Чем отличается поведение isNaN() и Number.isNaN()?',
            'Сравните ключевые слова var, let, const.',
            'Что такое область видимости?',
            'Что такое деструктуризация?',
            'Для чего предназначены методы setTimeout и setInterval?',
            'Сравните подходы работы с асинхронным кодом: сallbacks vs promises vs async / await',
            'Можно ли записывать новые свойства / функции в прототипы стандартных классов (Array, Object и т. д.)? Почему нет? В каких случаях это делать можно? Как обезопасить себя, если нужно расширить прототип?',
            'Назовите методы массивов, какие помните, и скажите, для чего они нужны.',
            'Какие методы перебора массива знаете? В чем их отличие?',
            'Как работают операторы присваивания / сравнения / строчные / арифметические / битовые и т. д.?',
            'Опишите назначение и принципы работы с коллекциями Map и Set.',
            'Что означает глубокая (deep) и поверхностная (shallow) копия объекта? Как сделать каждую из них?',
            'Какая разница между декларацией функции (function declaration) и функциональным выражением (function expression)?',
            'Что такое анонимная функция?',
            'Расскажите о стрелочных функциях (arrow function). В чем заключаются отличия стрелочных функций от обычных?',
            'Что такое и для чего используют IIFE (Immediately Invoked Function Expression)?',
            'Что такое hoisting, как он работает для переменных и функций?',
            'Что такое замыкание (closure) и какие сценарии его использования?',
            "Как вы понимаете замыкания? Что будет выведено в консоли в этом случае? < /br> var f = function() {< /br>console.log(1); < /br>}< /br>var execute = function(f) { < /br> setTimeout(f, 1000);< /br>} < /br> execute(f); // что выведет в консоль и почему < /br>f = function() { < /br>console.log(2); < /br>}",
            'Что такое рекурсия?',
            'Что означает ключевое слово this?',
            'Что такое потеря контекста, когда происходит и как ее предотвратить?',
            'Методы функций bind / call / apply - зачем и в чем разница?',
            'Что такое DOM?',
            'Сравните атрибуты подключения скрипта async и defer в HTML-документе.',
            'Какая разница между свойствами HTML-элементов innerHTML и innerText?',
            'Опишите процесс всплытия (bubbling) событий в DOM.',
            'Как остановить всплытие (bubbling) события?',
            'Как остановить дефолтную обработку события?',
            'Чему равен this в обработчике событий (event handler)?',
            'Что такое LocalStorage и SessionStorage? Какой максимальный размер LocalStorage?',
            'Как получить высоту блока? Его положение относительно границ документа?',
            'Что такое webpack?',
            'Чем отличается dev-сборник от prod?',
            'Что такое блочная модель CSS?',
            'Какие способы центрирования блочного контента по горизонтали и вертикали знаете?',
            'Какие подходы в верстке вам известны (float, flex, grid, etc.)?',
            'Как сделать приложение responsive?',
            'Какие есть принципы семантической верстки?',
            'Зачем нужны префиксы для некоторых CSS-свойств (-webkit-, -moz- и т. д.)?',
            'Как упростить написание кросс-браузерных стилей?',
            'Практические задачи: прокомментировать и исправить пример плохого CSS или HTML.',
            'Что такое CSS-препроцессоры? С какими работали? Что нового они приносят в стандартный CSS?',
            'React  Работали ли вы с классовыми компонентами? В чем их особенность?',
            'React Какие данные лучше хранить в состоянии компонента, а какие передавать через пропсы? Приведите пример.',
            'React Ознакомлены ли вы с хуками? В чем их преимущества? Приходилось ли делать свои и с какой целью?',
            'React Знакомы ли вы с фрагментами и порталами? Зачем они нужны?',
            'React Когда и для чего используют рефы?',
            'React Какие вы знаете методы жизненного цикла компонента?',
            'React В каком методе жизненного цикла компонента лучше делать запросы на сервер? Почему?',
            'React В каком методе жизненного цикла компонента лучше делать подписку и отписку от листенера? Почему? Зачем отписываться?',
            'React Был ли опыт работы с контекстом? Когда его стоит использовать?',
            'React В чем особенность PureComponent?',
            'React Работали ли вы с мемоизоваными селекторами (memoized selectors)? Для чего их используют и какой принцип работы?',
            'React В чем видите преимущества библиотеки React?',
            'React Почему библиотека React быстрая? Что такое Virtual DOM и Shadow DOM?',
            'React Зачем в списках ключи? Можно ли делать ключами индексы элементов массива? Когда это оправдано?',
            'React В чем основная идея Redux?',
            'React Работа со стилями в React.',
            'React React - это библиотека или фреймворк? Какая разница между этими двумя понятиями.',
            'React Можно ли использовать jQuery вместе с React? Почему да / нет?',
            'React Что такое codemod?',
            'React Приходилось ли вам настраивать проект React с нуля? С помощью каких инструментов вы это делали?',
            'React Перечислите все библиотеки, которые использовали в связке с React.',
            'React Что самое сложное вам приходилось реализовывать с помощью React?',
        ],
        mid:[],
        senior:[],
    }
}


function createrSrc (state, alt, box, href){
    let elem = document.querySelector(box);
    elem.setAttribute('src', state);
    elem.setAttribute('alt', alt);
    if(elem.hasAttribute('href')){
        elem.setAttribute('href', href);
    }
}

createrSrc(state.user.img, state.user.alt, '.user_img>img');

function creator (box, state){
    let elem = document.querySelector(box);
    elem.innerHTML = state;
}
creator('.write', state.button);
creator('.infobox_box_item>h1', state.user.name);
creator('.age', state.user.age);
creator('.porfolio', state.user.portfolio);
//creator('.styby_plan', state.plan.stybyPlan.join(''));

function skill(elem){
    let skills = document.querySelector('.skills');
    let itemSkill = document.createElement('a');
    itemSkill.setAttribute('class', 'skills_item');
    itemSkill.setAttribute('href', elem.href);
    let like = (e) => {
        let likes = []
        for(let q=0; q<e; q++){
            likes.push(`<img src="img/like.png">`);
        }
        return likes.join('');
    }
    itemSkill.innerHTML = (
        `<img src='${elem.src}'alt='${elem.alt}'>
        <div class="name_box">
        <div class="like">${like(elem.progress)}</div>
        <div class='name'>${elem.name}</div>`
    );
    skills.appendChild(itemSkill);
}

skill(state.skills.skillsGo.html);
skill(state.skills.skillsGo.css);
skill(state.skills.skillsGo.flex);
skill(state.skills.skillsGo.scss);
skill(state.skills.skillsGo.greed);
skill(state.skills.skillsGo.js);
skill(state.skills.skillsGo.react);
skill(state.skills.skillsGo.redux);
skill(state.skills.skillsGo.git);
skill(state.skills.skillsGo.typescript);
skill(state.skills.skillsGo.vue);
skill(state.skills.skillsGo.angular);
skill(state.skills.skillsGo.php);
skill(state.skills.skillsGo.wordpress);
skill(state.skills.skillsGo.woocomerce);
skill(state.skills.skillsGo.reactPress);
skill(state.skills.skillsGo.larawel);
skill(state.skills.skillsGo.mySql);
skill(state.skills.skillsGo.desinger);
skill(state.skills.skillsGo.seo);
skill(state.skills.skillsGo.smm);
skill(state.skills.skillsGo.english);
//skill(state.skills.skillsGo.polisk);

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  }
function quest(min, max, state){
    let questionTest = document.querySelector('.question');
    let number = getRandomInt(min, max);

    questionTest.innerHTML = state[number];
    console.log(number);

}
quest(0, state.question.junior.length, state.question.junior);
