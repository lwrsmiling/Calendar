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