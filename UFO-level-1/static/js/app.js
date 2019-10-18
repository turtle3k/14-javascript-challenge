// from data.js
var tableData = data;


// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

  // Console.log the filtered sitings data
  console.log(filteredData);
   
  // Select table body list element in the table
  var tbody = d3.select("tbody");

  // Use d3 to update each cell's tex w/ sitings values
  // ** put a forEach loop here to print write out each table entry
  filteredData.forEach(function(sitingsReport) {  
    var row = tbody.append("tr");
    Object.defineProperties(sitingsReport).forEach(function([key, value]) {
        console.log(key, value);
        //Append a cell to the row for each value in the siting report object
        var cell = row.append("td");
        cell.text(value);
    });
  });
  

});
