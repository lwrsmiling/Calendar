var today= new Date();
      var current_year= today.getFullYear();
      var current_month= today.getMonth();
      var dateTable = document.getElementById("dateTable");
      generateDateTable();
      

var year_options = [];
    for (var i = 1900; i <= 2100; i++){
      year_options.push({
        text: i.toString(),
        value: i});
    }
    
    var month_options = [];
    for (var i = 1; i <= 12; i++){
      month_options.push({
        text: i.toString(),
        value: i});
    }
   
var y_selection = document.getElementById("year_selection");
    for(var i = 0; i <year_options.length; i++){
      var y_option = document.createElement("option");
      y_option.text = year_options[i].text;
      y_option.value = year_options[i].value;
      y_selection.appendChild(y_option);
    }
var m_selection = document.getElementById("month_selection");   
    for(var i = 0; i < month_options.length; i++){     
      var m_option = document.createElement("option");
      m_option.text = month_options[i].text;
      m_option.value = month_options[i].value;
      m_selection.appendChild(m_option);
    }

    
    y_selection.selectedIndex= current_year-1900;
    m_selection.selectedIndex= current_month;
    var year_selected = y_selection.options[y_selection.selectedIndex].value;
    var month_selected = m_selection.options[m_selection.selectedIndex].value;
    newCalendar ();
    



function last(index){
  return --index; 
}

function next(index){
  return ++index;
  
}

var btn_lastyear= document.getElementById("lastyear");
btn_lastyear.onclick= function (){
  y_selection.selectedIndex = last(y_selection.selectedIndex);
  year_selected = y_selection.options[y_selection.selectedIndex].value;
  newCalendar ();
}
 
var btn_nextyear= document.getElementById("nextyear");
btn_nextyear.onclick= function (){
  y_selection.selectedIndex = next(y_selection.selectedIndex);
  year_selected = y_selection.options[y_selection.selectedIndex].value;
  newCalendar ();
} 

var btn_lastmonth= document.getElementById("lastmonth");
btn_lastmonth.onclick= function (){
  m_selection.selectedIndex = last(m_selection.selectedIndex);
  month_selected = m_selection.options[m_selection.selectedIndex].value;
  newCalendar ();
}
 
var btn_nextmonth= document.getElementById("nextmonth");
btn_nextmonth.onclick= function (){
  m_selection.selectedIndex = next(m_selection.selectedIndex);
  month_selected = m_selection.options[m_selection.selectedIndex].value;
  newCalendar ();
}

var btn_backtoToday = document.getElementById("today");
btn_backtoToday.onclick= function (){
  y_selection.selectedIndex= current_year-1900;
    m_selection.selectedIndex= current_month;
    year_selected = y_selection.options[y_selection.selectedIndex].value;
    month_selected = m_selection.options[m_selection.selectedIndex].value;
    newCalendar ();
}


  function generateDateTable(){
      
      var rows = 6;
      var columns = 7;
      var
        tds = "<td>".repeat(columns),
        trs = ('<tr>'+tds).repeat(rows),
        table = "<table>" + trs + "</table>";

      dateTable.innerHTML= table;
      String.prototype.repeat = function( num ){
        return new Array( num + 1 ).join( this );
      }

      
  }

  function newCalendar (){
      var first_day= new Date(year_selected , month_selected-1, 1);
      var first_day_day = first_day.getDay();

      var tdays_lastmonth = new Date(year_selected , month_selected, 0).getDate();
      var tdays_selectedmonth = new Date(year_selected , month_selected+1, 0).getDate();
      var tdays_nextmonth = new Date(year_selected, month_selected+2, 0).getDate();

      function generateDaysArray (num){
        var days_array = [];
        for (var i=1;i<=num;i++){    
            days_array.push(i);
        }
        return days_array;
      } 

      var lastmonth = generateDaysArray(tdays_lastmonth);
      var selectedmonth = generateDaysArray(tdays_selectedmonth);
      var nextmonth = generateDaysArray(tdays_nextmonth);

      var cutoff1= lastmonth.slice(-first_day_day);
      var cutoff2= nextmonth.slice(0,42-first_day_day-tdays_selectedmonth);

      var calendar_array = cutoff1.concat(selectedmonth).concat(cutoff2);
      

      for(var i=0; i<=5;i++){
        for(var j=0; j<=6;j++){
            dateTable.childNodes[i].childNodes[j].innerHTML= calendar_array[7*i+j];
        } 
      }

      var today = new Date();
      if (year_selected === today.getFullYear() && month_selected === today.getMonth()+1) {
        var today_index = selectedmonth.indexOf(today.getDate());
        var calendar_index = today_index + cutoff1.length;
      
  };

  }

/*choose your date

function newCalendar (){
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
      var cutoff2= nextmonth.slice(0,42-first_day_day-tdays_currentmonth);

      var calendar_array = cutoff1.concat(currentmonth).concat(cutoff2);
      

      for(var i=0; i<=5;i++){
        for(var j=0; j<=6;j++){
            dateTable.childNodes[i].childNodes[j].innerHTML= calendar_array[7*i+j];
        } 
      }

  }
*/


    



    
    


    

/*




/* create a datetable*/


  