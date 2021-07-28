/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

(function() {
    const cakeOrNot = confirm("Do you want some cake?");
    if (cakeOrNot) {
      alert("Great! Here, have some!")
    } else {
      alert("More cake for me then :p !")
    }

    //Or without using confirm()

    // const cakeOrNot = prompt("Do you want some cake? yes or no?");
    // if (cakeOrNot.toLowerCase() === "yes") {
    //   alert("Great! Here, have some!")
    // } else {
    //   alert("More cake for me then :p !")
    // }
})();