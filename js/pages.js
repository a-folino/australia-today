let category = document.querySelector('#category').textContent;
let url = `https://newsapi.org/v2/top-headlines?country=au&category=${category}&apiKey=009db9260af14ff79daccf056563e7ba`;

///// ARTICLES
const fetchNews = async () => {
    const response = await fetch(url);
    const data = await response.json();
    return newsArticles(data);
}

fetchNews();

const newsArticles = (data) => {
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
        img.src = piece.urlToImage;
        img.alt = 'Image failed to load (API issue)';
        img.placeholder = "";
        a.href = piece.url;

        a.append(articleTitle, desc);
        div.append(img, a);
        fragment.append(div);
        latest.append(fragment);
    })
}