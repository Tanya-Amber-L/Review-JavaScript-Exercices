/* becode/javascript
 *
 * /07-classes/01-instances/script.js - 7.1: instances
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

(() => {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    document.getElementById("run").addEventListener("click", () => {
        const firstCat = new Cat("Skitty", 9);
        const secondCat = new Cat("Pixel", 6);
        console.log(firstCat, secondCat)
    })
})();
