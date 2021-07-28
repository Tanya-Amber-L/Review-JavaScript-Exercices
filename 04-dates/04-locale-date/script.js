/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

(function() {
    const text = document.getElementById("target");
    const now = new Date();
    const weekDay = now.getDay();
    const dayOfMonth = now.getDate();
    const month = now.getMonth();
    const year = now.getFullYear();
    const hour = now.getHours();
    let min = now.getMinutes();
    if(min < 10) {min = `0${min}`}

    const allWeekDays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]
    const allMonths = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]

    text.innerHTML = `${allWeekDays[weekDay]} ${dayOfMonth} ${allMonths[month]} ${year}, ${hour}h${min}`
})();
