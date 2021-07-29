/* becode/javascript
 *
 * /06-objects/04-from-entries/script.js - 6.4: fromEntries
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    document.getElementById("run").addEventListener("click", () => {
        let array = [];
        for (let i = 0; i < keys.length; i++) {
            array.push([keys[i], values[i]])
        }
        const object = Object.fromEntries(array);
        console.log(object);
    })
})();
