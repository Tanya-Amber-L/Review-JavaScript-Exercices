/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

(function() {
    const now = new Date;
    const hoursNow = now.getHours();
    const minNow = now.getMinutes();
    const timeNow = hoursNow * 100 + minNow;
    const text = document.getElementById("target");
    if (timeNow < 1730) {
        text.innerHTML = "Hello"
    } else {
        text.innerHTML = "Good Evening"
    }
})();
