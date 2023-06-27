import { addData , closePopup } from "./modules/function.js"

let weatherTextContainer = document.getElementById("weatherText")
let weatherTableContainer = document.getElementById("weatherTable")


fetch('./components/weatherText.html').then((response)=>response.text())
      .then((html)=>{
        weatherTextContainer.innerHTML = html

      })

fetch('./components/weatherTable.html').then((response)=>response.text())
      .then((html)=>{
        weatherTableContainer.innerHTML = html
      })

let value = document.getElementById("weatherText")
value.addEventListener("submit",(event)=>{
event.preventDefault();
addData();
          
})
let popup = document.getElementById("closeIcon")
popup.addEventListener("click",function (event){
  event.preventDefault();
  closePopup();

})