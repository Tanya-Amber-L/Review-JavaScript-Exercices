/* becode/javascript
 *
 * /10-asynchronous/06-promise-handling-errors/script.js - 10.6: gestion d'erreur (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

(() => {
    document.getElementById("run").addEventListener("click", () => {
        window.lib.getPersons()
        .then((people) => console.log(people))
        .catch((error) => console.log(error))
    })
})();