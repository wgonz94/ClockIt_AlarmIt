//Set up global variables

let wakeuptime = 7;
let noon = 12;
let lunchtime = 12;
let naptime = lunchtime + 2;
let evening = 18;

let showCurrentTime = () => {
    let clock = document.getElementById('current-time');

    let currentTime = new Date();

    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let meridian = "AM";

    //set Hours
    if(hours >= noon) {
        meridian = "PM";
    }
    if(hours > noon) {
        hours = hours - 12;
    }

    //set Minutes
    if(minutes < 10) {
        minutes = "0" + minutes;
    }

    //set Seconds
    if (seconds < 10){
        seconds = "0" + seconds;
    }

    let clockTime = hours + ':' + minutes + ':' + seconds + ' ' + meridian

    clock.innerText = clockTime;
}
