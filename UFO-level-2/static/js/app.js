// from data.js
let tableData = data;


// Select the button
let button = d3.select("#filter-btn");

button.on("click", function () {

    
    // Select the input elements and get the raw HTML node
    let dtInputElement = d3.select("#datetime");
    let cityInputElement = d3.select("#city");
    let stateInputElement = d3.select("#state");
    let countryInputElement = d3.select("#country");
    let shapeInputElement = d3.select("#shape");

    // Get the value property of the input elements
    let dtInputValue = dtInputElement.property("value");
    let cityInputValue = cityInputElement.property("value").trim().toLowerCase();
    let stateInputValue = stateInputElement.property("value").trim().toLowerCase();
    let countryInputValue = countryInputElement.property("value").trim().toLowerCase();
    let shapeInputValue = shapeInputElement.property("value").trim().toLowerCase();

    // Console.log the input filter selections (& tableData if needed for troubleshooting)
    console.log(`Date: ${dtInputValue}, City: ${cityInputValue},  State: ${stateInputValue},  Country: ${countryInputValue}, Shape: ${shapeInputValue}`);
    // console.log(tableData);

    // Filter the signtingsData based on the input filter(s)
    //var sightingsData = tableData.filter(sighting => sighting.datetime === dtInputValue);
    let sightingsData = []

    // Check if a filter Date was entered.  if not, return the whole dataset.
    if (dtInputValue !== "") {
        sightingsData = tableData.filter(sighting => sighting.datetime === dtInputValue);
    } else {
        sightingsData = tableData;
    };
    // Check if a City filter was entered.
    if (cityInputValue !== "") {
        sightingsData = sightingsData.filter(sighting => sighting.city === cityInputValue);
    };
    // Check if a State filter was entered.
    if (stateInputValue !== "") {
        sightingsData = sightingsData.filter(sighting => sighting.state === stateInputValue);
    };
    // Check if a Country filter was entered.
    if (countryInputValue !== "") {
        sightingsData = sightingsData.filter(sighting => sighting.country === countryInputValue);
    };
    // Check if a Shape filter was entered.
    if (shapeInputValue !== "") {
        sightingsData = sightingsData.filter(sighting => sighting.shape === shapeInputValue);
    };



    // Console.log the filtered sightings data
    console.log(sightingsData);

    // Select table body list element in the table
    let tbody = d3.select("tbody");

    // Clear any previous table data
    tbody.html("");

    // Update each cell's text w/ sightings values - i.e. fill out each table entry
    sightingsData.forEach(function (sightingsReport) {
        let row = tbody.append("tr");
        Object.entries(sightingsReport).forEach(function ([key, value]) {
            console.log(key, value);
            //Append a cell to the row for each value in the sighting report object
            let cell = row.append("td");
            cell.text(value);
        });
    });


});
