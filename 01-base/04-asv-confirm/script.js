/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
//Ask three questions to the user: his/her Age, Gender, and the Town where he/she lives. Display the collected responses in a dialog box and ask to confirm. If not confirmed, re-run the process

(function user() {

    let userAge = prompt("Please enter your age : ");
    let userGender = prompt("Please enter your gender (Male / Female): ");
    let userTown = prompt("Please enter your town : ");

    alert(
        "Details of the User :" + " " +
        "Age :" + " " + userAge + " " +
        "Gender :" + " " + userGender + " " +
        "Town :" + " " + userTown
    );
    let details = confirm("Please Confirm the details.");
    if (details == true) {
        alert("You pressed OK!");
    } else {
        return user()
    }

})();