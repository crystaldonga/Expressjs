const days = document.getElementById('day');
    const dates = document.getElementById('today_date');
    const cityName= document.getElementById('cityName');
    const submitBtn= document.getElementById('submitBtn');
    const city_name= document.getElementById('city_name');
    const temp= document.getElementById('temp');
    const temp_status= document.getElementById('temp_status');
    let d=new Array();
    d[0] = 'SUN';
    d[1] = 'MON';
    d[2] = 'TUE';
    d[3] = 'WEN';
    d[4] = 'THU';
    d[5] = 'FRI';
    d[6] = 'SAT';
    var months = [
                "JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
            ];

           
             
    let currday = new Date();
    days=d[currday.getDay()];
    days.innerText=days;
    dates.innerText=`${currday.getDate()} ${months[currday.getMonth()]}`;
    const getInfo=async(event)=>{
            event.preventDefault();
            
            let cityval = cityName.value;
            if(cityval===""){
                city_name.innerText='plz write the city name';
            }else{
              try{
      let url ="https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=7df34062b23801553372210fcaf711b0"

       const response = await fetch(url);
       const data =response.json();
       const arry = [data];
       temp.innerText=arry[0].main.temp;
      // temp_status.innerText=arry[0].weather[0].main
       city_name.innerText=`${arry[0].name}   ${arry[0].sys.contry}`
       let tempmod = arry[0].weather[0].main;
        if(tempmod =="Sunny"){
          temp_status.innerHTML = " <i class = 'fas fa-sun' style='color:#eccc68;'></i>";
        }else if(tempmod =="Clouds"){
          temp_status.innerHTML = " <i class = 'fas fa-cloud' style='color:#dfe4ea;'></i>";
        }else if(tempmod =="Rainy"){
          temp_status.innerHTML = " <i class = 'fas fa-cloud-rain' style='color:#a4b0be;'></i>"
        }else{
         temp_status.innerHTML = " <i class = 'fas fa-cloud' style='color:#44c3de;'></i>";
        }



            }
            
            catch{
              city_name.innerText='plz write the city name properly';
            }

            
    }
}
    submitBtn.addEventListener('click',getInfo)