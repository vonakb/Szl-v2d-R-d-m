const Hit = new Audio("Hit.mp3")
const MJ = new Audio("SlaveToTheRythym.webm")

Hit.volume = 0.5
MJ.volume = 0.1
function HangJatszo(audio, kezdoIdo = 0){
    audio.currentTime = kezdoIdo
    audio.play().catch(() => {})
}

function Game(left, up, down, right, mainDiv){
    HangJatszo(MJ, 25)
    
    mainDiv.innerHTML = ""
    let score = 80;
        
    
    //#region Nyilgenerálás
    const ArrowButtons = document.createElement("div")
    ArrowButtons.setAttribute("style", `
    position: fixed;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);

    display: flex;
    flex-direction: row;
    gap: 30px;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;`)
    if(!(left.includes("Arrow"))){
        const Arrow = document.createElement("div")
        Arrow.classList.add("arrow")
        const ArrowTEXT = document.createTextNode(`${left}`)
        Arrow.appendChild(ArrowTEXT)
        ArrowButtons.appendChild(Arrow)
    }
    else{
        const Arrow = document.createElement("div")
        Arrow.classList.add("arrow")
        Arrow.innerHTML = "&#8592;"
        ArrowButtons.appendChild(Arrow)
    }
    if(!(up.includes("Arrow"))){
        const Arrow = document.createElement("div")
        Arrow.classList.add("arrow")
        const ArrowTEXT = document.createTextNode(`${up}`)
        Arrow.appendChild(ArrowTEXT)
        ArrowButtons.appendChild(Arrow)
    }
    else{
        const Arrow = document.createElement("div")
        Arrow.classList.add("arrow")
        Arrow.innerHTML = "&#8593;"
        ArrowButtons.appendChild(Arrow)
    }
    if(!(down.includes("Arrow"))){
        const Arrow = document.createElement("div")
        Arrow.classList.add("arrow")
        const ArrowTEXT = document.createTextNode(`${down}`)
        Arrow.appendChild(ArrowTEXT)
        ArrowButtons.appendChild(Arrow)
    }
    else{
        const Arrow = document.createElement("div")
        Arrow.classList.add("arrow")
        Arrow.innerHTML = "&#8595;"
        ArrowButtons.appendChild(Arrow)
    }
    if(!(right.includes("Arrow"))){
        const Arrow = document.createElement("div")
        Arrow.classList.add("arrow")
        const ArrowTEXT = document.createTextNode(`${right}`)
        Arrow.appendChild(ArrowTEXT)
        ArrowButtons.appendChild(Arrow)
    }
    else{
        const Arrow = document.createElement("div")
        Arrow.classList.add("arrow")
        Arrow.innerHTML = "&#8594;"
        ArrowButtons.appendChild(Arrow)
    }
    mainDiv.appendChild(ArrowButtons)
    
    //#endregion
   

    //#region Zene
    const notes =  [

    //#region intro
    { nyil: 0, ido: 480 },
    { nyil: 2, ido: 480 },
    { nyil: 1, ido: 240 },
    { nyil: 3, ido: 240 },

    { nyil: 0, ido: 480 },
    { nyil: 1, ido: 480 },
    { nyil: 2, ido: 240 },
    { nyil: 3, ido: 240 },

    { nyil: 2, ido: 480 },
    { nyil: 0, ido: 240 },
    { nyil: 1, ido: 240 },
    { nyil: 3, ido: 480 },

    { nyil: 1, ido: 480 },
    { nyil: 2, ido: 240 },
    { nyil: 0, ido: 240 },
    { nyil: 3, ido: 480 },
    { nyil: 0, ido: 480 },
    { nyil: 2, ido: 480 },
    { nyil: 1, ido: 240 },
    { nyil: 3, ido: 240 },

    { nyil: 0, ido: 480 },
    { nyil: 1, ido: 480 },
    { nyil: 2, ido: 240 },
    { nyil: 3, ido: 240 },

    { nyil: 2, ido: 480 },
    { nyil: 0, ido: 240 },
    { nyil: 1, ido: 240 },
    { nyil: 3, ido: 480 },

    { nyil: 1, ido: 480 },
    { nyil: 2, ido: 240 },
    { nyil: 0, ido: 240 },
    { nyil: 3, ido: 480 },
    { nyil: 0, ido: 480 },
    { nyil: 2, ido: 480 },
    { nyil: 1, ido: 240 },
    { nyil: 3, ido: 240 },

    { nyil: 0, ido: 480 },
    { nyil: 1, ido: 480 },
    { nyil: 2, ido: 240 },
    { nyil: 3, ido: 240 },

    { nyil: 2, ido: 480 },
    { nyil: 0, ido: 240 },
    { nyil: 1, ido: 240 },
    { nyil: 3, ido: 480 },

    { nyil: 1, ido: 480 },
    { nyil: 2, ido: 240 },
    { nyil: 0, ido: 240 },
    { nyil: 3, ido: 480 },
    { nyil: 0, ido: 480 },
    { nyil: 2, ido: 480 },
    { nyil: 1, ido: 240 },
    { nyil: 3, ido: 240 },

    { nyil: 0, ido: 480 },
    { nyil: 1, ido: 480 },
    { nyil: 2, ido: 240 },
    { nyil: 3, ido: 240 },

    { nyil: 2, ido: 480 },
    { nyil: 0, ido: 240 },
    { nyil: 1, ido: 240 },
    { nyil: 3, ido: 480 },

    { nyil: 1, ido: 480 },
    { nyil: 2, ido: 240 },
    { nyil: 0, ido: 240 },
    { nyil: 3, ido: 1000 },
    //#endregion
    //#region verse1

    { nyil: 2, ido: 480},
    { nyil: 0, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 2, ido: 480},
    { nyil: 3, ido: 480},
    { nyil: 2, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 0, ido: 480},
    { nyil: 2, ido: 480},
    { nyil: 0, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 3, ido: 480},
    { nyil: 1, ido: 1020},
    //8000

    { nyil: 3, ido: 480},
    { nyil: 2, ido: 480},
    { nyil: 0, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 0, ido: 480},
    { nyil: 2, ido: 480},
    { nyil: 0, ido: 480},
    { nyil: 3, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 2, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 2, ido: 1020},
    //7240
    { nyil: 0, ido: 500},
    { nyil: 3, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 3, ido: 480},
    { nyil: 2, ido: 480},
    { nyil: 2, ido: 480},
    { nyil: 0, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 3, ido: 480},
    { nyil: 2, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 2, ido: 480},
    { nyil: 0, ido: 500},
    { nyil: 2, ido: 1020},
    //7780
    { nyil: 2, ido: 480},
    { nyil: 3, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 0, ido: 480},
    { nyil: 2, ido: 480},
    { nyil: 2, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 3, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 3, ido: 480},
    { nyil: 0, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 0, ido: 480},
    { nyil: 2, ido: 1200},
    //7920
    //#endregion
    //#region SZLÉV 2 DÖ RÍDÖM

    { nyil: 1, ido: 480},
    { nyil: 2, ido: 240},
    { nyil: 2, ido: 240},
    { nyil: 0, ido: 480},
    { nyil: 2, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 3, ido: 240},
    { nyil: 3, ido: 480},
    { nyil: 0, ido: 240},
    { nyil: 3, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 2, ido: 240},
    { nyil: 2, ido: 240},
    { nyil: 0, ido: 480},
    { nyil: 2, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 3, ido: 240},
    { nyil: 3, ido: 480},
    { nyil: 0, ido: 240},
    { nyil: 3, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 2, ido: 240},
    { nyil: 0, ido: 480},
    { nyil: 2, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 3, ido: 240},
    { nyil: 3, ido: 480},
    { nyil: 0, ido: 240},
    { nyil: 3, ido: 480},
    { nyil: 0, ido: 480},
    { nyil: 2, ido: 480},
    { nyil: 1, ido: 240},
    { nyil: 1, ido: 240},
    { nyil: 2, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 1, ido: 240},
    { nyil: 1, ido: 480},
    { nyil: 1, ido: 240},
    { nyil: 2, ido: 480},
    { nyil: 0, ido: 480},

    { nyil: 1, ido: 480},
    { nyil: 2, ido: 240},
    { nyil: 2, ido: 240},
    { nyil: 0, ido: 480},
    { nyil: 2, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 3, ido: 240},
    { nyil: 3, ido: 480},
    { nyil: 0, ido: 240},
    { nyil: 3, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 2, ido: 240},
    { nyil: 2, ido: 240},
    { nyil: 0, ido: 480},
    { nyil: 2, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 3, ido: 240},
    { nyil: 3, ido: 480},
    { nyil: 0, ido: 240},
    { nyil: 3, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 2, ido: 240},
    { nyil: 0, ido: 480},
    { nyil: 2, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 3, ido: 240},
    { nyil: 3, ido: 480},
    { nyil: 0, ido: 240},
    { nyil: 3, ido: 480},
    { nyil: 0, ido: 480},
    { nyil: 2, ido: 480},
    { nyil: 1, ido: 240},
    { nyil: 1, ido: 240},
    { nyil: 2, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 1, ido: 240},
    { nyil: 1, ido: 480},
    { nyil: 1, ido: 240},
    { nyil: 2, ido: 900},
//#endregion

//#region  verse 2
    { nyil: 0, ido: 480},
    { nyil: 0, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 3, ido: 480},
    { nyil: 3, ido: 480},
    { nyil: 2, ido: 480},
    { nyil: 0, ido: 480},
    { nyil: 2, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 3, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 0, ido: 480},
    { nyil: 1, ido: 1020},
    //8000

    { nyil: 3, ido: 480},
    { nyil: 3, ido: 480},
    { nyil: 0, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 0, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 2, ido: 480},
    { nyil: 0, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 2, ido: 480},
    { nyil: 3, ido: 480},
    { nyil: 0, ido: 480},
    { nyil: 3, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 0, ido: 1020},
    //7240
    { nyil: 0, ido: 500},
    { nyil: 3, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 3, ido: 480},
    { nyil: 2, ido: 480},
    { nyil: 2, ido: 480},
    { nyil: 0, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 3, ido: 480},
    { nyil: 2, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 2, ido: 480},
    { nyil: 0, ido: 500},
    { nyil: 2, ido: 1020},
    //7780
    { nyil: 2, ido: 480},
    { nyil: 3, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 3, ido: 480},
    { nyil: 3, ido: 480},
    { nyil: 0, ido: 240},
    { nyil: 1, ido: 240},
    { nyil: 2, ido: 240},
    { nyil: 3, ido: 240},
    { nyil: 1, ido: 480},
    { nyil: 3, ido: 480},
    { nyil: 0, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 0, ido: 480},
    { nyil: 2, ido: 1100},
//#endregion
//#region SZLÉV 2 DÖ RIDÖM
    { nyil: 1, ido: 480},
    { nyil: 2, ido: 240},
    { nyil: 2, ido: 240},
    { nyil: 0, ido: 480},
    { nyil: 2, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 3, ido: 240},
    { nyil: 3, ido: 480},
    { nyil: 0, ido: 240},
    { nyil: 3, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 2, ido: 240},
    { nyil: 2, ido: 240},
    { nyil: 0, ido: 480},
    { nyil: 2, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 3, ido: 240},
    { nyil: 3, ido: 480},
    { nyil: 0, ido: 240},
    { nyil: 3, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 2, ido: 240},
    { nyil: 0, ido: 480},
    { nyil: 2, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 3, ido: 240},
    { nyil: 3, ido: 480},
    { nyil: 0, ido: 240},
    { nyil: 3, ido: 480},
    { nyil: 0, ido: 480},
    { nyil: 2, ido: 480},
    { nyil: 1, ido: 240},
    { nyil: 1, ido: 240},
    { nyil: 2, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 1, ido: 240},
    { nyil: 1, ido: 480},
    { nyil: 1, ido: 240},
    { nyil: 2, ido: 480},
    { nyil: 0, ido: 840},

    { nyil: 1, ido: 480},
    { nyil: 2, ido: 240},
    { nyil: 2, ido: 240},
    { nyil: 0, ido: 480},
    { nyil: 2, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 3, ido: 240},
    { nyil: 3, ido: 480},
    { nyil: 0, ido: 240},
    { nyil: 3, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 2, ido: 240},
    { nyil: 2, ido: 240},
    { nyil: 0, ido: 480},
    { nyil: 2, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 3, ido: 240},
    { nyil: 3, ido: 480},
    { nyil: 0, ido: 240},
    { nyil: 3, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 2, ido: 240},
    { nyil: 0, ido: 480},
    { nyil: 2, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 3, ido: 240},
    { nyil: 3, ido: 480},
    { nyil: 0, ido: 240},
    { nyil: 3, ido: 480},
    { nyil: 0, ido: 480},
    { nyil: 2, ido: 480},
    { nyil: 1, ido: 240},
    { nyil: 1, ido: 240},
    { nyil: 2, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 1, ido: 240},
    { nyil: 1, ido: 480},
    { nyil: 1, ido: 240},
    { nyil: 2, ido: 800},
//#endregion
//#region verse3elod
    { nyil: 1, ido: 0},
    { nyil: 0, ido: 480},
    { nyil: 2, ido: 0},
    { nyil: 3, ido: 480},
    { nyil: 0, ido: 0},
    { nyil: 3, ido: 480},
    { nyil: 1, ido: 0},
    { nyil: 0, ido: 480},
    { nyil: 2, ido: 0},
    { nyil: 3, ido: 480},
    { nyil: 0, ido: 0},
    { nyil: 3, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 0, ido: 480},
    { nyil: 2, ido: 480},
    { nyil: 3, ido: 0},
    { nyil: 0, ido: 0},
    { nyil: 3, ido: 480},
    { nyil: 2, ido: 480},
    { nyil: 0, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 2, ido: 480},
    { nyil: 3, ido: 480},
    { nyil: 2, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 0, ido: 480},
    { nyil: 2, ido: 480},
    { nyil: 1, ido: 0},
    { nyil: 0, ido: 480},
    { nyil: 2, ido: 0},
    { nyil: 3, ido: 480},
    { nyil: 0, ido: 0},
    { nyil: 3, ido: 480},
    { nyil: 1, ido: 0},
    { nyil: 0, ido: 480},
    { nyil: 2, ido: 0},
    { nyil: 3, ido: 480},
    { nyil: 0, ido: 0},
    { nyil: 3, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 0, ido: 480},
    { nyil: 2, ido: 480},
    { nyil: 3, ido: 0},
    { nyil: 0, ido: 0},
    { nyil: 2, ido: 480},
    { nyil: 3, ido: 0},
    { nyil: 0, ido: 0},
    { nyil: 2, ido: 480},
    { nyil: 3, ido: 0},
    { nyil: 0, ido: 1200},

//#endregion

//#region verse3
    {nyil: 0, ido: 240},
    { nyil: 0, ido: 240},
    { nyil: 1, ido: 240},
    { nyil: 3, ido: 240},
    { nyil: 3, ido: 240},
    { nyil: 2, ido: 240},
    { nyil: 0, ido: 240},
    { nyil: 2, ido: 240},
    { nyil: 1, ido: 240},
    { nyil: 3, ido: 240},
    { nyil: 1, ido: 240},
    { nyil: 0, ido: 240},
    {nyil: 0, ido: 240},
    { nyil: 0, ido: 240},
    { nyil: 1, ido: 240},
    { nyil: 3, ido: 240},
    { nyil: 3, ido: 240},
    { nyil: 2, ido: 240},
    { nyil: 0, ido: 240},
    { nyil: 2, ido: 240},
    { nyil: 1, ido: 240},
    { nyil: 3, ido: 240},
    { nyil: 1, ido: 240},
    { nyil: 0, ido: 240},
    { nyil: 1, ido: 1020},
    //8000

    { nyil: 3, ido: 480},
    { nyil: 3, ido: 480},
    { nyil: 0, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 0, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 2, ido: 480},
    { nyil: 0, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 2, ido: 480},
    { nyil: 3, ido: 480},
    { nyil: 0, ido: 480},
    { nyil: 3, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 0, ido: 1020},
    //7240

    { nyil: 0, ido: 500},
    { nyil: 3, ido: 120},
    { nyil: 3, ido: 120},
    { nyil: 3, ido: 120},
    { nyil: 3, ido: 120},
    { nyil: 1, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 3, ido: 480},
    { nyil: 2, ido: 480},
    { nyil: 2, ido: 480},
    { nyil: 0, ido: 480},
    { nyil: 3, ido: 480},
    { nyil: 1, ido: 120},
    { nyil: 1, ido: 120},
    { nyil: 1, ido: 120},
    { nyil: 1, ido: 120},
    { nyil: 2, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 2, ido: 480},
    { nyil: 0, ido: 500},
    { nyil: 2, ido: 1020},
    //7780
    { nyil: 2, ido: 480},
    { nyil: 3, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 3, ido: 480},
    { nyil: 3, ido: 480},
    { nyil: 0, ido: 240},
    { nyil: 1, ido: 240},
    { nyil: 2, ido: 240},
    { nyil: 3, ido: 240},
    { nyil: 1, ido: 480},
    { nyil: 3, ido: 480},
    { nyil: 0, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 0, ido: 480},
    { nyil: 2, ido: 1100},
    { nyil: 2, ido: 1000},
   
//#endregion
//#region SZLÉV 2 DÖ RYTHIM
{ nyil: 1, ido: 480},
    { nyil: 2, ido: 240},
    { nyil: 2, ido: 240},
    { nyil: 0, ido: 480},
    { nyil: 2, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 3, ido: 240},
    { nyil: 3, ido: 480},
    { nyil: 0, ido: 240},
    { nyil: 3, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 2, ido: 240},
    { nyil: 2, ido: 240},
    { nyil: 0, ido: 480},
    { nyil: 2, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 3, ido: 240},
    { nyil: 3, ido: 480},
    { nyil: 0, ido: 240},
    { nyil: 3, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 2, ido: 240},
    { nyil: 0, ido: 480},
    { nyil: 2, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 3, ido: 240},
    { nyil: 3, ido: 480},
    { nyil: 0, ido: 240},
    { nyil: 3, ido: 480},
    { nyil: 0, ido: 480},
    { nyil: 2, ido: 480},
    { nyil: 1, ido: 240},
    { nyil: 1, ido: 240},
    { nyil: 2, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 1, ido: 240},
    { nyil: 1, ido: 480},
    { nyil: 1, ido: 240},
    { nyil: 2, ido: 480},
    { nyil: 0, ido: 480},

    { nyil: 1, ido: 480},
    { nyil: 2, ido: 240},
    { nyil: 2, ido: 240},
    { nyil: 0, ido: 480},
    { nyil: 2, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 3, ido: 240},
    { nyil: 3, ido: 480},
    { nyil: 0, ido: 240},
    { nyil: 3, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 2, ido: 240},
    { nyil: 2, ido: 240},
    { nyil: 0, ido: 480},
    { nyil: 2, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 3, ido: 240},
    { nyil: 3, ido: 480},
    { nyil: 0, ido: 240},
    { nyil: 3, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 2, ido: 240},
    { nyil: 0, ido: 480},
    { nyil: 2, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 3, ido: 240},
    { nyil: 3, ido: 480},
    { nyil: 0, ido: 240},
    { nyil: 3, ido: 480},
    { nyil: 0, ido: 480},
    { nyil: 2, ido: 480},
    { nyil: 1, ido: 240},
    { nyil: 1, ido: 240},
    { nyil: 2, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 1, ido: 240},
    { nyil: 1, ido: 480},
    { nyil: 1, ido: 240},
    { nyil: 2, ido: 900},
//#endregion

//#endregion
    ]
    const scoreDiv = document.createElement("div")
    scoreDiv.innerHTML = score
    scoreDiv.id = "scoreDiv"
    mainDiv.appendChild(scoreDiv)
    const activeNotes = []
    let combo = 1
    let elapsedTime = 0
    let gameOver = false;

    function endGame() {
        if (gameOver) return;

        gameOver = true;
        MJ.pause();

        alert("GAME OVER! Próbáld újra!");

        mainDiv.innerHTML = "";
        mainTitle();
    }
    function WinGame(song) {
        song.addEventListener("ended", () => {
        if (gameOver) return;

        gameOver = true;

        window.alert(
            "Gratulálok, végigvitted. Elért pontszámod: " + Math.round(score * combo)
        );

        mainDiv.innerHTML = "";
        mainTitle();
    }, { once: true });  
    }
    
    function checkHit(lane) {
            const targetArrow = ArrowButtons.children[lane];
            const targetRect = targetArrow.getBoundingClientRect();
            const targetY = targetRect.top + targetRect.height / 2;

            const candidates = activeNotes.filter(note =>
                note.lane === lane &&
                !note.hit &&
                note.active
            );
        
            
            let closestNote = null;
            let smallestDistance = Infinity;
        
            for (const note of candidates) {
                const rect = note.element.getBoundingClientRect();
                const noteY = rect.top + rect.height / 2;
                const distance = Math.abs(noteY - targetY);
            
                if (distance < smallestDistance) {
                    smallestDistance = distance;
                    closestNote = note;
                }
            }
            
            
            if (closestNote && smallestDistance <= 35) {
                closestNote.hit = true;
                closestNote.element.remove();
            
                const index = activeNotes.indexOf(closestNote);
                if (index !== -1) {
                    activeNotes.splice(index, 1);
                }
            
                console.log("PERFECT!!!");
                score += 20
                combo += 0.1
                HangJatszo(Hit)
            } 
            else if (closestNote && smallestDistance >= 35 && smallestDistance <= 80){
                closestNote.hit = true;
                closestNote.element.remove();
            
                const index = activeNotes.indexOf(closestNote);
                if (index !== -1) {
                    activeNotes.splice(index, 1);
                }
                console.log("MID!")
                score += 10
                combo += 0.1
                HangJatszo(Hit)
            }
            
            
            else {
                console.log("MISS!");
                score -= 20
                combo = 1
                 if (score < 0) {
                    endGame();
                    return;
                }
            }
            scoreDiv.innerHTML = Math.round(score * combo)
        }
     document.addEventListener("keydown", (event) => {
        if(event.repeat) return
        if (event.key === left) {
            ArrowButtons.children[0].classList.add("active")
            checkHit(0);
        }
        if (event.key === up) {
            ArrowButtons.children[1].classList.add("active")
            checkHit(1);
        }
        if (event.key === down) {
            ArrowButtons.children[2].classList.add("active")
            checkHit(2);
        }
        if (event.key === right) {
            ArrowButtons.children[3].classList.add("active")
            checkHit(3);
        }

    })
    document.addEventListener("keyup", (event) =>{
        if (event.key === left) {
            ArrowButtons.children[0].classList.remove("active")
            
        }
        if (event.key === up) {
            ArrowButtons.children[1].classList.remove("active")
            
        }
        if (event.key === down) {
            ArrowButtons.children[2].classList.remove("active")
            
        }
        if (event.key === right) {
            ArrowButtons.children[3].classList.remove("active")
        }


    })
    
    for (let i = 0; i < notes.length; i++) {
        const noteData = notes[i]
        const note = document.createElement("div")
        note.classList.add("note")
        let position = -100;
        let lastTime = null;
        if(noteData.nyil === 0) note.innerHTML = "&#8592"
        if(noteData.nyil === 1) note.innerHTML = "&#8593"
        if(noteData.nyil === 2) note.innerHTML = "&#8595"
        if(noteData.nyil === 3) note.innerHTML = "&#8594"
        note.style.left = ArrowButtons.children[noteData.nyil].getBoundingClientRect().left
        + ArrowButtons.children[noteData.nyil].getBoundingClientRect().width / 2 + "px";
        const speed = 1000; // pixel / másodperc

        function moveNote(currentTime) {
            if (lastTime === null) {
                lastTime = currentTime;
            }
            const deltaTime = (currentTime - lastTime) / 1000;
            lastTime = currentTime;

             position += speed * deltaTime;
             note.style.top = position + "px";

             if (position < window.innerHeight) {
    requestAnimationFrame(moveNote);
} else {
    note.remove();

    const index = activeNotes.findIndex(
        activeNote => activeNote.element === note
    );

    if (index !== -1) {
        const missedNote = activeNotes[index];

        // Ha még nem találta el a játékos
        if (!missedNote.hit && !gameOver) {
            score -= 20;
            combo = 1;

            console.log("MISSED NOTE!");

            scoreDiv.innerHTML = Math.round(score * combo);

            // Ha mínuszba kerül a pontszám, vége a játéknak
            if (score < 0) {
                endGame();
                return;
            }
        }

        activeNotes.splice(index, 1);
    }
}
        }
        
        setTimeout(() => {
            if(activeNote.hit) return;

            note.style.visibility = "visible";
            activeNote.active = true
            
            requestAnimationFrame(moveNote);
            
        } , elapsedTime)
        note.style.visibility = "hidden"
        mainDiv.appendChild(note)
        const activeNote = {
            element: note,
            lane: noteData.nyil,
            hit: false,
            active: false
        }
        activeNotes.push(activeNote)
        elapsedTime += noteData.ido
        
        
    }
    WinGame(MJ)
    
    

//#endregion
//#region 

}











