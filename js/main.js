// radio button event listener adapted from https://stackoverflow.com/questions/49097300/add-event-listener-for-click-change-on-bootstrap-radio-buttons

// temp is declared globally so the show() function below can use it
var temp;

// select the div containing the radio buttons
const select = document.getElementById('tempSelection');

// the value of the radio button selected is set as the value of temp, which determines which temperature format to show
select.addEventListener('click', ({ target }) => { 
  if (target.getAttribute('name') === 'tempFormat') { 
    temp = target.getAttribute('value');
  }
});

// getapi() and show() functions adapted from https://www.geeksforgeeks.org/how-to-use-the-javascript-fetch-api-to-get-data/#

async function getapi(url) {
    const response = await fetch(url);
    var data = await response.json();
    show(data);
}

function show(data) {
  // give the user a warning if they haven't selected fahrenheit or celsius
    if (temp === undefined){
      alert('Please select a temperature format.');
    } else {
    let weather = 
        `<ul class="mx-auto"><h5 class="text text-info-emphasis">Current Weather in ${data.location.name}<br> (as of ${data.current.last_updated} local time)</h5></ul>`;
    if (temp == "Celsius"){
      weather += `
      <li class="list-group-item list-group-item-danger text text-info-emphasis">Temperature: ${data.current.temp_c}</li>`;
      weather +=
      `<li class="list-group-item list-group-item-success text text-info-emphasis">Feels like: ${data.current.feelslike_c}</li>`;
    } else {
      weather += `
    <li class="list-group-item list-group-item-danger text text-info-emphasis">Temperature: ${data.current.temp_f}</li>`;
      weather += `
    <li class="list-group-item list-group-item-success text text-info-emphasis">Feels like: ${data.current.feelslike_f}</li>`;
    }
      weather += `
    <li class="list-group-item list-group-item-warning text text-info-emphasis">Conditions: ${data.current.condition.text}</li>
    `;
    // making border appear adapted from https://stackoverflow.com/questions/66680001/change-bootstrap-div-border-color-with-javascript
    document.getElementById("cityWeather").setAttribute('style', 'border: 1px solid green');
    document.getElementById("cityWeather").innerHTML = weather;
}
}

let form = document.getElementById('weatherForm');
form.addEventListener('submit', handleFormSubmit);

async function handleFormSubmit(event){
    event.preventDefault();
    var weatherCity = event.target.weatherCity.value;
    console.log(weatherCity);
    const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${weatherCity}`;
    getapi(url);
    event.target.weatherCity.value = '';
}
 