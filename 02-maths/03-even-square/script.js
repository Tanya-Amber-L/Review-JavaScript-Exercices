/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

(function() {
    document.getElementById("run").addEventListener("click", function() {
        let squareNumbersUntil21 = [];
        for (let i = 1; i < 10; i++) {
            let resultSquareNum = Math.pow(i, 2);
            if (resultSquareNum <= 21) {squareNumbersUntil21.push(resultSquareNum)}
        }
        console.log("The square number until 21 are : " + squareNumbersUntil21)
    });
})();
