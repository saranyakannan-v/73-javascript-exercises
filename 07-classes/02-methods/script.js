/* becode/javascript
 *
 * /07-classes/02-methods/script.js - 7.2: méthodes
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
// Create a Person class. It will have two properties, firstname and lastname, and method sayHello, which will return "Hello, [firstname] [lastname]!".When the button is clicked, create an instance of the Person class and return the value of the sayHello method inside the console.

(() => {
    class Person {
        //constructor
        constructor(firstname, lastname) {
                this.firstname = firstname;
                this.lastname = lastname;
            }
            //Method 
        sayHello() {
            console.log("Hello, " + this.firstname + " " + this.lastname + "!");
        }
    }
    document.getElementById("run").addEventListener("click", function() {
        //object
        let person1 = new Person("Saranya", "Kannan");
        //calling the method sayHello() using the object person1
        person1.sayHello();
    })
})();