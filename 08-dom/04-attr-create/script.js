/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
// Get the value of the "data-image" attribute from the element with id "source". Create a new image element inside the target element that displays the image referred to by the attribute value. Then remove the original element.

(function() {

    // The getAttribute() method returns the value of the attribute with the specified name, of an element.
    // Syntax: element.getAttribute(attributename)

    console.log(document.getElementById("source").getAttribute("data-image"));

    // The setAttribute() method adds the specified attribute to an element, and gives it the specified value. 
    // Syntax : element.setAttribute(attributename, attributevalue)

    let newElement = document.createElement("img");
    newElement.setAttribute("src", document.getElementById("source").getAttribute("data-image"));

    // The appendChild() method appends a node as the last child of a node.
    // Syntax : node.appendChild(node)

    document.getElementById("target").appendChild(newElement);


    // The ChildNode.remove() method removes the object from the tree it belongs to.
    // syntax: node.remove();

    document.getElementById("source").remove();


})();