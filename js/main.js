// getapi() and show() functions adapted from https://www.geeksforgeeks.org/how-to-use-the-javascript-fetch-api-to-get-data/#
 
async function getapi(url) {
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    show(data);
}

function show(data) {
    let weather = 
        `<ul>Current Weather:</ul>`;
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
    let weatherCity = event.target.weatherCity.value;
    console.log(weatherCity);
    const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${weatherCity}`;
    getapi(url);
    event.target.weatherCity.value = '';
}
            