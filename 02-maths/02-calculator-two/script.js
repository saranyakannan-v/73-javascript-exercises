/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    const performOperation = operation => {
        let operand1 = new Number(document.getElementById("op-one").value);
        let operand2 = new Number(document.getElementById("op-two").value);
        switch (operation) {
            case "addition":
                alert(operand1 + operand2);
                break;
            case "substraction":
                alert(operand1 - operand2);
                break;
            case "multiplication":
                alert(operand1 * operand2);
                break;
            case "division":
                alert(operand1 / operand2);
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