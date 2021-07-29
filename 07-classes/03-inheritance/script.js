/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    class Cat extends Animal {
        constructor(name){
            super();
            this.name = name;
        }
        static greeting = "Miaow";
    }
    class Dog extends Animal {
        constructor(name){
            super();
            this.name = name;
        }
        static greeting = "Woof"
    }
    document.getElementById("run").addEventListener("click", () => {
        const catInstance = new Cat("Jumper");
        const dogInstance = new Dog("Max");
        console.log(catInstance.sayHello(), dogInstance.sayHello())
    })
})();

// notes:
// The static keyword defines a static method or property for a class. Static members (properties and methods) are called without instantiating their class and cannot be called through a class instance. 
// Static methods are often used to create utility functions for an application, whereas static properties are useful for caches, fixed-configuration, or any other data you don't need to be replicated across instances. (MDN)

// The extends keyword is used in class declarations or class expressions to create a class as a child of another class. !!! If there is a constructor present in the subclass, it needs to first call super() before using "this". !!! (MDN)

// The super keyword is used to call corresponding methods of super class. This is one advantage over prototype-based inheritance. (MDN)
