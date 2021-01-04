/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
// On click on the button, calculate and display the square numbers between 1 and 21.

(function() {

    document.getElementById("run").addEventListener("click", function() {
        let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
        //The map() method creates a new array with the results of calling a function for every array element.
        let result = list.map(x => x * x);
        alert(result);
    });
})();