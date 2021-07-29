/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

(function() {
    const img = document.querySelector("img");
    const linkOnHover = img.getAttribute("data-hover");
    const defaultLink = img.getAttribute("src");
    img.addEventListener("mouseover", () => img.setAttribute("src", linkOnHover))
    img.addEventListener("mouseout", () => img.setAttribute("src", defaultLink))
})();
