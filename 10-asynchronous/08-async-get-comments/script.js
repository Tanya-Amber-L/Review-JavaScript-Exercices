/* becode/javascript
 *
 * /10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

(() => {
    document.getElementById("run").addEventListener("click", async() => {
        try {
            const posts = await window.lib.getPosts();
            posts.forEach(post => post.comment = promiseComments());
            console.log(posts)
        }
        catch {(error) => {console.error(error)}}
    })
    let promiseComments = async() => {
        try {
            const comments = window.lib.getComments();
            return comments.value;
        }
        catch {(error) => {console.error(error)}}
    }
})();