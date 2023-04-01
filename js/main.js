const button = document.getElementById("123")
button.addEventListener('click', event => {
    const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Boston`;
});