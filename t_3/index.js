const urlEl = document.getElementById("URL-el")
const pEl = document.getElementById("p-el")
const checkBtn = document.getElementById("check-btn")
let disc = ""


checkBtn.addEventListener("click",function(){
   if(urlEl.value.slice(-2)=== "fi"){
      disc += "Tervetuloa "
      if (urlEl.value.slice(0,6) === "https:"){
         disc += "your protocal is HTTPS"
      } else{
         disc += "your protocal is HTTP"
      }
   }else{ 
      disc +="welcome "
      if(urlEl.value.slice(0,6) === "https:"){
      disc += "your protocal is HTTPS"
      }else{
         disc += "your protocal is HTTP"
      }
   }

   pEl.textContent = disc
   

   
})

