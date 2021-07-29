/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    const text = document.getElementById("target");
    let letters = text.innerHTML.split("");
    text.innerHTML = "";
    const fontSizes = [18, 22, 26, 30, 34, 30, 26, 22];
    letters.forEach( (letter, i) => {
        const span = document.createElement("span");
        span.innerHTML = letter;
        span.style.fontSize = `${fontSizes[i % fontSizes.length]}px`;
        text.appendChild(span);
    })
})();
