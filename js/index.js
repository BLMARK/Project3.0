var tableData = [];

getJson(
    "https://raw.githubusercontent.com/opendatajson/football.json/master/2014-15/at.1.clubs.json",
    function (data) {
        tableData = data.clubs;
        fillTable(tableData);
    }
);

function fillTable(rows) {
    var table = document.querySelector("table");
    var content = "";
    for (var i = 0; i < rows.length; i++) {
        var tr = "<tr>";
        tr += "<td>" + (i + 1) + "</td>";
        tr += "<td>" + rows[i].key + "</td>";
        tr += "<td>" + rows[i].name + "</td>";
        tr += "<td>" + rows[i].code + "</td>";
        tr += '<td><a class="btn btn-primary" href="match.html?code=' + rows[i].code + '">match</a></td>';
        tr += "</tr>";
        content += tr;
    }

    table.querySelector("tbody").innerHTML = content;
}

document.querySelector("#sort-btn").addEventListener("click", function () {
    tableData.sort(function (a, b) {
        if (!a.code) {
            return -1;
        } else if (!b.code) {
            return 1;
        }
        return a.code.localeCompare(b.code);
    });
    fillTable(tableData);
});