//Set up global variables

let wakeuptime = 7;
let noon = 12;
let lunchtime = 12;
let naptime = lunchtime + 2;
let evening = 18;
let snoozeit;

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

let updateClock = () => {
    let time = new Date().getHours();
    let messageText;
   
    let image = "https://media.giphy.com/media/tn8zWeNYA73G0/giphy.gif" //standard image 
    let timeEventJS = document.getElementById("timeEvent");
    let clockImageJS = document.getElementById("clock");

    //look into switch statements

    if(time == snoozeit) {

        image = "https://media.giphy.com/media/l49JSxywhF1hgU9ck/giphy.gif";
        messageText = "Snoozing it!";

    } else if (time == wakeuptime) {

        image = "https://media.giphy.com/media/DrJm6F9poo4aA/giphy.gif"
        messageText = "Wake up!!";

    } else if (time == lunchtime) {

        image = "https://media.giphy.com/media/l0MYwONBGDS7aPGOk/giphy.gif";
        messageText = "Let's enjoy some lunch!";

    } else if (time == naptime) {

        image = "https://media.giphy.com/media/l1J3NB0CwlBT01GXS/giphy.gif";
        messageText = "Nap time!"

    } else if ( time < noon) {

        image = "https://media.giphy.com/media/UQhBA6EhaqTM0K1Gvm/giphy.gif";
        messageText = "Good Morning!"

    } else if (time >= evening) {

        image = "https://media.giphy.com/media/KcbXFenYh6CEGPl1yQ/giphy.gif";
        messageText = "Good Evening!";

    } else {
        image = "https://media.giphy.com/media/tn8zWeNYA73G0/giphy.gif";
        messageText = "Good afternoon"
    }

    console.log(messageText);
    timeEventJS.innerText = messageText;
    clock.src = image;

    showCurrentTime();
};
updateClock();

// increment once a second for clock
let oneSecond = 1000;
setInterval( updateClock, oneSecond );


// get Alarm button to work
let alarmButton = document.getElementById("timeButton");

let alarmEvent = () => {
    
    if( snoozeit < 0 ) {

        snoozeit = new Date().getHours();
        alarmButton.innerText = "Snoozed";
        alarmButton.style.backgroundColor = "#F1A104";

    } else {

        snoozeit = -1;
        alarmButton.innerText = "Snooze me";
        alarmButton.style.backgroundColor = "#bc4749"

    }
};

alarmButton.addEventListener("click", alarmEvent);
alarmEvent();

// Activate Wake-up Selector
let wakeUpSelector = document.getElementById("wakeUpTimeSelector");

let wakeUpEvent = () => {

    wakeuptime = wakeUpSelector.value;

};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);


// Activate Lunch Selector
let lunchTimeSelector = document.getElementById("lunchTimeSelector");

let lunchEvent = () => {

    lunchtime = lunchTimeSelector.value;

};

lunchTimeSelector.addEventListener("change", lunchEvent);


// Activates Nap-Time selector
let napTimeSelector = document.getElementById("napTimeSelector");

let napEvent = () => {

    naptime = napTimeSelector.value;

};

napTimeSelector.addEventListener("change", napEvent);
