/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

(() => {
    const meMyselfAndI = {
        name : "Tanya",
        lastname : "Leenders",
        age : "infinite",
        city : "Liège",
        country : "Belgium"
    }
    document.getElementById("run").addEventListener("click", () => console.table(meMyselfAndI))
})();
