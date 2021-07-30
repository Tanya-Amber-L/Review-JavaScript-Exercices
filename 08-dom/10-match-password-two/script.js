/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

(function() {
    const pwdOne = document.getElementById("pass-one");
    const pwdTwo = document.getElementById("pass-two");
    document.getElementById("run").addEventListener("click", () => {
        if (pwdOne.value === pwdTwo.value) {
            pwdOne.style.border = "1px solid green";
            pwdTwo.style.border = "1px solid green";
        } else {
            pwdOne.classList.add("error")
            pwdTwo.classList.add("error");
        }
    })
})();
