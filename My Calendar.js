var year_options = [];
for (var i = 1900; i <= 2100; i++){
  year_options.push({
    text: i.toString(),
    value: i});
}

var y_selected = document.getElementById("year_selected");
for(var i = 0; i <= year_options.length; i++){
  var y_option= year_options[i];
  y_selected.options.add(new Option(y_option.text,y_option.value,y_option.selected));
}


function lastYear(){
  var current_year= y_selected.options[y_selected.selectedIndex].value;
  var updated_year= --current_year;
  y_selected.options[y_selected.selectedIndex].value = updated_year;
  y_selected.options[y_selected.selectedIndex].text = updated_year.toString();
}

function nextYear(){
  var current_year= y_selected.options[y_selected.selectedIndex].value;
  var updated_year= ++current_year;
  y_selected.options[y_selected.selectedIndex].value = updated_year;
  y_selected.options[y_selected.selectedIndex].text = updated_year.toString();
}

/* create a datetable*/

function generateDateTable(){
  var dateTable = document.getElementById("dateTable");
  var rows = 5;
  var columns = 6;
  var
    tds = "<td>".repeat(columns),
    trs = ('<tr>'+tds).repeat(rows),
    table = "<table>" + trs + "</table>";

  dateTable.innerHTML= table;
  String.prototype.repeat = function( num ){
    return new Array( num + 1 ).join( this );
  }
  
}