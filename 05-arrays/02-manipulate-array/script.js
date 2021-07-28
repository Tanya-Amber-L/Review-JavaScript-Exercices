/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

(function() {
    var fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];
    document.getElementById("run").addEventListener("click", () => {
        fruits.shift(); //remove at beginning
        fruits.pop(); //remove at end
        fruits.unshift("banana"); //add at beginning
        fruits.push("kiwi"); //add at end
        console.log(fruits);
    })
})();
