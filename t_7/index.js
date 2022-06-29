const pEl = document.getElementById("p-el")
const rollBtn = document.getElementById("roll-btn")
let randomNumber = null

/*I know the priciple is use as less as possible DOM, but this maybe the easiest 
approach without creating a array, considering the total times of using the DOM 
for this exercise is not much anyway.*/ 


function roll() {
    pEl.textContent = "lottery numbers are:"
    for(i = 0;i < 7; i++){
    randomNumber = Math.floor(Math.random()*39+1)
    pEl.textContent += randomNumber + " "
    }
}

rollBtn.addEventListener("click",roll)

