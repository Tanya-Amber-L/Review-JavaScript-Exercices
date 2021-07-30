/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
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
            pwdOne.style.border = "1px solid red";
            pwdTwo.style.border = "1px solid red";
        }
    })
})();
