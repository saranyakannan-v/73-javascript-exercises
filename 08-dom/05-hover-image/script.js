/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
// When hovering over the image, change its source attribute to the value specified in the "data-hover" attribute.

(function() {
    // method 1
    // let img = document.getElementsByTagName("img")[0];
    // let img1 = document.getElementsByTagName("img")[0].src;
    // let img2 = document.getElementsByTagName("img")[0].dataset.hover;

    // img.addEventListener("mouseover", function() {
    //     img.setAttribute("src", img2)
    // })
    // img.addEventListener("mouseout", function() {
    //     img.setAttribute("src", img1)
    // })

    // Method 2

    let x = document.querySelector("img");
    let y = x.getAttribute("src");
    x.onmouseover = function() { mouseOver() };
    x.onmouseout = function() { mouseOut() };

    function mouseOver() {
        x.setAttribute("src", x.getAttribute("data-hover"));
    }

    function mouseOut() {
        x.setAttribute("src", y);
    }
})();