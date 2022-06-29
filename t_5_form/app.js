const username = document.getElementById("username")
const emailAddress = document.getElementById("email-address")
const password = document.getElementById("password")
const passwordConfirmation = document.getElementById("password-confirmation")
const submit = document.getElementById("submit")
const inputField = [username,emailAddress,password,passwordConfirmation]






let validity = false

function checkEmpty(input) {
    if(input===""){
       
        validity = false
    }else{
        validity = true
    }
}



function identicalKeys(key1,key2){
    if (key1 !== key2 ){
        
        validity = false
    }else{
        validity = true
    }
}



submit.addEventListener("click",function(event){
    event.preventDefault()
    for (i=0; i < inputField.length; i++){
       checkEmpty(inputField[i].value)
       if (validity ===true){
            inputField[i].className = "right"
       }else{
            inputField[i].className = "wrong"
       }
       
    }
    identicalKeys(password.value,passwordConfirmation.value)
    if (validity ===true){
        if(passwordConfirmation.value==="" && password.value===""){
            passwordConfirmation.className = "wrong"
            password.className = "wrong"
        }
        else{
             passwordConfirmation.className = "right"
        }
       
   }else{
        passwordConfirmation.className = "wrong"
   }

})

