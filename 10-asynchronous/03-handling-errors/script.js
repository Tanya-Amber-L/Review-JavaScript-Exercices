/* becode/javascript
 *
 * /10-asynchronous/03-handling-errors/script.js - 10.3: gestion d'erreur
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

(() => {
    document.getElementById("run").addEventListener("click", () => {
        window.lib.getPersons((error, people) => {
            if (error) {
                console.error(error);
            } else {
                console.table(people)
            }
        })
    })
})();