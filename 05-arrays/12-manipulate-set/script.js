/* becode/javascript
 *
 * /05-arrays/12-manipulate-set/script.js - 5.12: manipulation d'un Set
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

(() => {
    const fruits = new Set([
        "apple",
        "pear",
        "strawberry",
        "tomato",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grape",
        "cherry",
    ]);
    document.getElementById("run").addEventListener("click", () => {
        fruits.delete("apple");
        fruits.delete("cherry");
        fruits.add("banana");
        fruits.add("kiwi");
        console.log(fruits)
    })
})();
