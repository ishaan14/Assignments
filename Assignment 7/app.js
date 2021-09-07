let text=document.querySelector("input");
let btn=document.getElementById("btn");
let weather=document.getElementById("weather");
let loc=document.getElementById("location");
let speed=document.getElementById("speed");
let temp=document.getElementById("temp");
let minmax=document.getElementById("minmax");
let time=document.getElementById("time");

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    getweather(text.value);
    text.value="";
});
function getweather(input){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=cc7b365cdf72c6b1736b020dc6c87432`)
    .then((result)=>{
        return result.json()
    })
    .then((data)=>{
        let txt=data.weather[0].description;
        weather.innerHTML=txt;
        if(txt.includes("haze"))
        {
        document.body.style.backgroundImage="url('https://media-cldnry.s-nbcnews.com/image/upload/newscms/2021_29/3492764/210720-new-york-haze-wildfires-ew-544p.jpg')";
        document.body.style.backgroundRepeat="no-repeat";
        document.body.style.backgroundSize="100vw 100vh";
        }
        else if(txt.includes("cloud"))
        {
        document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1598378028718-37a61e030860?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2NhdHRlcmVkJTIwY2xvdWRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";
        document.body.style.backgroundRepeat="no-repeat";
        document.body.style.backgroundSize="100vw 100vh";
        }
        else if(txt.includes("clear"))
        {
            document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1523913950023-c47b5ae5b164?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xlYXIlMjBza3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80')";
            document.body.style.backgroundRepeat="no-repeat";
            document.body.style.backgroundSize="100vw 100vh";
        }
        else if(txt.includes("rain"))
        {
            document.body.style.backgroundImage="url('https://assets.thehansindia.com/h-upload/2021/08/17/1102463-pain.webp')";
            document.body.style.backgroundRepeat="no-repeat";
            document.body.style.backgroundSize="100vw 100vh";
        }
        else if(txt.includes("snow"))
        {
            document.body.style.backgroundImage="url('https://images2.minutemediacdn.com/image/upload/c_crop,h_1927,w_3432,x_0,y_385/f_auto,q_auto,w_1100/v1554992961/shape/mentalfloss/520560-istock-614704346.jpg')";
            document.body.style.backgroundRepeat="no-repeat";
            document.body.style.backgroundSize="100vw 100vh";
        }
        else
        {
            document.body.style.backgroundImage="url('https://www.ksnt.com/wp-content/uploads/sites/86/2016/03/sunshine_36366417_ver1.0-8.jpg?w=2560&h=1440&crop=1')";
            document.body.style.backgroundRepeat="no-repeat";
            document.body.style.backgroundSize="100vw 100vh";
        }
        txt=data.sys.country;
        loc.innerHTML=input.toUpperCase()+','+txt;
        txt=data.wind.speed;
        speed.innerHTML=txt+" km/hr";
        txt=parseInt(data.main.temp-273);
        temp.innerHTML=txt+"<sup>o</sup>C";
        txt=parseInt(data.main.temp_min-273);
        let txt2=parseInt(data.main.temp_max-273);
        minmax.innerHTML=txt+"<sup>o</sup>C(min) / "+txt2+"<sup>o</sup>C(max)";
        txt=new Date(data.dt).toDateString();
        time.innerHTML=txt;
    })
    .catch((err)=>{
        alert("Enter Valid City");
        console.log(err.message);
    });
}