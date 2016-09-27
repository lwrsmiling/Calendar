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
  var updated_year= current_year-1;
  var updated_yeartxt= updated_year.toString();
  y_selected.options[y_selected.selectedIndex].value = updated_year;
  y_selected.options[y_selected.selectedIndex].text = updated_yeartxt;
}