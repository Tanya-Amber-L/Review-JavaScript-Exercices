/* becode/javascript
 *
 * /10-asynchronous/09-async-handling-errors/script.js - 10.9: gestion d'erreur (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

(() => {
    document.getElementById("run").addEventListener("click", async() => {
        try {
            const people = await window.lib.getPersons();
            console.log(people)
        }
        catch {(error) => {console.error(error)}}
    })
})();