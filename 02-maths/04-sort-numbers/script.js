/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

(function() {
    document.getElementById("run").addEventListener("click", function() {
        const numbers = document.getElementById("numbers").value;
        const numbersArray = numbers.split(", ").map(Number);
        const sortedNumbersArray = numbersArray.sort((a, b) => a - b);
        console.log(sortedNumbersArray);
    });
})();
