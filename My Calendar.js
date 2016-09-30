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
  var columns = 7;
  var
    tds = "<td>".repeat(columns),
    trs = ('<tr>'+tds).repeat(rows),
    table = "<table>" + trs + "</table>";

  dateTable.innerHTML= table;
  String.prototype.repeat = function( num ){
    return new Array( num + 1 ).join( this );
  }

  var today= new Date();
  var current_year= today.getFullYear();
  var current_month= today.getMonth();
  var first_day= new Date(current_year, current_month, 1);
  var first_day_day = first_day.getDay();

  var tdays_lastmonth = new Date(current_year, current_month, 0).getDate();
  var tdays_currentmonth = new Date(current_year, current_month+1, 0).getDate();
  var tdays_nextmonth = new Date(current_year, current_month+2, 0).getDate();

  function generateDaysArray (num){
    var days_array = [];
    for (var i=1;i<=num;i++){    
        days_array.push(i);
    }
    return days_array;
  } 

  var lastmonth = generateDaysArray(tdays_lastmonth);
  var currentmonth = generateDaysArray(tdays_currentmonth);
  var nextmonth = generateDaysArray(tdays_nextmonth);

  var cutoff1= lastmonth.slice(-first_day_day);
  var cutoff2= nextmonth.slice(0,35-first_day_day-tdays_currentmonth);

  var calendar_array = cutoff1.concat(currentmonth).concat(cutoff2);
  

  for(var i=0; i<=4;i++){
    for(var j=0; j<=6;j++){
        dateTable.childNodes[i].childNodes[j].innerHTML= calendar_array[7*i+j];
    } 
  }
}
  