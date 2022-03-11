const navbar = document.querySelector('.nav-bar');
const sticky = navbar.offsetTop;
const thoughts = document.querySelector('.thoughts');
const up = document.querySelector('#up');
const down = document.querySelector('#down');
const weatherTab = document.querySelector('.load-weather');
let url = 'https://api.openweathermap.org/data/2.5/weather?q=melbourne,04,au&appid=9535a769928a3be0f501ccfd33d23368&units=metric';
const select = document.querySelector('select');

// Fix glitchy feel on home page
// function navScroll() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }
// window.onscroll = function() {navScroll()};

function getWeather() {
  fetch(url)
  .then(response => response.json())
  .then(data => weather(data))
  .catch(err => weatherTab.textContent = 'Out of Service :(');
}

document.addEventListener('load', getWeather());

function weather(data) {
  const number = data.main.temp;
  const rounded = Math.round(number * 10) / 10;
  const capitals = data.weather[0].description.toUpperCase();
  weatherTab.innerHTML = `Currently ${rounded}C, ${capitals}`;

}

select.addEventListener('change', () => {
  url = `https://api.openweathermap.org/data/2.5/weather?q=${select.value},04,au&appid=9535a769928a3be0f501ccfd33d23368&units=metric`;
  getWeather();

})

const opinions = [
  {
    name: 'Trent McKenzie',
    job: 'Carpenter from Eltham',
    opinion: "Cyclists should have to pay rego like the rest of us!",
    photo: ''
  },
  {
    name: 'Michelle Peters',
    job: 'Eyelash Technician from Epping',
    opinion: 'What do you mean I have to pay taxes for my Instagram business? This is not right.',
    photo: ''
  },
  {
    name: 'Alan Michaels',
    job: 'Real Estate Agent from Oakleigh',
    opinion:"The weather has ruined our auctions, unbelievable! #thatsmelbourne",
    photo: ''
  },
  {
    name: 'Pasquale Caraccio',
    job: 'Fruiterer from Brunswick',
    opinion: "The fruit industry isn't what it used to be, no one pays cash now!",
    photo: ''
  },
  {
    name: 'Belle Wang',
    job: 'Student from Preston',
    opinion: "Come on Dan let us back on the dancefloor!!",
    photo: ''
  }
];


let person = opinions;

let person1 = ` 
  <h4>${person[0].name}</h4> 
  
  <p>${person[0].job}</p> 
  <br> 
  <p>"${person[0].opinion}"</p>`;

let person2 = ` 
  <h4>${person[1].name}</h4> 
  
  <p>${person[1].job}</p>
  <br> 
  <p>"${person[1].opinion}"</p>`;

let person3 = ` 
  <h4>${person[2].name}</h4> 
  
  <p>${person[2].job}</p>
  <br> 
  <p>"${person[2].opinion}"</p>`;

let person4 = ` 
  <h4>${person[3].name}</h4> 
  
  <p>${person[3].job}</p>
  <br> 
  <p>"${person[3].opinion}"</p>`;

let person5 = ` 
  <h4>${person[4].name}</h4> 
  
  <p>${person[4].job}</p>
  <br> 
  <p>"${person[4].opinion}"</p>`;


function thoughtsScroll() {
    thoughts.innerHTML = person1; 
}

thoughtsScroll();

up.addEventListener('click', () => {
  if (thoughts.innerHTML === person1) {
    thoughts.innerHTML = person2;
  } else if (thoughts.innerHTML === person2) {
    thoughts.innerHTML = person3;
  } else if (thoughts.innerHTML === person3) {
    thoughts.innerHTML = person4;
  } else if (thoughts.innerHTML === person4) {
    thoughts.innerHTML = person5;
  } else if (thoughts.innerHTML === person5) {
    thoughts.innerHTML = person1;
  }
})

down.addEventListener('click', () => {
  if (thoughts.innerHTML === person1) {
    thoughts.innerHTML = person5;
  } else if (thoughts.innerHTML === person5) {
    thoughts.innerHTML = person4;
  } else if (thoughts.innerHTML === person4) {
    thoughts.innerHTML = person3;
  } else if (thoughts.innerHTML === person3) {
    thoughts.innerHTML = person2;
  } else if (thoughts.innerHTML === person2) {
    thoughts.innerHTML = person1;
  }
  
});


