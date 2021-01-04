/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let table = document.createElement("TABLE");
    let tr;
    let td;

    document.getElementById("target").appendChild(table);
    table.setAttribute("id", "mytable");

    for (let i = 1; i <= 10; i++) {
        tr = document.createElement("TR");
        tr.setAttribute("id", ("row" + (i * i)));
        document.getElementById("mytable").appendChild(tr);

        td = document.createElement("TD");
        document.getElementById("row" + (i * i)).appendChild(td)
        td.innerHTML = "Row" + (i * i);
    }
})();