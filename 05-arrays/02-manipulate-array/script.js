/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
// When you click the button, do the following transformations to the array fruits: remove the first and the last element, add an element "banana" at the start of the array, and add an element "kiwi" at the end.

(function() {

    var fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];
    document.getElementById("run").addEventListener("click", function() {
        fruits.shift(); // remove first element in an array
        fruits.pop(); //remove last element in an array
        console.log(fruits);
        fruits.unshift("banana"); // adds the new element to the beginning of an array
        fruits.push("kiwi"); // adds the new element to the end of an array
        console.log(fruits);
    })

})();