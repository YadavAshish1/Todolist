module.exports.getDate = getDate;

function getDate(){

let today = new Date();
/* let currentday = today.getDay();
   let day = "";

 switch (currentday){
   case 0:
       day = "Sunday";
       break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";


} */

let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
};
let day = today.toLocaleDateString("en-us",options);

return day;
}

module.exports.getDay = getDay;

function getDay(){

    let today = new Date();
    
    let options = {
        weekday: "long",
       
    };
    let day = today.toLocaleDateString("en-us",options);
    
    return day;
    }

    console.log(module.exports);