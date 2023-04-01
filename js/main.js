// adapted from https://www.geeksforgeeks.org/how-to-use-the-javascript-fetch-api-to-get-data/#
const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Boston`;
 
async function getapi(url) {
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    show(data);
}
getapi(url);

function show(data) {
    let tab = 
        `<ul>Current Weather:</ul>`;
        tab += ` 
    <li class="list-group-item list-group-item-success">Temp/Feels Like (C): ${data.current.temp_c}/${data.current.feelslike_c}</li>
    <li class="list-group-item list-group-item-success">Temp/Feels Like (F): ${data.current.temp_f}/${data.current.feelslike_f}</li>
    <li class="list-group-item list-group-item-success">Conditions: ${data.current.condition.text}</li>
    `;
    // Setting innerHTML as tab variable
    document.getElementById("234").innerHTML = tab;
}
