/* becode/javascript
 *
 * /09-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

(() => {
    document.getElementById("run").addEventListener("click", () => {
        fetch("http://localhost:3000/heroes")
        .then((resp) => resp.json())
        .then((dataHeroes) => {console.table(dataHeroes)})
        
        .catch((err) => console.error(err))
    })
})();