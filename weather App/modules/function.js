export let i =1;
export let array=[];

export const addData=()=>{
    let API_KEY = `c7a9299a3d8da1d910da08bcffb48a3b`;
    let locationName = document.getElementById("inputValue").value;
    let url =`http://api.openweathermap.org/data/2.5/weather?q=${locationName}&appid=${API_KEY}`

    if(array.includes(locationName)===false){
            array.push(locationName);
    

    fetch(url).then((response) => response.json()).then((response)=>{
        loader(false)
        if (response.cod == 200){
            let table = document.getElementById("tableId");
                let row = table.insertRow(-1);
                let cell1 = row.insertCell(0);
                let cell2 = row.insertCell(1);
                let cell3 = row.insertCell(2);
                let cell4 = row.insertCell(3);
            
                cell1.innerHTML = i++;
                cell2.innerHTML = document.getElementById("inputValue").value;
                cell3.innerHTML = "<input type='submit' value='show'>"
                cell4.innerHTML = "<input type = 'submit' value='delete'>"

                cell3.addEventListener("click",function(){
                    let API_KEY = `c7a9299a3d8da1d910da08bcffb48a3b`;
                    let locationName = row.cells[1].innerHTML; 
                    let url =`http://api.openweathermap.org/data/2.5/weather?q=${locationName}&appid=${API_KEY}`;
                   
                    
                    loader(true)
                    fetch(url).then((response)=>response.json()).then((response)=>{
                        loader(false)
                        if(response.cod==200){
                            let temperature = response.main.temp - 273.15
                            let humidity = response.main.humidity
                            let locatName = response.name

                            showPopup(temperature, humidity , locatName)


                        }
                        else{
                            alert ("enter the correct location")
                        }
                    })

                })

                cell4.addEventListener("click",function(){
                    let data = cell4;
                    row.remove(data);

                    for(let i=array.length-1;i>=0;i--){
                        if(array[i]===locationName){
                            array.splice(i,1)
                        }
                    }

                    for(let i =1;i<table.rows.length;i++){
                        table.rows[i].cells[0].innerHTML=i;
                    }
                    i--;
                })
                
               

                

        }else{
            alert("no Location found in API")
        }

  
    })
}
else{
    alert("already exist");
}
}
    export const showPopup = (temp , hum , loc)=>{
        let locationName = document.getElementById("location")
        let temperature = document.getElementById("temperature")
        let humidity = document.getElementById("humidity")

        locationName.innerHTML = loc
        temperature.innerHTML = `Temperature: ${temp.toFixed(2)} c`
        humidity.innerHTML = `Humidity : ${hum}%`
        openPopup();
    }

    export const loader = (isloading)=>{
        let loader = document.getElementById("loader");
        if(isloading){
            loader.style.display = "block";
        }
        else{
            loader.style.display="none";
        }
    }
   
   
    let popup = document.getElementById("popup");
    let popupbg = document.getElementById("blurbg");


    export const openPopup = () =>{
        popup.style.display = "block";
        blurbg.style.display = "block";
    }
    export const closePopup =()=>{
        let popup = document.getElementById("popup");
        let blurbg = document.getElementById("blurbg");

        popup.style.display = "none";
        blurbg.style.display = "none";

    }
    window.addEventListener("click", (event) => {
        if (event.target == popupbg) {
            closePopup();
        }
    })




































