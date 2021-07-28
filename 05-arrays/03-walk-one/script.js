/* becode/javascript
 *
 * /05-arrays/01-get-element/script.js - 5.1: élément de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

(function() {
    var fruits = [
        "apple",
        "pear",
        "raspberry",
        "tomatoes",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peache",
        "grap",
        "cherry",
    ];
    document.getElementById("run").addEventListener("click", () => {
        for (let i = 0; i <= fruits.length; i++) {console.log (fruits[i])}
    })
})();
