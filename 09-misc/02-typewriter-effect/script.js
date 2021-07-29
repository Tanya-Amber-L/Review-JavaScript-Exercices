/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

(function() {
    let i = 0;
    let textElement = document.getElementById("target");
    let textLetters = textElement.innerText;
    textElement.innerHTML = "";
    const typeWriter = () => {
        const randomDelay = Math.floor(Math.random() * (200 - 50 + 1) + 50);
        if (i<textLetters.length) {
            setTimeout(() => {
                textElement.innerHTML += textLetters.charAt(i);
                console.log("test" + i);
                i++;
                typeWriter();
            }, randomDelay)
        }
    }
    typeWriter();
})();
