/* becode/javascript
 *
 * /06-dom/03-select-three/script.js - 6.3: sélection multiple par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // The querySelectorAll() -  method returns a collection of an element's child elements that match a specified CSS selector(s), as a static NodeList object.
    // Method 1
    document.querySelectorAll(".target").forEach(element => {
        element.innerHTML = "owned"
    });
    // Method 2
    // let array = document.getElementsByClassName("target")
    // for (let i = 0; i < array.length; i++) {
    //     array[i].innerHTML = "owned";
    // }
    // Method 3
    // let array = document.querySelectorAll(".target")
    // for (let i = 0; i < array.length; i++) {
    //     array[i].innerHTML = "owned";
    // }
})();