/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

(function() {
    var red = document.getElementById("red");
    var green = document.getElementById("green");
    var yellow = document.getElementById("yellow");
    var blue = document.getElementById("blue");

    red.addEventListener ("click", () => document.body.style.background='#ff0000')
    green.addEventListener ("click", () => document.body.style.background='#00ff00')
    yellow.addEventListener ("click", () => document.body.style.background='#ffff00')
    blue.addEventListener ("click", () => document.body.style.background='#0000ff')
})();
