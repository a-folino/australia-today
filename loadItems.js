const latest = document.querySelector('.latest');
const preview = document.querySelector('.preview');
const loadButton = document.querySelector('.load');

fetch('https://gnews.io/api/v4/top-headlines?topic=nation&country=au&token=a84710da9e8570a64d7ca66d2e847d44')
.then(data => data.json())
.then(response => newsArticles(response))

// fetch('https://gnews.io/api/v4/top-headlines?topic=breaking-news&country=au&token=a84710da9e8570a64d7ca66d2e847d44')
// .then(data => data.json())
// .then(response => covidArticles(response))


function newsArticles(data) {
  const article = data.articles[0];
  const h2 = document.createElement('h2');
  const p = document.createElement('p');
  const div = document.createElement('div');
  const span = document.createElement('span');
  const img = document.createElement('img');
  const a = document.createElement('a');

  div.className = "latest-item";
  div.id = "latest-1"
  a.href = article.url;
  img.id = 'first-img';
  img.src = article.image;
  span.className = "overlay";
  h2.textContent = article.title;
  p.textContent = article.description;
  p.id = "one-p";

  latest.append(a);
  a.append(div);
  div.append(img);
  div.append(span);
  span.append(h2);
  span.append(p);


  for (i = 1; i < 10; i++) {
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const div = document.createElement('div');
    const div2 = document.createElement('div');
    const img = document.createElement('img');
    const a = document.createElement('a');
    const a2 = document.createElement('a');
    const picContainer = document.createElement('div');
    const span = document.createElement('span');
    const article = data.articles[i];

    img.src = article.image;
    img.alt = "Image failed to load.";
    img.className = 'pics';
    a.href = article.url;
    a2.href = article.url;
    
    h3.textContent = article.title;
    p.textContent = article.description;
    div.className = 'latest-item';
    div2.className = 'preview';
    picContainer.className ='pic-container';
    span.className = "overlay";

    latest.append(div);
    div.append(picContainer);
    picContainer.append(span);
    picContainer.append(a2);
    
    div.append(div2);
    a2.append(img);
    div.append(div2);
    div2.append(a)
    a.append(h3);
    div2.append(p);
  }

}




// function covidArticles(data) {

//   for (i = 0; i < 10; i++) {
//     const h3 = document.createElement('h3');
//     const p = document.createElement('p');
//     const div = document.createElement('div');
//     const div2 = document.createElement('div');
//     const img = document.createElement('img');
//     const a = document.createElement('a');
//     const a2 = document.createElement('a');
//     const picContainer = document.createElement('div');
//     const article = data.articles[i];

//     img.src = `${article.image}`;
//     img.className = 'pics'
//     a.href = article.url;
//     a2.href = article.url;
    
//     h3.textContent = article.title;
//     p.textContent = `${article.description}`;
//     div.className = "featured-item";
//     div2.className = 'preview';
//     picContainer.className ='pic-container';
//     featured.append(div);
//     div.append(picContainer);
//     picContainer.append(a2);
    
//     div.append(div2);
//     a2.append(img);
//     div.append(div2);
//     div2.append(a)
//     a.append(h3);
//     div2.append(p);
//     console.log(a);  
//   }

// }
