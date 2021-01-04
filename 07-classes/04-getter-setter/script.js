/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
// Create a class named Person. It will have two properties, firstname and lastname, as well as a getter name, which will return "[firstname] [lastname]", and a setter name, which will divide the full name on the basis of a space: the first element will be the firstname, the second the lastname.
// When the button is clicked, we create an instance of the Person class and display the value of the name inside the console, then assigns a new value to it and displays the state of the instance inside the console at the end of the process.

(() => {
    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }

        get name() {
            return this.firstname + " " + this.lastname;
        }

        set name(fullName) {
            let man = fullName.split(" ");
            this.firstname = man[0];
            this.lastname = man[1];
        }
    }

    document.getElementById("run").addEventListener("click", function() {
        let person1 = new Person("Saranya", "Kannan");
        console.log(person1.name);

        person1.name = "Hanissh Kutty";
        console.log(person1.name);
    });
})();