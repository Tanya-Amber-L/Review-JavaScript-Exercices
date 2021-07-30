/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

(() => {
    document.getElementById("run").addEventListener("click", () => {
        let i = 0;
        window.lib.getPosts((error, posts) => {
            if (error) {
                console.log(error);
            } else {
                console.log(posts)
                posts.forEach(post => {
                    window.lib.getComments( post.id, (error, comments) => {
                        if (error) {
                            console.log(error)
                        } else {
                            post.comments = comments
                        }
                    })
                })
            }
        })
    })
})();
