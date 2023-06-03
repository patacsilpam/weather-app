async function getWeatherData(location){
  const apiKey = "a6465cb74727863ed5577f7efc4f73b9";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
  try{
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch(error){
    console.log("error")
    throw error
  }
}
getWeatherData('Laoac');