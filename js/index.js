const SubmitBtn = document.getElementById('submitBtn');      //// Submit is called to run
const cityName = document.getElementById('cityName');        //// For real city name
const city_name = document.getElementById('city_name2')     //// For the error city name
const temp = document.getElementById('temp');               //// Showing temp in degrees
const temp_sts = document.getElementById('temp_status');    //// Showing figures


const getInfo = async(event)=>{
    event.preventDefault();   //// To not refresh the page again and again
    let cityVal = cityName.value;
    if(cityVal === ""){
        city_name.innerHTML = `Please write the city properly`;
    }
    else{
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=a9db4690e6e1873ead2582eaa6330ec7`;
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            const arrData = [data];
            city_name.innerHTML = arrData[0].name;
            // city_name.innerHTML = `${arrData[0].name}, ${arrData[0].sys.country}';
            temp.innerHTML = arrData[0].main.temp;
            
            
            // temp_sts.innerHTML = arrData[0].weather[0].main;
            const temp_mood = arrData[0].weather[0].main;

            if(temp_mood === "Clouds"){
                temp_sts.innerHTML = "☁️";
            }else if(temp_mood === "Clear"){
                temp_sts.innerHTML = " 🌥️";
            }else if(temp_mood === "Rain"){
                temp_sts.innerHTML = "🌧️";
            }else{
                temp_sts.innerHTML = " ☀️";
            }


        }
        catch{
            city_name.innerHTML = 'Please Enter The City Properly';
        }
    }
}


SubmitBtn.addEventListener('click',getInfo);










// setting the date years dynamically 
const day = document.getElementById('day');
let date = document.getElementById('today_date');

const week_days = [
    "Sun","Mon","Tue","Wed","Thu","Fri","Sat"
]

let d_a_y = new Date();
// date.innerHTML = d_a_y.toLocaleTimeString();
day.innerHTML = week_days[d_a_y.getDay()];


const update_time = () =>{
    date.innerHTML = new Date().toLocaleTimeString();
}

setInterval(update_time,1000);