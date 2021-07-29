/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

(function() {
    var gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];
    
        const img = document.querySelector("img");
        const imgSource = img.getAttribute("src");
        console.log(imgSource);
        let i = 1;
        document.getElementById("next").addEventListener("click", () => {
            img.setAttribute("src", gallery[i]);
            i++;
            if (i == gallery.length) {i = 0}
        })
})();
