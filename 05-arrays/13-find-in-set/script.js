/* becode/javascript
 *
 * /05-arrays/13-find-in-set/script.js - 5.13: recherche dans un Set
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

(() => {
    const people = new Set([
        "Nicolas",
        "Nick",
        "Leny",
        "Alexandre",
        "Charlène",
        "Laureline",
        "Esther",
        "Simon",
        "Lucas",
    ]);
    document.getElementById("run").addEventListener("click", () => {
        console.log(`${people.size} people in the Set`);
        console.log(`Is Alexandre part of the set? ${people.has("Alexandre")}`)
    })
})();
