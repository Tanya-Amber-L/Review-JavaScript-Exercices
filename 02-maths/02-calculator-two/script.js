/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

(() => {
    const performOperation = operation => {
        let num1 = document.getElementById("op-one");
        let num2 = document.getElementById("op-two");
        switch (operation) {
            case "addition" :
                console.log(`${Number(num1.value)} + ${Number(num2.value)} = ${Number(num1.value) + Number(num2.value)}`);
                break;
            case "substraction" :
                console.log(`${Number(num1.value)} - ${Number(num2.value)} = ${Number(num1.value) - Number(num2.value)}`);
                break;
            case "multiplication" :
                console.log(`${Number(num1.value)} * ${Number(num2.value)} = ${Number(num1.value) * Number(num2.value)}`);
                break;
            case "division" :
                console.log(`${Number(num1.value)} / ${Number(num2.value)} = ${Number(num1.value) / Number(num2.value)}`);
                break;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
