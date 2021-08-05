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
            posts.forEach( async(post) => {
                post.comment = await promiseComments(post.id)
            });
            console.log(posts)
        }
        catch {(error) => {console.error(error)}}
    })
    let promiseComments = async(postId) => {
        try {
            const comments = await window.lib.getComments(postId);
            return comments;
        }
        catch {(error) => {console.error(error)}}
    }
})();