// from data.js
var tableData = data;


// Select the button
var button = d3.select("#filter-btn");

button.on("click", function () {

    // Clear any previous table data
    // tbody.innerHTML("");
    // tbody.html("");
    // $("#ufo-table").empty();
    // document.getElementById("ufo-table").innerHTML = "";

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var sightingsData = tableData.filter(sighting => sighting.datetime === inputValue);

    // Console.log the filtered sitings data
    console.log(sightingsData);

    // Select table body list element in the table
    var tbody = d3.select("tbody");

    // Use d3 to update each cell's text w/ sightings values
    // ** put a forEach loop here to print write out each table entry
    sightingsData.forEach(function (sightingsReport) {
        var row = tbody.append("tr");
        Object.entries(sightingsReport).forEach(function ([key, value]) {
            console.log(key, value);
            //Append a cell to the row for each value in the siting report object
            var cell = row.append("td");
            cell.text(value);
        });
    });


});
