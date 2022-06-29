

function loadImg1(){

    document.images[0].src ="img/fishing.jpg"
}

function loadImg2(){

    document.images[0].src ="img/night_cottage.jpg"
}

function loadWithDelay(){
    const timeout = setTimeout(loadImg1,2000)
    
    const timeout2 = setTimeout(loadImg2,2000)
}

// console.log(document.images[0].src)