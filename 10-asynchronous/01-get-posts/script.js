/* becode/javascript
 *
 * /10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

(() => {
    document.getElementById("run").addEventListener("click", () => {
        window.lib.getPosts((error, posts) => {
            if (error) {
                console.log(error);
            } else {
                console.log(posts);
            }
        })
    })
})();
