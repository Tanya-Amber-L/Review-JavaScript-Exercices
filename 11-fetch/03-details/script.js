/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

(() => {
    const target = document.getElementById("target");
    const template = document.getElementById("tpl-hero");

    document.getElementById("run").addEventListener("click", () => {
        const heroId = document.getElementById("hero-id").value;
    
        fetch(`http://localhost:3000/heroes/${heroId}`)
        .then((resp) => resp.json())
        .then((hero) => {
            if (hero.id === undefined) {
                console.log("Unknown hero")
            } else {
                let clone = template.cloneNode(true).content; 
                clone.querySelector(".name").innerHTML = hero.name;
                clone.querySelector(".alter-ego").innerHTML = hero.alterEgo;
                clone.querySelector(".powers").innerHTML = hero.abilities.join(", ");
                target.appendChild(clone)
            }
        })
        .catch((err) => console.error(err))
    })
})();
