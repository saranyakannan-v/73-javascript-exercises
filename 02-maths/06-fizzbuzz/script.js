/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
// In the console, for each numbers between 1 and 100 : show "fizz" if the number is a multiple of 3, "buzz" if it's a multiple of 5, "fizzbuzz" if it's both, or simply the number if it's none of these.

(function() {
    let n = 1;
    while (n <= 100) {
        if (n % 3 === 0 && n % 5 === 0) {
            console.log(n + "fizzbuzz (multiple of 3 and 5)");
        } else if (n % 5 === 0) {
            console.log(n + "buzz (multiple of 5)");
        } else if (n % 3 === 0) {
            console.log(n + "fizz (multiple of 3)");
        } else {
            console.log(n + "is neither a multiple of 3 nor of 5");
        }
        n++;
    }
})();