function mainTitle() {
    const mainDiv = document.createElement("div")
    const h1 = document.createElement("h1")
    const h1Text = document.createTextNode("Szlév 2 dö Rídöm")
    h1.appendChild(h1Text)
    h1.setAttribute("style", "font-size: 8em; max-width: 250px; margin: left;")

    const buttons = document.createElement("div")
    buttons.setAttribute("style", "display: flex; flex-direction: column;")

    const playButton = document.createElement("div")
    playButton.classList.add("button")
    const playButtonTEXT = document.createTextNode("PLAY")
    playButton.appendChild(playButtonTEXT)
    playButton.addEventListener("click", () => {Game("ArrowLeft", "ArrowUp", "ArrowDown", "ArrowRight", mainDiv);})


    const settingsButton = document.createElement("div")
    settingsButton.classList.add("button")
    const settingsButtonTEXT = document.createTextNode("SETTINGS")
    settingsButton.appendChild(settingsButtonTEXT)
    settingsButton.addEventListener("click", () => {
        return "ArrowLeft", "ArrowUp", "ArrowDown", "ArrowRight"
    })
    buttons.appendChild(playButton) 
    buttons.appendChild(settingsButton)
    
    
    
    mainDiv.appendChild(h1)
    mainDiv.appendChild(buttons)
    document.body.appendChild(mainDiv)
    mainDiv.classList.add("mainDiv")


}
mainTitle()