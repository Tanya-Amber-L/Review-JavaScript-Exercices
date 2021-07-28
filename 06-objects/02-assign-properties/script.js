/* becode/javascript
 *
 * /06-objects/02-assign-properties/script.js - 6.2: assigner des propriétés
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

(() => {
    const computers = [
        {id: "0001", available: false, user: "leny", os: "macOS"},
        {id: "0002", available: false, user: "Nicolas"},
        {id: "0003"},
        {id: "0004", os: "Windows"},
        {id: "0005"},
        {id: "0006", os: "macOS"},
        {id: "0007"},
        {id: "0008"},
        {id: "0009", available: false, user: "Anthony"},
    ];
    const defaultProps = {
        available: true,
        os: "linux",
        user: null,
    };
    document.getElementById("run").addEventListener("click", () => {
        computers.forEach(computer => {
            if (computer.available === undefined) {
                computer.available = defaultProps.available;
            }
            if(computer.os === undefined) {
                computer.os = defaultProps.os;
            }
            if(computer.user === undefined) {
                computer.user = defaultProps.user;
            }
        })
        console.table(computers);
    })
})();
