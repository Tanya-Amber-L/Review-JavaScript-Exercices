/* becode/javascript
 *
 * /10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

(() => {
    document.getElementById("run").addEventListener("click", () => {
        window.lib.getPosts()
        .then((posts) => {
            console.log(posts);
            posts.forEach(post => {
                window.lib.getComments()
                .then((comments) => post.comment = comments)
                .catch((error) => console.error(error)) 
            });
        })
        .catch((error) => console.log(error))
    })
})();