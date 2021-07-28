/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

(function() {
    document.getElementById("run").addEventListener("click", () => {
        const dayOfBirth = document.getElementById("dob-day").value;
        const monthOfBirth = document.getElementById("dob-month").value - 1;
        const yearOfBirth = document.getElementById("dob-year").value;
        const dateOfBirth = new Date(yearOfBirth, monthOfBirth, dayOfBirth);
        const today = new Date();

        const timeDifference = today - dateOfBirth;
        const age = new Date(timeDifference).getFullYear() - 1970;
        alert(`You are ${age} years old`)
    })
})();
