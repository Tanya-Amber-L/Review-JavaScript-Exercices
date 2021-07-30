/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

(function() {
    const input = document.getElementById("pass-one");
    const letterCounter = document.getElementById("counter");
    input.addEventListener("input", () => {
        if (input.value.length <= 10) {
            letterCounter.innerHTML = `${input.value.length}/10`;
        } else {
            input.value = input.value.slice(0, 10);
        }
    })
})();
