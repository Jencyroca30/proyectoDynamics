
////////////////////////////////////////////////
//author: Ing. Jency Roca  date:26-08-2020
//Dependencies: moment.js //event:Onchange sales Deparment
var IntelDay = window.sdk  || {};
function dayWork(executionContext) {
    var newDate; 
    
    var formatcontext= executionContext.getFormContext(); 
    var date = formatcontext.getAttribute('createdon').getValue();
    var eDate=formatcontext.getAttribute('intel_dateestimate').getValue();
    if (eDate!=null) { 
        if (date===null) {
            var d =  Date.now(); 
            console.log("FECHA DE HOY", d); 
            date = d; 
        }
            var x = moment(date).format('dddd');
            if (x==="Wednesday" || x==="Thursday" || x==="Friday") {
               newDate= moment(date).add('days', 5).format();
            } else{
                newDate= moment(date).add('days', 3).format();
            }
          
            var dayFormat= new Date (newDate); 
            
            formatcontext.getAttribute('intel_dateestimate').setValue(dayFormat);
             
        
            console.log('**************************************************');
            console.log('CRM FECHA', date, typeof(date));
            console.log ('FORMATEADA FECHA', newDate); 
           
            console.log('**************************************************');
        
        
    
        }    
    }



