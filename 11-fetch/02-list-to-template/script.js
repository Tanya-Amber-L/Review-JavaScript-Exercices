/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

(() => {
    const target = document.getElementById("target");
    const template = document.getElementById("tpl-hero");

    document.getElementById("run").addEventListener("click", () => {
        fetch("http://localhost:3000/heroes")

        .then((resp) => resp.json())
        .then((dataHeroes) => {
            dataHeroes.forEach(hero => {
                let clone = template.cloneNode(true).content; 
                clone.querySelector(".name").innerHTML = hero.name;
                clone.querySelector(".alter-ego").innerHTML = hero.alterEgo;
                clone.querySelector(".powers").innerHTML = hero.abilities.join(", ");
                target.appendChild(clone)
            });
        })

        .catch((err) => console.error(err))
    })
})();

