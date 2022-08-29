///// LATEST ARTICLES
const fetchLatest = async () => {
    const response = await fetch('https://gnews.io/api/v4/top-headlines?topic=breaking-news&country=au&token=a84710da9e8570a64d7ca66d2e847d44');
    const data = await response.json();
    return latestArticles(data);
}

const latestArticles = data => {
    let arr = [...data.articles];

    arr.forEach(piece => {
        const fragment = new DocumentFragment();
        const latest = document.querySelector('#latest');
        const div = document.createElement('div');
        const articleTitle = document.createElement('h3');
        const desc = document.createElement('p');
        const img = document.createElement('img');
        const a = document.createElement('a');

        div.className = 'latest-article';
        articleTitle.innerHTML = piece.title;
        desc.innerHTML = piece.description;
        img.src = piece.image;
        a.href = piece.url;

        a.append(articleTitle, desc);
        div.append(img, a);
        fragment.append(div);
        latest.append(fragment);
    })
}

fetchLatest();

///// FEATURED ARTICLES
const fetchFeatured = async () => {
    const response = await fetch('https://gnews.io/api/v4/top-headlines?topic=nation&country=au&token=a84710da9e8570a64d7ca66d2e847d44');
    const data = await response.json();
    return featuredArticles(data);
}

const featuredArticles = data => {
    let arr = [...data.articles];

    arr.forEach(piece => {
        const fragment = new DocumentFragment();
        const latest = document.querySelector('#featured');
        const div = document.createElement('div');
        const articleTitle = document.createElement('h3');
        const desc = document.createElement('p');
        const img = document.createElement('img');
        const a = document.createElement('a');

        div.className = 'featured-article';
        articleTitle.innerHTML = piece.title;
        desc.innerHTML = piece.description;
        img.src = piece.image;
        a.href = piece.url;

        a.append(articleTitle, desc);
        div.append(img, a);
        fragment.append(div);
        latest.append(fragment);
    })
}

fetchFeatured();

///// WEATHER
const select = document.querySelector('select');
const up = document.querySelector('#up');
const down = document.querySelector('#down');
const thoughts = document.querySelector('.thoughts');
let weatherURL = 'https://api.openweathermap.org/data/2.5/weather?q=melbourne,04,au&appid=9535a769928a3be0f501ccfd33d23368&units=metric';
let display = document.querySelector('.weather');

const getWeather = async () => {
    const response = await fetch(weatherURL);
    const data = await response.json();
    return weather(data);
}

const weather = data => {
    const number = Math.round(data.main.temp * 10) / 10;
    const capitals = data.weather[0].description.toUpperCase();
    display.innerHTML = `<img src=" http://openweathermap.org/img/wn/${data.weather[0].icon}.png">Currently ${number}C</br> ${capitals}`;
}

select.addEventListener('change', () => {
    weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${select.value},04,au&appid=9535a769928a3be0f501ccfd33d23368&units=metric`;
    getWeather();
})

getWeather();

///// THOUGHTS
let personNumber = 0;
let fetchResponse = {};

fetch('thoughts.json')
.then(response => response.json())
.then(data => {fetchResponse = data});

function thoughtsScroll(data, value) {
    let person = ` 
        <h4>${data.name[value]}</h4> 
        <i>${data.desc[value]}</i> 
        <br> 
        <p>"${data.opinion[value]}"</p>`;
    
    if (value = undefined) {
        value = 0;
    }
    
    thoughts.innerHTML = person;
}

setTimeout(() => thoughtsScroll(fetchResponse, personNumber), 800);

up.addEventListener('click', () => {
    if (personNumber != 5) {
        personNumber++;
        thoughtsScroll(fetchResponse, personNumber);
        down.style.opacity = '1';
    } else {
        up.style.opacity = '.4';
    }
});

down.addEventListener('click', () => {
    if (personNumber > 0) {
        personNumber--;
        thoughtsScroll(fetchResponse, personNumber);
        up.style.opacity = '1';
        
    } else {
        down.style.opacity = '.4';
    }
});


