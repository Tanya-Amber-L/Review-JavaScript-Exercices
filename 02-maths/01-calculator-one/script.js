/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

(function() {
    let num1 = document.getElementById("op-one");
    let num2 = document.getElementById("op-two");
    
    document.getElementById("addition").addEventListener("click", function() {
        console.log(`${Number(num1.value)} + ${Number(num2.value)} = ${Number(num1.value) + Number(num2.value)}`);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        console.log(`${Number(num1.value)} - ${Number(num2.value)} = ${Number(num1.value) - Number(num2.value)}`);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        console.log(`${Number(num1.value)} * ${Number(num2.value)} = ${Number(num1.value) * Number(num2.value)}`);
    });

    document.getElementById("division").addEventListener("click", function() {
        console.log(`${Number(num1.value)} / ${Number(num2.value)} = ${Number(num1.value) / Number(num2.value)}`);
    });
})();
