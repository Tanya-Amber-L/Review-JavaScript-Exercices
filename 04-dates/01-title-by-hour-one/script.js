/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

(function() {
    const now = new Date;
    const hoursNow = now.getHours();
    const text = document.getElementById("target");
    if (hoursNow < 18) {
        text.innerHTML = "Hello"
    } else {
        text.innerHTML = "Good Evening"
    }
})();
