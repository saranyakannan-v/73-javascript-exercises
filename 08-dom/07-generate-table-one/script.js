/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
// Inside the element with id "target", create an HTML table with 1 column and 10 rows.

(function() {

    let table = document.createElement("TABLE");
    let tr;
    let td;

    document.getElementById("target").appendChild(table);
    table.setAttribute("id", "mytable");

    for (let i = 1; i <= 10; i++) {
        tr = document.createElement("TR");
        tr.setAttribute("id", ("row" + i));
        document.getElementById("mytable").appendChild(tr);

        td = document.createElement("TD");
        document.getElementById("row" + i).appendChild(td)
        td.innerHTML = "Row" + i;
    }
})();

// Method 2
// (function() {


//     let table = document.createElement("TABLE")
//     document.getElementById('target').appendChild(table);

//     let row = 0;
//     let cell = 0;

//     for (let i = 0; i < 10; i++) { //create 10 row and insert 1 column

//         row = table.insertRow(i);

//         cell = row.insertCell(0);

//     }
// })();