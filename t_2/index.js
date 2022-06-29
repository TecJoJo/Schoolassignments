const emailEl = document.getElementById("email-el")
const pEl = document.getElementById("p-el")
const checkBtn = document.getElementById("check-btn")
const checkTarket = emailEl.value 

checkBtn.addEventListener("click",checkAtLetter)

function checkAtLetter(){
 if (checkTarket.includes("@")){
    console.log("there is a @")
 }else{
    console.log("ther is'nt a @")
 }

}