// from data.js
var tableData = data;


// Select the button
var button = d3.select("#filter-btn");

button.on("click", function () {

    
    // Select the input elements and get the raw HTML node
    var dtInputElement = d3.select("#datetime");
    let cityInputElement = d3.select("#city");
    let stateInputElement = d3.select("#state");
    let countryInputElement = d3.select("#country");
    let shapeInputElement = d3.select("#shape");

    // Get the value property of the input elements
    var dtInputValue = dtInputElement.property("value");
    let cityInputValue = cityInputElement.property("value").trim().toLowerCase();
    let stateInputValue = stateInputElement.property("value").trim().toLowerCase();
    let countryInputValue = countryInputElement.property("value").trim().toLowerCase();
    let shapeInputValue = shapeInputElement.property("value").trim().toLowerCase();

    // Console.log the input filter selections (& tableData if needed for troubleshooting)
    console.log(`DT: ${dtInputValue}, CI: ${cityInputValue},  ST: ${stateInputValue},  CO: ${countryInputValue}, SH: ${shapeInputValue}`);
    // console.log(tableData);

    // Filter the signtingsData based on the input filter(s)
    var sightingsData = tableData.filter(sighting => sighting.datetime === dtInputValue);

    







    // Console.log the filtered sitings data
    console.log(sightingsData);

    // Select table body list element in the table
    var tbody = d3.select("tbody");

    // Clear any previous table data
    tbody.html("");

    // Update each cell's text w/ sightings values - i.e. fill out each table entry
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
