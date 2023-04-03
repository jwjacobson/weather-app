// getapi() and show() functions adapted from https://www.geeksforgeeks.org/how-to-use-the-javascript-fetch-api-to-get-data/#
 
async function getapi(url) {
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    show(data);
}

function show(data) {
    let weather = 
        `<ul class="mx-auto">Current Weather in ${data.location.name}<br> (as of ${data.current.last_updated} local time):</ul>`;
        weather += ` 
    <li class="list-group-item list-group-item-danger">Temp/Feels Like (C): ${data.current.temp_c}/${data.current.feelslike_c}</li>
    <li class="list-group-item list-group-item-success">Temp/Feels Like (F): ${data.current.temp_f}/${data.current.feelslike_f}</li>
    <li class="list-group-item list-group-item-warning">Conditions: ${data.current.condition.text}</li>
    `;
    // Setting innerHTML as tab variable
    document.getElementById("cityWeather").innerHTML = weather;
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
   
const select = document.getElementById('tempSelection');

select.addEventListener('click', ({ target }) => { // handler fires on root container click
  if (target.getAttribute('name') === 'option_gender') { // check if user clicks right element
    alert('Filter by: ' + target.value);
  }
});


// let radioC = document.getElementById('celsius');
// form.addEventListener('option1', setCelsius);

// let radioF = document.getElementById('fahrenheit');
// form.addEventListener('option2', setFahrenheit);

// async function setCelsius(event){
//     var celsius = true;
// }

// async function setFahrenheit(event){
//   var fahrenheit = true;
// }
