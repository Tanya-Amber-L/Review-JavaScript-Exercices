/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

(function() {
    const source = document.getElementById("source");
    const imageURL = source.getAttribute("data-image");
    const target = document.getElementById("target");
    const imgTag = document.createElement("img");
    imgTag.setAttribute("src", imageURL)
    target.appendChild(imgTag);
    source.remove();
})();
