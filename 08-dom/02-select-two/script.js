/* becode/javascript
 *
 * /06-dom/02-select-two/script.js - 6.2: sélection par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
// Select the element with the id "target" (not using getElementById!) and replace its content with "owned".

(function() {
    // querySelector() -Returns the first child element that matches a specified CSS selector(s) of an element
    document.querySelector("#target").innerHTML = "owned"

})();