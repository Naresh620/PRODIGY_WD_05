document.getElementById('weather-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const location = document.getElementById('location').value;
    const apiKey = '55b700d8295e7de0fb417f7c5c97f2e5'; // Replace with your weather API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('location-name').innerText = data.name;
                document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
                document.getElementById('condition').innerText = `Condition: ${data.weather[0].description}`;
                document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
                document.getElementById('wind-speed').innerText = `Wind Speed: ${data.wind.speed} m/s`;
            } else {
                alert('Location not found');
            }
        })
        .catch(error => console.error('Error:', error));
});
