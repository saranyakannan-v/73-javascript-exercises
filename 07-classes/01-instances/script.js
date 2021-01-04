/* becode/javascript
 *
 * /07-classes/01-instances/script.js - 7.1: instances
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    let myCat1 = new Cat("Skitty", "9 years");
    let myCat2 = new Cat("Pixel", "6 years");
    document.getElementById("run").addEventListener("click", function() {
        console.log(myCat1.name + ", " + myCat1.age);
        console.log(myCat2.name + ", " + myCat2.age);
    })
})();