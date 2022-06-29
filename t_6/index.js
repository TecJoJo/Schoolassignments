const digitInput = document.getElementById("digit-input")
const pEl = document.getElementById("p-el")
const checkBtn = document.getElementById("check-btn")

let message = ""
function checkInput(numberString){
if (numberString.length === 5 && typeof(Number(numberString)) === "number" && !Number.isNaN(Number(numberString)) ){
        message = "Thanks you, have a nice day!"
}else{
    message ="Please input only 5 digits!"
}
}

checkBtn.addEventListener("click",function(){
    checkInput(digitInput.value)
    pEl.textContent = message
    
})




console.log()