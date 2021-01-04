/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
// When you click the button, change the source of the image to the next one listed in the gallery array.
(function() {

    var gallery = [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    // your code here
    var target = document.querySelector('img');
    var counter = 0;
    document.getElementById("next").addEventListener("click", function() {

        counter += 1;
        if (counter > gallery.length - 1) {
            counter = 0;
        }
        target.src = gallery[counter];

    });

})();