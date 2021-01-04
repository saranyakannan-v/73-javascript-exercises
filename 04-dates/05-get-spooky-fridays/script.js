/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {

        let inputYear = document.getElementById("year").value;
        let arr = [];

        for (let month = 0; month < 12; month++) {
            let date = new Date(inputYear, month, 13);
            if (date.getDay() == 5) {
                arr.push(date.toDateString());
            }
        }

        alert(arr.join("\n"));
    });

})();