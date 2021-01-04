/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
// In the script, there is a prewritten class named: Animal.
// From this class, create the two classes, Cat and Dog. They will each have two properties, name and greeting (the second property must be static).
//When the button is clicked, create an instance of the Dog class and an instance of the Cat class and display the return value of the sayHello method inside the console .

(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    // your code here
    // To create a class inheritance, use the extends keyword.
    // Static class methods are defined on the class itself. You cannot call a static method on an object, only on an object class.

    class Cat extends Animal {
        name = "kitty";
        static greeting = "Mieowww";
    }

    class Dog extends Animal {
        name = "Bingo";
        static greeting = "Woof woof";
    }

    document.getElementById("run").addEventListener("click", function() {
        let cat1 = new Cat();
        let dog1 = new Dog();
        console.log(cat1.sayHello());
        console.log(dog1.sayHello());
    });
})();