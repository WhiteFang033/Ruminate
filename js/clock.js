function time(){
  
    var postfix;
    const arr_month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    
   const arr_day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];
  
    
    const d = new Date();
    var hour = d.getHours(); //fetching Hours
    var minute = d.getMinutes(); //fetching Minutes
    var day = arr_day[d.getDay()]; //fetching Day
    var date = d.getDate(); //fetching date
    var month = arr_month[d.getMonth()]; //fetching Month
    
    //Changing Time into 12hrs format
    if(hour<12)
      { postfix = "AM"
        if(hour<10)
          {
            hour = "0"+hour;
            
          }
      }
    else if(hour>=12)
      {
        postfix = "PM"
       if(hour<22)
         {
           hour = hour - 12;
           hour = "0" + hour;
         }
        else{
          hour = hour-12;
        }
      }
    
    if(minute<10)
      {
        minute = "0"+minute;
      }
     
    
    var current_time = hour+":"+minute+" "+postfix;
    document.getElementById("time_id").innerText = current_time; 
   
    var full_date= month+" "+date+", "+day
    document.getElementById("date_id").innerText = full_date;
    setTimeout(time, 1000)
  }
  time();


function salutation(){

    const d = new Date();
    let hour = d.getHours(); //fetching Hours
    console.log(hour)

    if(hour>=0 && hour<3){
      return 'Good Evening'
    }
    else if(hour>=3 && hour<12){
      return 'Good Morning'
    }
    else if(hour>=12 && hour<17){
      return 'Good Afternoon'
    }
    else if(hour>=17 && hour<24){
      return 'Good Evening'
    }
  
}