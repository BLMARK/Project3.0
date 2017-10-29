// var code = location.href.split("=")[1];
// getJson(
//     "https://raw.githubusercontent.com/opendatajson/football.json/master/2014-15/at.1.json",
//     function (tableData) {
//         fillTable(tableData);
//     }
// );


// function fillTable(rows) {
//     var table = document.querySelector("table");
//     var content = "";
//     for (var i = 0; i < rows.length; i++) {
//         var tr = "<tr>";
//         tr += "<td>" + (i + 1) + "</td>";
//         tr += "<td>" + rows[i].key + "</td>";
//         tr += "<td>" + rows[i].name + "</td>";
//         tr += "<td>" + rows[i].code + "</td>";
//         tr += '<td><a class="btn btn-primary" href="match.html?code=' + rows[i].code + '">match</a></td>';
//         tr += "</tr>";
//         content += tr;
//     }

//     table.querySelector("tbody").innerHTML = content;
// }

var footballData = document.getElementById('matches');
var ourRequest = new XMLHttpRequest();
ourRequest.open("GET", "https://raw.githubusercontent.com/opendatajson/football.json/master/2014-15/at.1.json");

ourRequest.onload = function () {
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData)


};
ourRequest.send();


function renderHTML(data) {
    tr = '';

    for (i = 0; i < data.length; ++i) {
        var tr = "<tr>";
        tr += "<td>" + (i + 1) + "</td>";
        tr += "<td>" + data[i].key + "</td>";
        tr += "<td>" + data[i].round + "</td>";
        tr += "<td>" + data[i].code + "</td>";
        tr += "</tr>";
        content += tr;
    }

    footballData.insertAdjacentHTML('beforeend', htmlString)
}