/* becode/javascript
 *
 * /10-asynchronous/07-async-get-posts/script.js - 10.7: chargement d'articles (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

(() => {
    document.getElementById("run").addEventListener("click", async() => {
        try {
            const posts = await window.lib.getPosts();
            console.log(posts);
        }
        catch {(error) => {console.error(error)}}
    })
})();