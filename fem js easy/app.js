

let container_1 = document.getElementById("container-1");
let container_2 = document.getElementById("container-2");

fetch("./components/container-1.html").then((response)=>response.text()).then((html)=>{

    container_1.innerHTML = html;

})

fetch("./components/container-2.html").then((response)=>response.text()).then((html)=>{
    container_2.innerHTML = html;
})

window.addEventListener("click",(event)=>{
    event.preventDefault();
    console.log("hello");
    if(event.target == submit){
        console.log("hello")
        checkEmail(document.getElementById("email"));
    }
})

function checkEmail(mailId){
    let invalid = document.getElementById("invalidtext");
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(mailId.value.match(mailformat))
{
showDetails(mailId);
}
else
{
invalid.style.display="block";

}
}
let popUp = document.getElementById("popup")
let popUpbg = document.getElementById("popupbg")

let showDetails=(mail)=>{
    let thankyouDescription = document.getElementById("successParagraph");
    let yourId = mail.value;
    thankyouDescription.innerHTML=`A confirmation email has been sent to ${yourId}. Please open it and click the button inside to confirm your subscription.` 
    openPopup();
}
function openPopup(){
    popUp.style.display = "block";
    popUpbg.style.display = "block";
}
function  closePopup (){
    let popUp = document.getElementById("popup");
    let popUpbg = document.getElementById("popupbg");

    popUp.style.display = "none";
    popUpbg.style.display = "none";

}
let closeBtn = document.getElementById("dismissMessage");
closeBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    closePopup();
})
window.addEventListener("click", (event) => {
    if (event.target == popUpbg) {
        closePopup();
    }
})

