let weatherData = {};
let weatherIcon = document.querySelector('.img-temp');
async function getWeatherData(location){
  const apiKey = "a6465cb74727863ed5577f7efc4f73b9";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
  try{
    const response = await fetch(url);
    const data = await response.json();
    weatherData = {
      temperature: data.main.temp,
      condition: data.weather[0].main,
      area: data.name,
      wind: data.wind.speed,
      humidity: data.main.humidity,
      visibility: data.visibility,
      icon:data.weather.icon
    };
    console.log(data)
  
    updateUI();
    return weatherData;
  } catch(error){
    throw error;
  }
}

function updateUI(){
 
  document.querySelector('.temperature').innerText = Math.round(weatherData.temperature);
  document.querySelector('#uv-index').innerText = '5';
  document.querySelector('#wind').innerText = weatherData.wind;
  document.querySelector('#humidity').innerText = weatherData.humidity;
  document.querySelector('#visibility').innerText = weatherData.visibility;
  switch(weatherData.condition){
    case 'Clouds':
      weatherIcon.src = 'images/clouds.png';
      break;
    case 'Sunny':
      weatherIcon.src = 'images/sunny.png';
      break;
    case 'Rain':
      weatherIcon.src = 'images/rainy-day.png';
      break;
    case "Winds":
      weatherIcon.src = 'images/windy.png';
    default:
      return weatherIcon.src = 'images/cloudy.png';
  }
}

function searchLocation(){
  const btnSubmit = document.getElementById('btn-submit');
  btnSubmit.addEventListener("click",async function(){
    const locID = document.getElementById('location').value; 
    await getWeatherData(locID);
  })
}
searchLocation();

