/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

(function() {
    const target = document.getElementById("target");
    const newTable = document.createElement("table");
    target.appendChild(newTable); 
    
    for (i = 1; i < 11; i++) {
        const newRow = document.createElement("tr");
        newTable.appendChild(newRow);
        for (j = 1; j < 11; j++) {
            const newColumn = document.createElement("td");
            newColumn.innerHTML = i*j;
            newRow.appendChild(newColumn);
        }
    }
})();
