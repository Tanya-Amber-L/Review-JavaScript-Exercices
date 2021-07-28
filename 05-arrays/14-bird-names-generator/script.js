/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);
    const text = document.getElementById("target");
    document.getElementById("run").addEventListener("click", () => {
        const adjectivesArray = [...adjectives];
        const randomAdjective = adjectivesArray[Math.floor(Math.random() * adjectivesArray.length)];
        const randomBirdIndex = Math.floor(Math.random() * birds.length);
        const randomBirdName = birds[randomBirdIndex].name;
        if (birds[randomBirdIndex].fem) {
            text.innerHTML = `La ${randomBirdName} ${randomAdjective}e`;
        } else {
            text.innerHTML = `Le ${randomBirdName} ${randomAdjective}`;
        }
    })
})();
