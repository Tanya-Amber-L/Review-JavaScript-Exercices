/* becode/javascript
 *
 * /07-classes/02-methods/script.js - 7.2: méthodes
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
        sayHello() {
            return `Hello ${this.firstname} ${this.lastname}!`;
        }
    }
    document.getElementById("run").addEventListener("click", () => {
        const firstPerson = new Person("Chris", "Hemsworth")
        console.log(firstPerson.sayHello())
    })
})();
