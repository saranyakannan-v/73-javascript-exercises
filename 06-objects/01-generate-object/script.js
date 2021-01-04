/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
// When you click on the button, displays in the console an object that introduces you and contains the following properties lastname, firstname, age, city, country.

(() => {
    let details = {
        lastname: "Kannan",
        firstname: "Saranya",
        age: 28,
        city: "Chennai",
        country: "India"
    };
    document.getElementById("run").addEventListener("click", function() {
        console.log(details);
    })
})();