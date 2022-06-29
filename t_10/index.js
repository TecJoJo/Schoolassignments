const h1El = document.querySelector(".h1")
const h2El = document.querySelector(".h2")
const changeStyleBtn = document.querySelector("#change-style")


changeStyleBtn.addEventListener("click",changeColor)

function changeColor(){
    h1El.classList.add("swap")
    h2El.classList.add("swap")
}
