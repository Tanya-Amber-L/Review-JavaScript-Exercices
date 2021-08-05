/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

let inputs = Array.from(document.querySelectorAll("input"));

(() => {
    document.getElementById("run").addEventListener("click", async() => {
        const values = inputs.map(({value}) => value.trim())

        if (values.some(value => value === "")) {
            console.error("At leats one of the inputs is empty.");
            return; 
        }

        const [name, alterEgo, abilities] = values;
        await fetch("http://localhost:3000/heroes", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                alterEgo,
                abilities: abilities.split(",")
            })
        })

        let allHeroesFetched = await fetch("http://localhost:3000/heroes")
        .then(resp => resp.json())
        console.table(allHeroesFetched)
    })
})();
