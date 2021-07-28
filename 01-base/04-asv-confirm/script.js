/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

(function() {
    let infosAreCorrect;
    do {
        let age = prompt("Hello there, how old are you?");
        let gender = prompt("What's your gender?");
        let town = prompt("And where do you live?");

        infosAreCorrect = confirm(`So you are ${age}, you're ${gender} and you live in ${town}. Correct?`);
    } while(!infosAreCorrect)
    if (infosAreCorrect) {alert("Thanks for your answers!")}
})();