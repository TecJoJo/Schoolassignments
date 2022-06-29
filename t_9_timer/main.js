

class Timer{
    

    constructor(htmlElement) {
        htmlElement.innerHTML = Timer.defaultInterface()

        this.interval = null
        this.timeremainning = 90
      
        
        this.minutesEl = document.querySelector(".time-minutes")
        this.secondsEl = document.querySelector(".time-seconds")
        this.controlBtn = document.querySelector(".control-btn")

    
        
        console.log(this)
        this.controlBtn.addEventListener("click",function(){
            console.log(this)
         if(this.interval===null){
                this.start()
            }else{
                this.stop()
            }
        })
        
        
        
    }

   

    start(){

        
        this.controlBtn.innerHTML = `
        <span class="material-symbols-outlined play">
            pause
        </span>
        `
        
        this.interval = setInterval(() => {
            if(this.timeremainning>0){
                this.timeremainning -=1 
                
                this.renderToScreen()
            }
        }, 1000)
        
        
       
    }

    stop(){
        
    this.controlBtn.innerHTML = `
    <span class="material-symbols-outlined play">
        play_arrow
    </span>
    `
    clearInterval(this.interval)
    this.interval = null

    console.log("the stopwatch is already off!")
        
        
    }

 

    renderToScreen(){
        
        this.minutesEl.textContent =  Math.floor(this.timeremainning/60)
        this.secondsEl.textContent = this.timeremainning%60

    }
        
   
    static defaultInterface(){
        return `
    <div class="content">
        <span class="time-minutes">00</span>
        <span>:</span>
        <span class="time-seconds">00</span>

        <br>
        
        
        
        <button class="control-btn" type="button">
            <span class="material-symbols-outlined play">
                play_arrow
            </span>
        </button>
        <button class="reset-btn" type="button">
            <span class="material-symbols-outlined">
                timer
            </span>
        </button>

    </div>
        `
    }

    

    
}

const stopWatch = new Timer(document.querySelector(".content"))
stopWatch.controlBtn.addEventListener("click", function () {

    if (stopWatch.interval === null) {
        console.log("start!!!")
        stopWatch.start()
    } else {
        console.log("stop!!!")
        stopWatch.stop()
    }
})
