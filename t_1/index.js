function BMICalculator(weight,height){
    const BMI = weight/height**2
    
    return BMI


}


const weight = document.getElementById("weight")
const height = document.getElementById("height")
const calculateBtn = document.getElementById("calculate-btn")
const pEl = document.getElementById("p-el")

calculateBtn.addEventListener("click", function(){
    const BMI = BMICalculator(weight.value,height.value)

    pEl.innerHTML = `
    Your BMI is ${BMI}
    `
})