/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

(() => {
    document.getElementById("run").addEventListener("click", () => {
        window.lib.getPosts((error, posts) => {
            if (error) {
                console.log(error);
                return
            } 
            posts.forEach(post => {
                window.lib.getComments( post.id, (error, comments) => {
                    if (error) {
                        console.log(error)
                        return
                    }
                    post.comments = comments
                    console.log(posts)
                    
                })
            })
        })
    })
})();
