//Q.39. Write a program that create a basic alarm Clock
const prompt = require('prompt-sync')();

const hours = prompt("Enter Hours: ");
const minutes = prompt("Enter Minutes: ");
function basicAlarm() {
    let date = new Date();
    let alarmDate = new Date();
    alarmDate.setHours(hours);
    alarmDate.setMinutes(minutes);

    const diff = alarmDate - date;
    if (diff < 0) {
        console.log("Please provide future time:")
        return;
    }
    setTimeout(() => {
        console.log("Time is up! alarm alarm")
    }, diff);
}



basicAlarm(hours, minutes);