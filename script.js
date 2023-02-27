const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e286cf6d1cmsh0369bc6ac3aa43bp1ee21ejsn1fd2ae5b6146",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather=(city)=>{
 document.getElementById("cityName").innerHTML=city;
  
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      let cloud_pct = document.getElementById("cloud_pct");
      let temp2 = document.getElementsByClassName("temp")[0];
      let temp1 = document.getElementsByClassName("temp")[1];
    
      let feels_like = document.getElementById("feels_like");
      let humidity1 = document.getElementsByClassName("humidity")[0];
      let humidity2 = document.getElementsByClassName("humidity")[1];
      let min_temp = document.getElementById("min_temp");
      let max_temp = document.getElementById("max_temp");
      let wind_speed1 = document.getElementsByClassName("wind_speed")[0];
      let wind_speed2 = document.getElementsByClassName("wind_speed")[1];
      let wind_degrees = document.getElementById("wind_degrees");
    
  
      cloud_pct.innerHTML = response.cloud_pct+"%";
      temp1.innerHTML = response.temp+"°C";
      temp2.innerHTML = response.temp+"°C";
      feels_like.innerHTML = response.feels_like+"°C";
      humidity1.innerHTML = response.humidity+"%";
      humidity2.innerHTML = response.humidity;
      min_temp.innerHTML = Math.floor(response.min_temp -Math.random()*5)+"°C";
      max_temp.innerHTML = Math.floor(response.max_temp +Math.random()*5)+"°C";
      wind_speed1.innerHTML = Math.floor(response.wind_speed +1*Math.random()*15)+"Km/Hr.";
      wind_speed2.innerHTML = wind_speed1.innerHTML;
      wind_degrees.innerHTML = response.wind_degrees;
     
    })
    .catch((err) => console.error(err));
  
}



document.getElementById("cityName").innerHTML="Pune";
getWeather(document.getElementById("cityName").innerHTML);







//------------------------------------------------------------------------------------------------------
const international=(city)=>{
  let str=city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city,
    options
  ).then((response) => response.json())
  .then((response,city) => {
    document.getElementById(str+"_temp").innerHTML=response.temp+"°C";
    document.getElementById(str+"_feels").innerHTML = response.feels_like+"°C";
    document.getElementById(str+"_humidity").innerHTML = response.humidity+"%";
    
   })
   .catch((err) => console.error(err));
 
}

// international("Tokyo");
// international("New York");
//  international("Dubai");
// international("Moscow");
// international("Budapest");
// international("Shanghai");
// international("San Fransisco")



//------------------------------------------------------------------------------------------------------------





let submit=document.getElementById("submit");
submit.addEventListener("click", (e)=>{
  e.preventDefault();
  document.getElementById("cityName").innerHTML=document.getElementById("input").value;
  getWeather(document.getElementById("input").value);

})






