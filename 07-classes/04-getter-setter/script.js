/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

(() => {
    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }
        get name() {
            return`${this.firstname} ${this.lastname}`;
        }
        set name(newName) {
            [this.firstname, this.lastname] = newName.split(" ");
        }
    }
    document.getElementById("run").addEventListener("click", () => {
        const personInstance = new Person("Chris", "Evans")
        console.log(`Initial state : ${personInstance.name}`);
        personInstance.name = "Chris Pratt";
        console.log(`Changed state : ${personInstance.name}`)
    })
})();
