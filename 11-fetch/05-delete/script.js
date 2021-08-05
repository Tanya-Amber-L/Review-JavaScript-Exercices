/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

const input = document.querySelector("#hero-id");

(() => {
    document.getElementById("run").addEventListener("click", async() => {
        if (input.value === "") {
            console.error("input empty");
            return; 
        }
        
        await fetch(`http://localhost:3000/heroes/${input.value}`, {
            method: 'DELETE'
        })

        let heroesAfterDelete = await fetch("http://localhost:3000/heroes")
        .then(resp => resp.json())
        console.table(heroesAfterDelete)
    })
})();
