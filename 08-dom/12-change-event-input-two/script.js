/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

(function() {
    let pwd = document.getElementById("pass-one");
    let validation = document.getElementById("validity");

    pwd.addEventListener("input", function() {
        let pwdLength = pwd.value.length;
        let numbers = pwd.value.replace(/[^0-9]/g,"").length;
        if (pwdLength >= 8 && numbers >= 2) {
            validation.innerHTML = "Ok !";
        } else {
            validation.innerHTML = "Not ok";
        }
    })
})();
