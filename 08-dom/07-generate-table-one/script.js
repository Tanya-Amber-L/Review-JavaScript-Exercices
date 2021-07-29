/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
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
        const newColumn = document.createElement("td");
        newColumn.innerHTML = i;
        newRow.appendChild(newColumn);
    }
})();
