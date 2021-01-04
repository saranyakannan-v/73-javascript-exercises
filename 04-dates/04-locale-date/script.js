(function() {

    let d = new Date();
    let n = d.toDateString();
    let hours = d.getHours();
    let minute = d.getMinutes();
    let hm = hours + "h" + minute;

    document.getElementById("target").innerHTML = n + " " + hm;

    // let day = date.getDay();
    // let date_month = date.getDate();
    // let month = date.getMonth();
    // let year = date.getFullYear();
    // let hours = date.getHours();
    // let minute = date.getMinutes();

    // document.getElementById("target").innerHTML = day + ", " + date_month + "/" + month + "/" + year + " " + hours + "h" + minute;

})();