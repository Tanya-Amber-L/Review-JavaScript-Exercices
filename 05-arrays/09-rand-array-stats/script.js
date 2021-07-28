/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */
(function() {
    document.getElementById("run").addEventListener("click", () => {
        let randomNumbers = [];

        for (let i = 0; i < 10; i++) {
            randomNumbers.push(Math.round(Math.random() * 100))
            document.getElementById("n-" + Number(i + 1)).innerHTML = randomNumbers[i];
        }

        document.getElementById("min").innerHTML = Math.min(...randomNumbers);
        document.getElementById("max").innerHTML = Math.max(...randomNumbers);
        document.getElementById("sum").innerHTML = randomNumbers.reduce((a,b) => a + b);
        document.getElementById("average").innerHTML = randomNumbers.reduce((a,b) => a + b) / randomNumbers.length;
    })
})();
