const posts = [
    {
        images:['images/Computer-Screen-Download-Free-PNG 1.png'],
        title: 'Названия',
        description: 'описания',
        category: 'category',
        button: 'ссылка',
        btnClass: 'btn_blue',
    },
    {
        images:['images/Computer-Screen-Download-Free-PNG 1.png',''],
        title: 'Названия2',
        description: 'описания',
        category: 'category',
        button: 'ссылка',
        btnClass: 'btn_gold',
    },
    {
        images:['images/Computer-Screen-Download-Free-PNG 1.png',''],
        title: 'Названия3',
        description: 'описания',
        category: 'category',
        button: 'ссылка',
        btnClass: 'btn_green',
    }
]



let wrapper = document.querySelector(".portfolio>.size>.wrapper");
let arrPostsHtml = [] 
for(let i = 0; i<posts.length; i++){
    arrPostsHtml.push(`
    <div class="item">
        <img src="${posts[i].images[0]}" alt="${posts[i].title}">
        <h1 class="title">${posts[i].title}</h1>
        <p class="cat">${posts[i].category}</p>
        <button class="btn ${posts[i].btnClass}" onclick="clickSound()">WIĘCEJ</button>
    </div>
    `)
}
for(let i = 0; i<posts.length; i++){
    wrapper.innerHTML += arrPostsHtml[i];
}