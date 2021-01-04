/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
// When you click the button, get the number in the input, and show its factorial.

(function() {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {
        let x = document.getElementById("number").value;

        function factorial(x) {
            if (x === 0 || x === 1) {
                return 1;
            } else {
                return x * factorial(x - 1);
            }
        }

        alert("The factorial of the given number is : " + factorial(x))
    });

})();