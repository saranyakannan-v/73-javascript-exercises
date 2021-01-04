/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
// Listen for changes in the input field and display the number of characters entered in the counter span. As soon as 10 characters have been entered, don't allow any more characters to be typed.

(function() {

    document.getElementById("pass-one").addEventListener("input", function() {

        document.getElementById("pass-one").setAttribute("maxlength", 10);

        let one = document.getElementById("pass-one").value

        if (one.length <= 10) {
            document.getElementById("counter").innerHTML = one.length + "/" + 10;
        }
    })

})();