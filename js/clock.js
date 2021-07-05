const clock = document.querySelector("span#clock");
let amOrpm;

const monthsOfYear = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
]
const days = ['Sun','Mon','Tues','Wed','Thur','Fri','Sat'];

//using Date API to get the current time.
function getClock(){
    const date = new Date();
    let hours = date.getHours()
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    if(hours > 12){
        let intHours = hours - 12;
        hours = String(intHours).padStart(2, "0");
        amOrpm = "PM";
    }else if(hours === 12){
        amOrpm = "PM";
    }
    else{
        amOrpm = "AM";
    }
    //const miliSeconds = String(date.getMilliseconds()).padStart(3, "0");
    //clock.innerText = `${hours}:${minutes}:${seconds}:${miliSeconds}`;
    const amOrPm = document.querySelector("span.amOrPm");
    amOrPm.innerText = amOrpm;
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
const dateH = document.getElementById("date");
function getDate(){
    const date = new Date();
    const dd = String(date.getDate()).padStart(2, '0');
    let mm = date.getMonth(); //January is 0!
    const day = days[ date.getDay() ];
    mm = monthsOfYear[mm];
    const yyyy = date.getFullYear(); 

    dateH.innerText = `${dd} ${mm}, ${yyyy} ${day}`;
}
//repeatedly retrieve time every second.
getDate();
getClock();
setInterval(getClock, 1000);
