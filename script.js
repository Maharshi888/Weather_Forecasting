/*const apikey = "3ec56f93e9e4054f49bce9302628ed38";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search-bar input");
const searchbtn = document.querySelector(".search-bar button");
const weatherIcon=document.querySelector(".weather-icon");
async function checkWeather(city) {
    const response = await fetch(apiURL + city + `&appid=3ec56f93e9e4054f49bce9302628ed38`);
    const data = await response.json();
    console.log(data);

  document.querySelector(".value").innerHTML = data.main.temp + "°C";
  document.querySelector(".value_speed").innerHTML = data.wind.speed + " Mph";
  document.querySelector(".subtext").innerHTML = data.weather[0].main;
  if(data.weather[0].main =="Clouds"){
    weatherIcon.src ="images/clouds.png";
}
else if(data.weather[0].main =="Clear"){
    weatherIcon.src ="images/clear.png";
}
else if(data.weather[0].main =="Rain"){
    weatherIcon.src ="images/rain.png";
}
else if(data.weather[0].main =="Drizzle"){
    weatherIcon.src ="images/drizzle.png";
}
else if(data.weather[0].main =="Mist"){
    weatherIcon.src ="images/mist.png";
}
searchbtn.addEventListener("click", () => {
  checkWeather(searchbox.value);
})
}
*/


//+city+`&appid=$(apikey)/*
/*const apikey ="3ec56f93e9e4054f49bce9302628ed38";
const apiURL ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox= document.querySelector(".search-bar input");
const searchbtn= document.querySelector(".search-bar button");


async function checkweather(city){
    const response = await fetch(apiURL+city+`appid=3ec56f93e9e4054f49bce9302628ed38`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".value").innerHtml=data.main.temp;
    document.querySelector(".value_speed").innerHTML=data.wind.speed;
    document.querySelector(".subtext").innerHTML=data.weather[0].main;
}
searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.Value);
})*/

const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search-bar input");
const searchbtn = document.querySelector(".search-bar button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiURL + city + `&appid=${apikey}`);
  const data = await response.json();
  console.log(data);

  document.querySelector(".value").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".value_speed").innerHTML = data.wind.speed + " KM/h";
  document.querySelector(".subtext").innerHTML = data.weather[0].main;

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "images/mist.png";
  } else {
    weatherIcon.src = "images/default.png"; // fallback if none match
  }
}

// ✅ move the event listener OUTSIDE the function
searchbtn.addEventListener("click", () => {
  checkWeather(searchbox.value);
});
