const celsiusEl = document.getElementById("celsius");
const type = document.getElementById("type");
const result = document.getElementById("result");

function computeTemp(){
    let degree =celsiusEl.value
        
    if(type.value==='Fahrenheit'){
        result.value=(degree  * 1.8 + 32).toFixed(2);
        }
        if(type.value==='Kelvin'){
            result.value=(degree  + 273.15).toFixed(2);
            }
    }
