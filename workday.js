
var sdk =window.sdk ||{};
function daywork() {
    var formatcontex= executionContext.getFormContext(); 
    var date = formatcontex.getAttribute('createdon').getValue(); 
    alert(date); 
}
     

     

function daysestimate(date, days) 
        {
        days= 3; 
        var date= formContext.getAttribute('createdon').getValue();
        var result= new Date (date); 
        result.setDate(result.getDate()+ days)
        return result; 
         alert(result);
        }

    

function BusinessDays(d, n) {
    // *** d = a date 
    // *** n = number of working days to increment by
     d = new Date(d.getTime());
     var day = d.getDay();
     d.setDate(d.getDate() + n + (day === 6 ? 2 : +!day) + (Math.floor((n - 1 + (day % 6 || 1)) / 5) * 2));
    return d;
   } // End function
   
   