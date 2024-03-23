const getWeather=async(city)=>{
        cityname.innerHTML=city;
        const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
        const options = 
        {
	        method: 'GET',
	        headers: {
		        'X-RapidAPI-Key': '887ce6e589mshc69a472a23b0fbdp123a8fjsn441e96229141',
		        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	    }
};
const response = await fetch(url, options);
const result = await response.json();
const sunsetTimestamp = result.sunset;
const sunsetDate = new Date(sunsetTimestamp * 1000);
const sunsetTime = sunsetDate.toLocaleTimeString();
const sunriseTimestamp = result.sunrise;
const sunriseDate = new Date(sunriseTimestamp * 1000);
const sunriseTime = sunriseDate.toLocaleTimeString();
cloud_pct.innerHTML = result.cloud_pct
temp.innerHTML = result.temp
feels_like.innerHTML  = result.feels_like
humidity.innerHTML  = result.humidity
min_temp.innerHTML  = result.min_temp
max_temp.innerHTML  = result.max_temp
wind_speed.innerHTML  = result.wind_speed
sunrise.innerHTML  = sunriseTime
sunset.innerHTML =sunsetTime
} 


submit.addEventListener('click',(e)=>{
    e.preventDefault();
    getWeather(city.value);
})
let chandigarh=document.getElementById('chandigarh');
chandigarh.addEventListener('click', (e) => {
    e.preventDefault();
    getWeather('Chandigarh');
});
let jaipur=document.getElementById('jaipur');
jaipur.addEventListener('click', (e) => {
    e.preventDefault();
    getWeather('Jaipur');
});
let hyderabad=document.getElementById('hyderabad');
hyderabad.addEventListener('click', (e) => {
    e.preventDefault();
    getWeather('Hyderabad');
});
let pune=document.getElementById('pune');
pune.addEventListener('click', (e) => {
    e.preventDefault();
    getWeather('Pune');
});
let surat=document.getElementById('surat');
surat.addEventListener('click', (e) => {
    e.preventDefault();
    getWeather('Surat');
});
let delhi=document.getElementById('delhi');
delhi.addEventListener('click', (e) => {
    e.preventDefault();
    getWeather('Delhi');
});
let mumbai=document.getElementById('mumbai');
mumbai.addEventListener('click', (e) => {
    e.preventDefault();
    getWeather('Mumbai');
});
let chennai=document.getElementById('chennai');
chennai.addEventListener('click', (e) => {
    e.preventDefault();
    getWeather('Chennai');
});
let kolkata=document.getElementById('kolkata');
kolkata.addEventListener('click', (e) => {
    e.preventDefault();
    getWeather('Kolkata');
});
let bangalore=document.getElementById('bangalore');
bangalore.addEventListener('click', (e) => {
    e.preventDefault();
    getWeather('Bangalore');
});
getWeather('Delhi');