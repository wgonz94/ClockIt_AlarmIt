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


