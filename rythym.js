const Hit = new Audio("Hit.mp3")
const MJ = new Audio("SlaveToTheRythym.webm")
const tut = new Audio("tutorial.mp3")
const FingerBurner = new Audio("Acid Burner.webm")
Hit.volume = 0.3
MJ.volume = 0.1
tut.volume = 0.5
FingerBurner.volume = 0.1
function HangJatszo(audio, kezdoIdo = 0){
    audio.currentTime = kezdoIdo
    audio.play().catch(() => {})
}
function songSelector(mainDiv, left, up, down, right) {
    mainDiv.innerHTML = `<div class="uiverse-pixel-radio-group">
  <label class="uiverse-pixel-radio">
    <input type="radio" name="pixel-choice"  />
    <span class="label-text">Tutorial</span>
  </label>
  <label class="uiverse-pixel-radio">
    <input type="radio" name="pixel-choice" />
    <span class="label-text">OUT OF ORDER</span>
  </label>
  <label class="uiverse-pixel-radio">
    <input type="radio" name="pixel-choice" />
    <span class="label-text">Slave To The Rhythm - Michael Jackson</span>
  </label>
  <label class="uiverse-pixel-radio">
    <input type="radio" name="pixel-choice" checked=""/>
    <span class="label-text">Finger Burner</span>
  </label>
</div>
`
    const radiok = document.querySelectorAll(".uiverse-pixel-radio")
    const descriptionDiv = document.createElement("div")
    descriptionDiv.classList.add("description")
    const playGombDiv= document.createElement("div")
    playGombDiv.classList.add("button")
    
    mainDiv.appendChild(descriptionDiv)
    mainDiv.appendChild(playGombDiv)
   
    
    let zene = null 
    function descriptionUpdate() {
        let description = ""
        for (const element of radiok) {
        const input = element.querySelector(`input[type="radio"]`)
        if (input.checked) {
            const szoveg = element.querySelector("span").textContent.trim();
            zene = szoveg
            playGombDiv.textContent = "Play: " + szoveg
            
            if (szoveg === "Tutorial") {
                description = "Minecraft vagy Elden Ring? Mindegy milyen játék, de mindig érdemes ezzel kezdeni hogy megtudd mi vár rád a jövőben.";
            } 
            else if (szoveg === "OUT OF ORDER") {
                description = "Majd kitalálom";
            } 
            else if (szoveg === "Slave To The Rhythm - Michael Jackson") {
                description = "Heheeee ;) ";
            }
            else if (szoveg === "Finger Burner") {
                description = "Ujjakra vigyázni (a mentálra is)";
            }


            
            
            descriptionDiv.textContent = description
            const vissza = document.createElement("div")
            vissza.innerHTML = "Vissza"
            vissza.classList.add("button")
            vissza.setAttribute("style", "width: 200px;")
            vissza.addEventListener("click", () => {mainTitle()} )
            descriptionDiv.appendChild(vissza)

            break;
    
        }
        
    }
     
    
    }
    playGombDiv.addEventListener("click", () => {
        Game(left, up, down, right , mainDiv, zene)
    })
    descriptionUpdate()

    radiok.forEach(element => {
        element.querySelector(`input[type="radio"]`).addEventListener("change", ()=> {descriptionUpdate()})


    });
    
        
            





}

function Game(left = "ArrowLeft", up = "ArrowUp", down = "ArrowDown", right = "ArrowRight", mainDiv, Zene){ //"ArrowLeft", "ArrowUp", "ArrowDown", "ArrowRight", mainDiv
    let notes = []
    let song = null
    //#region Dzsekszon
    if (Zene === "Slave To The Rhythm - Michael Jackson") {
        HangJatszo(MJ, 25)
        song = MJ
            notes =  [

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
    { nyil: 1, ido: 0, tipus: "kill"},
    { nyil: 0, ido: 480},
    { nyil: 2, ido: 0, tipus: "kill"},
    { nyil: 3, ido: 480},
    { nyil: 0, ido: 0, tipus: "kill"},
    { nyil: 3, ido: 480},
    { nyil: 1, ido: 0, tipus: "kill"},
    { nyil: 0, ido: 480},
    { nyil: 2, ido: 0, tipus: "kill"},
    { nyil: 3, ido: 480},
    { nyil: 0, ido: 0, tipus: "kill"},
    { nyil: 3, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 0, ido: 480},
    { nyil: 2, ido: 480, tipus: "kill"},
    { nyil: 3, ido: 0},
    { nyil: 0, ido: 0, tipus: "kill"},
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
    { nyil: 1, ido: 240, tipus: "kill"},
    { nyil: 3, ido: 240},
    { nyil: 3, ido: 240},
    { nyil: 2, ido: 240, tipus: "kill"},
    { nyil: 0, ido: 240},
    { nyil: 2, ido: 240, tipus: "kill"},
    { nyil: 1, ido: 240},
    { nyil: 3, ido: 240, tipus: "kill"},
    { nyil: 1, ido: 240},
    { nyil: 0, ido: 240, tipus: "kill"},
    {nyil: 0, ido: 240},
    { nyil: 0, ido: 240, tipus: "kill"},
    { nyil: 1, ido: 240},
    { nyil: 3, ido: 240, tipus: "kill"},
    { nyil: 3, ido: 240},
    { nyil: 2, ido: 240, tipus: "kill"},
    { nyil: 0, ido: 240},
    { nyil: 2, ido: 240, tipus: "kill"},
    { nyil: 1, ido: 240},
    { nyil: 3, ido: 240, tipus: "kill"},
    { nyil: 1, ido: 240},
    { nyil: 0, ido: 240, tipus: "kill"},
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
    { nyil: 3, ido: 600, tipus: "hold", hossz: 480},
    { nyil: 1, ido: 480},
    { nyil: 1, ido: 480},
    { nyil: 3, ido: 480},
    { nyil: 2, ido: 480},
    { nyil: 2, ido: 480},
    { nyil: 0, ido: 480},
    { nyil: 3, ido: 480},
    { nyil: 1, ido: 600, tipus: "hold", hossz: 480},
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


    ]
    
    }
//#endregion
//#region Tutorial
    else if(Zene === "Tutorial"){
        song = tut
        HangJatszo(tut)
        notes = [
            {nyil: 0, ido: -32750},
            {nyil: 2, ido: 3100},
            {nyil: 3, ido: 700},
            {nyil: 1, ido: 700},
            
            {nyil: 2, ido: 3300},
            {nyil: 3, ido: 700},
            {nyil: 1, ido: 700},
            {nyil: 0, ido: 700},
            {nyil: 2, ido: 400},
            {nyil: 1, ido: 700},
            {nyil: 0, ido: 400},
            {nyil: 2, ido: 700},
            {nyil: 1, ido: 400},
            
            {nyil: 2, ido: 2000},
            {nyil: 2, ido: 500},
            {nyil: 3, ido: 1000},
            {nyil: 1, ido: 1000},
            
            {nyil: 0, ido: 2000},
            //
            {nyil: 3, ido: 700},
            {nyil: 1, ido: 700},
            {nyil: 2, ido: 3800},
            
            {nyil: 3, ido: 700},
            {nyil: 1, ido: 700},
            {nyil: 2, ido: 3800},
            
            {nyil: 3, ido: 700},
            {nyil: 1, ido: 700},
            {nyil: 2, ido: 3700},
            
            {nyil: 3, ido: 700},
            {nyil: 1, ido: 700},
            {nyil: 2, ido: 700},
            {nyil: 1, ido: 700},
            {nyil: 2, ido: 700},
            {nyil: 1, ido: 1000},
            
            {nyil: 2, ido: 900},
            {nyil: 0, ido: 2000},
            {nyil: 0, ido: 500},
            {nyil: 1, ido: 500},
            {nyil: 2, ido: 500},
            {nyil: 3, ido: 500},
            {nyil: 0, ido: 500},
            
            {nyil: 2, ido: 1000},
            {nyil: 0, ido: 2000},
            {nyil: 3, ido: 500},
            {nyil: 2, ido: 500},
            {nyil: 1, ido: 500},
            {nyil: 0, ido: 500},
            {nyil: 3, ido: 400},
            
            {nyil: 2, ido: 800},
            {nyil: 0, ido: 2000},
            {nyil: 3, ido: 500},
            {nyil: 2, ido: 500},
            {nyil: 1, ido: 500},
            {nyil: 0, ido: 500},
            {nyil: 0, ido: 300},

            {nyil: 0, ido: 500},
            {nyil: 0, ido: 500},
            {nyil: 2, ido: 500},
            {nyil: 2, ido: 500},
            {nyil: 1, ido: 500},
            {nyil: 1, ido: 500},
            {nyil: 3, ido: 500},
            {nyil: 3, ido: 500},
            {nyil: 0, ido: 2400},
            
            {nyil: 1, ido: 700},
            {nyil: 3, ido: 700},
            {nyil: 2, ido: 3500},
            
            {nyil: 0, ido: 700},
            {nyil: 2, ido: 700},
            {nyil: 1, ido: 3500},

            
            {nyil: 3, ido: 700},
            {nyil: 1, ido: 700},
            {nyil: 0, ido: 700},
            {nyil: 2, ido: 400},
            {nyil: 1, ido: 700},
            {nyil: 0, ido: 400},
            {nyil: 2, ido: 700},
            {nyil: 1, ido: 400},





        ]
    }

//#endregion
//#region Finger Burner
else if(Zene === "Finger Burner"){
    song = FingerBurner
    HangJatszo(FingerBurner)
    notes =  [
        {ido: -3800},
        //#region első stack
        {nyil: 0, ido: 400},
        {nyil: 1, ido: 300},
        {nyil: 0, ido: 300},
        {nyil: 2, ido: 250},
        {nyil: 1, ido: 250},
        {nyil: 1, ido: 100},
        {nyil: 0, ido: 300},
        

        {nyil: 0, ido: 400},
        {nyil: 1, ido: 300},
        {nyil: 0, ido: 300},
        {nyil: 2, ido: 200},
        {nyil: 1, ido: 200},
        {nyil: 1, ido: 300},
        {nyil: 0, ido: 300},

        {nyil: 0, ido: 400},
        {nyil: 1, ido: 300},
        {nyil: 0, ido: 200},
        {nyil: 2, ido: 150},
        {nyil: 1, ido: 100},

        {nyil: 1, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 3, ido: 100},
        {nyil: 1, ido: 100},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 3, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 500},

//#endregion

//#region 2. stack

        {nyil: 0, ido: 400},
        {nyil: 1, ido: 300},
        {nyil: 0, ido: 300},
        {nyil: 2, ido: 300},
        {nyil: 0, ido: 300},
        

        {nyil: 0, ido: 400},
        {nyil: 1, ido: 300},
        {nyil: 0, ido: 300},
        {nyil: 2, ido: 300},
        {nyil: 1, ido: 300},
        {nyil: 1, ido: 300},
        {nyil: 0, ido: 300},

        {nyil: 0, ido: 400},
        {nyil: 1, ido: 300},
        {nyil: 0, ido: 200},
        {nyil: 2, ido: 250},
        {nyil: 0, ido: 200},
        {nyil: 2, ido: 150},
        {nyil: 1, ido: 100},

        {nyil: 1, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 3, ido: 100},
        {nyil: 1, ido: 100},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 3, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 500},

//#endregion

//#region 3.stack
        {nyil: 0, ido: 400},
        {nyil: 1, ido: 300},
        {nyil: 0, ido: 300},
        {nyil: 2, ido: 300},
        {nyil: 0, ido: 300},
        

        {nyil: 0, ido: 400},
        {nyil: 1, ido: 300},
        {nyil: 0, ido: 300},
        {nyil: 2, ido: 300},
        {nyil: 1, ido: 300},
        {nyil: 1, ido: 300},
        {nyil: 0, ido: 300},

        {nyil: 0, ido: 400},
        {nyil: 1, ido: 300},
        {nyil: 0, ido: 200},
        {nyil: 2, ido: 250},
        {nyil: 0, ido: 200},
        {nyil: 2, ido: 150},
        {nyil: 1, ido: 100},

        {nyil: 1, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 3, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 3, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 100},


//#endregion

//#region Go Crazy
        {nyil: 1, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 100, tipus: "kill"},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 1, ido: 50},
        {nyil: 2, ido: 100},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 1, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 1, ido: 100},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 100, tipus: "kill"},
        {nyil: 2, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 1, ido: 100},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 50, tipus: "kill"},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 2, ido: 100},
        {nyil: 0, ido: 100, tipus: "kill"},
        {nyil: 2, ido: 100},
        {nyil: 1, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50},
        {nyil: 1, ido: 100, tipus: "kill"},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50},
//#endregion

//#region Go Crazier
        {nyil: 1, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 3, ido: 100}, // 500
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50},
        {nyil: 3, ido: 100}, // 500
        {nyil: 0, ido: 100, tipus: "kill"},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 1, ido: 50},
        {nyil: 3, ido: 100}, // 400
        {nyil: 2, ido: 100},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 3, ido: 100},  // 250
        {nyil: 1, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 3, ido: 100}, // 250
        {nyil: 2, ido: 100},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 100},
        {nyil: 3, ido: 100}, // 400
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 100, tipus: "kill"},
        {nyil: 2, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 3, ido: 100}, // 500
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 3, ido: 100}, // 250
        {nyil: 1, ido: 100},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 3, ido: 100}, // 250
        {nyil: 0, ido: 50, tipus: "kill"},




        {nyil: 1, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 3, ido: 100}, // 500
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50},
        {nyil: 3, ido: 100}, // 500
        {nyil: 0, ido: 100, tipus: "kill"},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 1, ido: 50},
        {nyil: 3, ido: 100}, // 400
        {nyil: 2, ido: 100},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 3, ido: 100},  // 250
        {nyil: 1, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 3, ido: 100}, // 250
        {nyil: 2, ido: 100},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 100},
        {nyil: 3, ido: 100}, // 400
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 100, tipus: "kill"},
        {nyil: 2, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 3, ido: 100}, // 500
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 3, ido: 100}, // 250
        {nyil: 1, ido: 100},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 3, ido: 100}, // 250
        {nyil: 0, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50},
        {nyil: 3, ido: 100}, // 500
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50},
        {nyil: 3, ido: 100}, // 500
        {nyil: 0, ido: 100, tipus: "kill"},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 1, ido: 50},
        {nyil: 3, ido: 100}, // 400
        {nyil: 2, ido: 100},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 3, ido: 100},  // 250
        {nyil: 1, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 3, ido: 100}, // 250
        {nyil: 2, ido: 100},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 100},
        {nyil: 3, ido: 100}, // 400
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 100, tipus: "kill"},
        {nyil: 2, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 3, ido: 100}, // 500
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 3, ido: 100}, // 250
        {nyil: 1, ido: 100},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 3, ido: 100}, // 250
        {nyil: 0, ido: 50, tipus: "kill"},
        
        
        
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50},
         {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50},
         {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50},



        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50},
         {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50},
         {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50},
//#endregion


//#region  EVEN CRAZIER

        {nyil: 1, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 100, tipus: "kill"},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 1, ido: 50},
        {nyil: 2, ido: 100},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 1, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 1, ido: 100},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 100, tipus: "kill"},
        {nyil: 2, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 1, ido: 100},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 50, tipus: "kill"},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 2, ido: 100},
        {nyil: 0, ido: 100, tipus: "kill"},
        {nyil: 2, ido: 100},
        {nyil: 1, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50},
        {nyil: 1, ido: 100, tipus: "kill"},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50},
        {nyil: 1, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 100, tipus: "kill"},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 1, ido: 50},
        {nyil: 2, ido: 100},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 1, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 1, ido: 100},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 100, tipus: "kill"},
        {nyil: 2, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 1, ido: 100},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 50, tipus: "kill"},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 2, ido: 100},
        {nyil: 0, ido: 100, tipus: "kill"},
        {nyil: 2, ido: 100},
        {nyil: 1, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50},
        {nyil: 1, ido: 100, tipus: "kill"},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50},
        {nyil: 1, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50},
        {nyil: 1, ido: 100},
         {nyil: 2, ido: 100},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 1, ido: 100},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 50, tipus: "kill"},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 2, ido: 100},
        {nyil: 0, ido: 100, tipus: "kill"},
        {nyil: 2, ido: 100},
        {nyil: 1, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 0, ido: 50},
         {nyil: 1, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50},
        {nyil: 1, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 2, ido: 100},
        {nyil: 1, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50},
        {nyil: 1, ido: 100, tipus: "kill"},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50},
        {nyil: 1, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 100, tipus: "kill"},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 1, ido: 50},
        {nyil: 2, ido: 100},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 1, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 1, ido: 100},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 100, tipus: "kill"},
        {nyil: 2, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 1, ido: 100},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 50, tipus: "kill"},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 2, ido: 100},
        {nyil: 0, ido: 100, tipus: "kill"},
        {nyil: 2, ido: 100},
        {nyil: 1, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50},
        {nyil: 1, ido: 100, tipus: "kill"},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 50},
//#endregion

//#region  BAM BAM Rész

        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 2, ido: 100},
        {nyil: 0, ido: 100, tipus: "kill"},
        {nyil: 2, ido: 100},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 1, ido: 100},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 3, ido: 100}, //1000
        {nyil: 2, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 3, ido: 100}, // 500
        {nyil: 2, ido: 100},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 1, ido: 100},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 50, tipus: "kill"},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50},
        {nyil: 1, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 3, ido: 100}, // 1000
        {nyil: 2, ido: 100},
        {nyil: 0, ido: 100, tipus: "kill"},
        {nyil: 2, ido: 100},
        {nyil: 1, ido: 50},
        {nyil: 3, ido: 100}, // 500
        {nyil: 0, ido: 50},
         {nyil: 1, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50},
        {nyil: 1, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 3, ido: 100}, // 1000
        {nyil: 1, ido: 50},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 3, ido: 100}, // 500
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 2, ido: 100},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 100},
        {nyil: 0, ido: 100},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 3, ido: 100}, //1000
        {nyil: 2, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50},
        {nyil: 1, ido: 100},
        {nyil: 3, ido: 100}, // 500
        {nyil: 2, ido: 100},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 1, ido: 100},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 50, tipus: "kill"},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 3, ido: 100}, // 1000
        {nyil: 2, ido: 100},
        {nyil: 0, ido: 100, tipus: "kill"},
        {nyil: 2, ido: 100},
        {nyil: 3, ido: 100}, // 500
        {nyil: 0, ido: 50},
         {nyil: 1, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50},
        {nyil: 1, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 3, ido: 100}, // 1000
        {nyil: 1, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 3, ido: 100}, // 500
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 2, ido: 100},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 100},
        {nyil: 0, ido: 100},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 0, ido: 50},
        
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 100},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 3, ido: 100}, //1000
        {nyil: 2, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50},
        {nyil: 1, ido: 100},
        {nyil: 3, ido: 100}, // 500
        {nyil: 2, ido: 100},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 1, ido: 100},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 50, tipus: "kill"},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 3, ido: 100}, // 1000
        {nyil: 2, ido: 100},
        {nyil: 0, ido: 100, tipus: "kill"},
        {nyil: 2, ido: 100},
        {nyil: 1, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 3, ido: 100}, // 500
        {nyil: 0, ido: 50},
         {nyil: 1, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50},
        {nyil: 1, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 3, ido: 100}, // 1000
        {nyil: 1, ido: 50},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 3, ido: 100}, // 500
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 2, ido: 100},
        {nyil: 1, ido: 400},
        
//#endregion
//#region Chilly vibes
    {nyil: 2, ido: 0},
    {nyil: 3, ido: 0},
    {nyil: 0, ido: 0, tipus: "kill"},
    {nyil: 1, ido: 400, tipus: "kill"},

    {nyil: 0, ido: 0},
    {nyil: 1, ido: 0},
    {nyil: 2, ido: 0, tipus: "kill"},
    {nyil: 3, ido: 400, tipus: "kill"},

    {nyil: 1, ido: 0},
    {nyil: 3, ido: 0},
    {nyil: 2, ido: 0, tipus: "kill"},
    {nyil: 0, ido: 400, tipus: "kill"},

    {nyil: 0, ido: 0},
    {nyil: 1, ido: 0},
    {nyil: 2, ido: 0, tipus: "kill"},
    {nyil: 3, ido: 400, tipus: "kill"},

    {nyil: 3, ido: 0},
    {nyil: 2, ido: 0},
    {nyil: 1, ido: 0, tipus: "kill"},
    {nyil: 0, ido: 400, tipus: "kill"},

    {nyil: 2, ido: 0},
    {nyil: 0, ido: 0},
    {nyil: 3, ido: 0, tipus: "kill"},
    {nyil: 1, ido: 400, tipus: "kill"},
    
    {nyil: 3, ido: 0},
    {nyil: 2, ido: 0},
    {nyil: 1, ido: 0, tipus: "kill"},
    {nyil: 0, ido: 400, tipus: "kill"},

    {nyil: 2, ido: 0},
    {nyil: 3, ido: 0},
    {nyil: 0, ido: 0, tipus: "kill"},
    {nyil: 1, ido: 400, tipus: "kill"},

    {nyil: 0, ido: 0},
    {nyil: 1, ido: 0},
    {nyil: 2, ido: 0, tipus: "kill"},
    {nyil: 3, ido: 400, tipus: "kill"},

    {nyil: 1, ido: 0},
    {nyil: 3, ido: 0},
    {nyil: 2, ido: 0, tipus: "kill"},
    {nyil: 0, ido: 400, tipus: "kill"},

    {nyil: 0, ido: 0},
    {nyil: 1, ido: 0},
    {nyil: 2, ido: 0, tipus: "kill"},
    {nyil: 3, ido: 400, tipus: "kill"},

    {nyil: 3, ido: 0},
    {nyil: 2, ido: 0},
    {nyil: 1, ido: 0, tipus: "kill"},
    {nyil: 0, ido: 400, tipus: "kill"},

    {nyil: 2, ido: 0},
    {nyil: 0, ido: 0},
    {nyil: 3, ido: 0, tipus: "kill"},
    {nyil: 1, ido: 400, tipus: "kill"},
    
    {nyil: 3, ido: 0},
    {nyil: 2, ido: 0},
    {nyil: 1, ido: 0, tipus: "kill"},
    {nyil: 0, ido: 400, tipus: "kill"},
    
    
    
    
    {nyil: 2, ido: 0},
    {nyil: 3, ido: 0},
    {nyil: 0, ido: 0, tipus: "kill"},
    {nyil: 1, ido: 400, tipus: "kill"},

    {nyil: 0, ido: 0},
    {nyil: 1, ido: 0},
    {nyil: 2, ido: 0, tipus: "kill"},
    {nyil: 3, ido: 400, tipus: "kill"},

    {nyil: 1, ido: 0},
    {nyil: 3, ido: 0},
    {nyil: 2, ido: 0, tipus: "kill"},
    {nyil: 0, ido: 400, tipus: "kill"},

    {nyil: 0, ido: 0},
    {nyil: 1, ido: 0},
    {nyil: 2, ido: 0, tipus: "kill"},
    {nyil: 3, ido: 400, tipus: "kill"},

    {nyil: 3, ido: 0},
    {nyil: 2, ido: 0},
    {nyil: 1, ido: 0, tipus: "kill"},
    {nyil: 0, ido: 400, tipus: "kill"},

    {nyil: 2, ido: 0},
    {nyil: 0, ido: 0},
    {nyil: 3, ido: 0, tipus: "kill"},
    {nyil: 1, ido: 400, tipus: "kill"},
    
    {nyil: 3, ido: 0},
    {nyil: 2, ido: 0},
    {nyil: 1, ido: 0, tipus: "kill"},
    {nyil: 0, ido: 400, tipus: "kill"},

    {nyil: 2, ido: 0},
    {nyil: 3, ido: 0},
    {nyil: 0, ido: 0, tipus: "kill"},
    {nyil: 1, ido: 400, tipus: "kill"},

    {nyil: 0, ido: 0},
    {nyil: 1, ido: 0},
    {nyil: 2, ido: 0, tipus: "kill"},
    {nyil: 3, ido: 400, tipus: "kill"},

    {nyil: 1, ido: 0},
    {nyil: 3, ido: 0},
    {nyil: 2, ido: 0, tipus: "kill"},
    {nyil: 0, ido: 400, tipus: "kill"},

    {nyil: 0, ido: 0},
    {nyil: 1, ido: 0},
    {nyil: 2, ido: 0, tipus: "kill"},
    {nyil: 3, ido: 400, tipus: "kill"},

    {nyil: 3, ido: 0},
    {nyil: 2, ido: 0},
    {nyil: 1, ido: 0, tipus: "kill"},
    {nyil: 0, ido: 400, tipus: "kill"},

    {nyil: 2, ido: 0},
    {nyil: 0, ido: 0},
    {nyil: 3, ido: 0, tipus: "kill"},
    {nyil: 1, ido: 400, tipus: "kill"},
    
    {nyil: 3, ido: 0},
    {nyil: 2, ido: 0},
    {nyil: 1, ido: 0, tipus: "kill"},
    {nyil: 0, ido: 400, tipus: "kill"},

    {nyil: 0, ido: 0},
    {nyil: 1, ido: 0},
    {nyil: 2, ido: 0, tipus: "kill"},
    {nyil: 3, ido: 400, tipus: "kill"},

    {nyil: 3, ido: 0},
    {nyil: 2, ido: 0},
    {nyil: 1, ido: 0, tipus: "kill"},
    {nyil: 0, ido: 400, tipus: "kill"},

    {nyil: 2, ido: 0},
    {nyil: 0, ido: 0},
    {nyil: 3, ido: 0, tipus: "kill"},
    {nyil: 1, ido: 400, tipus: "kill"},
    
    {nyil: 3, ido: 0},
    {nyil: 2, ido: 0},
    {nyil: 1, ido: 0, tipus: "kill"},
    {nyil: 0, ido: 400, tipus: "kill"},

    {nyil: 2, ido: 0},
    {nyil: 0, ido: 0},
    {nyil: 3, ido: 0, tipus: "kill"},
    {nyil: 1, ido: 400, tipus: "kill"},
    
    {nyil: 3, ido: 0},
    {nyil: 2, ido: 0},
    {nyil: 1, ido: 0, tipus: "kill"},
    {nyil: 0, ido: 400, tipus: "kill"},

//#endregion

//#region crazy buildup
        {nyil: 1, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 3, ido: 100}, // 500
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50},
        {nyil: 3, ido: 100}, // 500
        {nyil: 0, ido: 100, tipus: "kill"},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 1, ido: 50},
        {nyil: 3, ido: 100}, // 400
        {nyil: 2, ido: 100},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 3, ido: 100},  // 250
        {nyil: 1, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 3, ido: 100}, // 250
        {nyil: 2, ido: 100},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 100},
        {nyil: 3, ido: 100}, // 400
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 100, tipus: "kill"},
        {nyil: 2, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 3, ido: 100}, // 500
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 3, ido: 100}, // 250
        {nyil: 1, ido: 100},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 3, ido: 100}, // 250
        {nyil: 0, ido: 50, tipus: "kill"},

        {nyil: 1, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 3, ido: 100}, // 500
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50},
        {nyil: 3, ido: 100}, // 500
        {nyil: 0, ido: 100, tipus: "kill"},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 1, ido: 50},
        {nyil: 3, ido: 100}, // 400
        {nyil: 2, ido: 100},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 3, ido: 100},  // 250
        {nyil: 1, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 3, ido: 100}, // 250
        {nyil: 2, ido: 100},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 100},
        {nyil: 3, ido: 100}, // 400
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 100, tipus: "kill"},
        {nyil: 2, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 3, ido: 100}, // 500
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 3, ido: 100}, // 250
        {nyil: 1, ido: 100},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 3, ido: 100}, // 250
        {nyil: 0, ido: 50, tipus: "kill"},
        

        {nyil: 1, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 3, ido: 100}, // 500
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50},
        {nyil: 3, ido: 100}, // 500
        {nyil: 0, ido: 100, tipus: "kill"},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 1, ido: 50},
        {nyil: 3, ido: 100}, // 400
        {nyil: 2, ido: 100},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 3, ido: 100},  // 250
        {nyil: 1, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 3, ido: 100}, // 250
        {nyil: 2, ido: 100},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 100},
        {nyil: 3, ido: 100}, // 400
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 100, tipus: "kill"},
        {nyil: 2, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 3, ido: 100}, // 500
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 3, ido: 100}, // 250
        {nyil: 1, ido: 100},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 3, ido: 100}, // 250
        {nyil: 0, ido: 50, tipus: "kill"},

        {nyil: 1, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 3, ido: 100}, // 500
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50},
        {nyil: 3, ido: 100}, // 500
        {nyil: 0, ido: 100, tipus: "kill"},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 1, ido: 50},
        {nyil: 3, ido: 100}, // 400
        {nyil: 2, ido: 100},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 3, ido: 100},  // 250
        {nyil: 1, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 3, ido: 100}, // 250
        {nyil: 2, ido: 100},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 100},
        {nyil: 3, ido: 100}, // 400
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 100, tipus: "kill"},
        {nyil: 2, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 3, ido: 100}, // 500
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 3, ido: 100}, // 250
        {nyil: 1, ido: 100},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 3, ido: 100}, // 250
        {nyil: 0, ido: 50, tipus: "kill"},

        {nyil: 1, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 3, ido: 100}, // 500
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50},
        {nyil: 3, ido: 100}, // 500
        {nyil: 0, ido: 100, tipus: "kill"},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 1, ido: 50},
        {nyil: 3, ido: 100}, // 400
        {nyil: 2, ido: 100},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 3, ido: 100},  // 250
        {nyil: 1, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 3, ido: 100}, // 250
        {nyil: 2, ido: 100},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 100},
        {nyil: 3, ido: 100}, // 400
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 100, tipus: "kill"},
        {nyil: 2, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 3, ido: 100}, // 500
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 3, ido: 100}, // 250
        {nyil: 1, ido: 100},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 3, ido: 100}, // 250
        {nyil: 0, ido: 50, tipus: "kill"},

        {nyil: 1, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 3, ido: 100}, // 500
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50},
        {nyil: 3, ido: 100}, // 500
        {nyil: 0, ido: 100, tipus: "kill"},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 1, ido: 50},
        {nyil: 3, ido: 100}, // 400
        {nyil: 2, ido: 100},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 3, ido: 100},  // 250
        {nyil: 1, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 3, ido: 100}, // 250
        {nyil: 2, ido: 100},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 100},
        {nyil: 3, ido: 100}, // 400
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 100, tipus: "kill"},
        {nyil: 2, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 3, ido: 100}, // 500
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 3, ido: 100}, // 250
        {nyil: 1, ido: 100},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 3, ido: 100}, // 250
        {nyil: 0, ido: 50, tipus: "kill"},
        

        {nyil: 1, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 3, ido: 100}, // 500
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50},
        {nyil: 3, ido: 100}, // 500
        {nyil: 0, ido: 100, tipus: "kill"},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 1, ido: 50},
        {nyil: 3, ido: 100}, // 400
        {nyil: 2, ido: 100},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 3, ido: 100},  // 250
        {nyil: 1, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 3, ido: 100}, // 250
        {nyil: 2, ido: 100},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 100},
        {nyil: 3, ido: 100}, // 400
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 100, tipus: "kill"},
        {nyil: 2, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 3, ido: 100}, // 500
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 3, ido: 100}, // 250
        {nyil: 1, ido: 100},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 3, ido: 100}, // 250
        {nyil: 0, ido: 50, tipus: "kill"},

        {nyil: 1, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 3, ido: 100}, // 500
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50},
        {nyil: 3, ido: 100}, // 500
        {nyil: 0, ido: 100, tipus: "kill"},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 100, tipus: "kill"},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 1, ido: 500},

//#endregion

//#region Szlalomozás
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 3, ido: 50},
        {nyil: 0, ido: 50, tipus: "kill"},
        {nyil: 1, ido: 50, tipus: "kill"},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 3, ido: 200, tipus: "kill"},

        {nyil: 3, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 3, ido: 50, tipus: "kill"},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 1, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 200, tipus: "kill"},

        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 3, ido: 50},
        {nyil: 0, ido: 50, tipus: "kill"},
        {nyil: 1, ido: 50, tipus: "kill"},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 3, ido: 200, tipus: "kill"},

        {nyil: 3, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 3, ido: 50, tipus: "kill"},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 1, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 200, tipus: "kill"},

        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 3, ido: 50},
        {nyil: 0, ido: 50, tipus: "kill"},
        {nyil: 1, ido: 50, tipus: "kill"},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 3, ido: 200, tipus: "kill"},

        {nyil: 3, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 3, ido: 50, tipus: "kill"},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 1, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 200, tipus: "kill"},

        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 3, ido: 50},
        {nyil: 0, ido: 50, tipus: "kill"},
        {nyil: 1, ido: 50, tipus: "kill"},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 3, ido: 200, tipus: "kill"},

        {nyil: 3, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 3, ido: 50, tipus: "kill"},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 1, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 200, tipus: "kill"},

        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 3, ido: 50},
        {nyil: 0, ido: 50, tipus: "kill"},
        {nyil: 1, ido: 50, tipus: "kill"},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 3, ido: 200, tipus: "kill"},

        {nyil: 3, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 3, ido: 50, tipus: "kill"},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 1, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 200, tipus: "kill"},

        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 3, ido: 50},
        {nyil: 0, ido: 50, tipus: "kill"},
        {nyil: 1, ido: 50, tipus: "kill"},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 3, ido: 200, tipus: "kill"},

        {nyil: 3, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 3, ido: 50, tipus: "kill"},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 1, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 400, tipus: "kill"},


        
        

//#endregion
    
//#region Easy Vibes
        {nyil: 0, ido: 200, tipus: "hold", hossz: 100 },
        {nyil: 1, ido: 500, tipus: "hold", hossz: 100 },
        {nyil: 2, ido: 100},
        {nyil: 0, ido: 200 },
        {nyil: 3, ido: 300  },
        {nyil: 1, ido: 100  },
        {nyil: 1, ido: 100  },
        {nyil: 1, ido: 300  },

        {nyil: 0, ido: 200, tipus: "hold", hossz: 100 },
        {nyil: 1, ido: 500, tipus: "hold", hossz: 100 },
        {nyil: 2, ido: 100},
        {nyil: 3, ido: 300  },
        {nyil: 1, ido: 100  },
        {nyil: 1, ido: 100  },
        {nyil: 1, ido: 300  },

        {nyil: 0, ido: 200, tipus: "hold", hossz: 100 },
        {nyil: 1, ido: 500, tipus: "hold", hossz: 100 },
        {nyil: 2, ido: 100},
        {nyil: 3, ido: 300  },
        {nyil: 1, ido: 100  },
        {nyil: 1, ido: 100  },
        {nyil: 1, ido: 300  },


        {nyil: 0, ido: 200, tipus: "hold", hossz: 100 },
        {nyil: 1, ido: 500, tipus: "hold", hossz: 100 },
        {nyil: 2, ido: 100},
        {nyil: 3, ido: 300  },
        {nyil: 1, ido: 100  },
        {nyil: 1, ido: 100  },
        {nyil: 1, ido: 300  },

        {nyil: 0, ido: 200, tipus: "hold", hossz: 100 },
        {nyil: 1, ido: 500, tipus: "hold", hossz: 100 },
        {nyil: 2, ido: 100},
        {nyil: 3, ido: 300  },
        {nyil: 1, ido: 100  },
        {nyil: 1, ido: 100  },
        {nyil: 1, ido: 300  },

        {nyil: 0, ido: 200, tipus: "hold", hossz: 100 },
        {nyil: 1, ido: 500, tipus: "hold", hossz: 100 },
        {nyil: 2, ido: 100},
        {nyil: 3, ido: 300  },
        {nyil: 1, ido: 100  },
        {nyil: 1, ido: 100  },
        {nyil: 1, ido: 300  },

        {nyil: 0, ido: 200, tipus: "hold", hossz: 100 },
        {nyil: 1, ido: 500, tipus: "hold", hossz: 100 },
        {nyil: 2, ido: 100},
        {nyil: 3, ido: 300  },
        {nyil: 1, ido: 100  },
        {nyil: 1, ido: 100  },
        {nyil: 1, ido: 300  },

        {nyil: 0, ido: 200, tipus: "hold", hossz: 100 },
        {nyil: 1, ido: 500, tipus: "hold", hossz: 100 },
        {nyil: 2, ido: 100},
        {nyil: 3, ido: 300  },
        {nyil: 1, ido: 100  },
        {nyil: 1, ido: 100  },
        {nyil: 1, ido: 300  },

        {nyil: 0, ido: 200, tipus: "hold", hossz: 100 },
        {nyil: 1, ido: 500, tipus: "hold", hossz: 100 },
        {nyil: 2, ido: 100},
        {nyil: 3, ido: 300  },
        {nyil: 1, ido: 100  },
        {nyil: 1, ido: 100  },
        {nyil: 1, ido: 400  },


        {nyil: 0, ido: 200, tipus: "hold", hossz: 100 },
        {nyil: 1, ido: 500, tipus: "hold", hossz: 100 },
        {nyil: 2, ido: 100},
        {nyil: 3, ido: 300  },
        {nyil: 1, ido: 100  },
        {nyil: 1, ido: 100  },
        {nyil: 1, ido: 300  },

        {nyil: 0, ido: 200, tipus: "hold", hossz: 100 },
        {nyil: 1, ido: 500, tipus: "hold", hossz: 100 },
        {nyil: 2, ido: 100},
        {nyil: 3, ido: 300  },
        {nyil: 1, ido: 100  },
        {nyil: 1, ido: 100  },
        {nyil: 1, ido: 1500  },


        


//#endregion
//#region VÉÉÉGEEE VÉGRE EMBER
{nyil: 1, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 3, ido: 100}, // 500
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50},
        {nyil: 3, ido: 100}, // 500
        {nyil: 0, ido: 100, tipus: "kill"},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 1, ido: 50},
        {nyil: 3, ido: 100}, // 400
        {nyil: 2, ido: 100},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 3, ido: 100},  // 250
        {nyil: 1, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 3, ido: 100}, // 250
        {nyil: 2, ido: 100},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 100},
        {nyil: 3, ido: 100}, // 400
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 100, tipus: "kill"},
        {nyil: 2, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 3, ido: 100}, // 500
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 3, ido: 100}, // 250
        {nyil: 1, ido: 100},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 3, ido: 100}, // 250
        {nyil: 0, ido: 50, tipus: "kill"},


        {nyil: 1, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 3, ido: 100}, // 500
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50},
        {nyil: 3, ido: 100}, // 500
        {nyil: 0, ido: 100, tipus: "kill"},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 1, ido: 50},
        {nyil: 3, ido: 100}, // 400
        {nyil: 2, ido: 100},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 3, ido: 100},  // 250
        {nyil: 1, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 3, ido: 100}, // 250
        {nyil: 2, ido: 100},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 100},
        {nyil: 3, ido: 100}, // 400
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 100, tipus: "kill"},
        {nyil: 2, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 3, ido: 100}, // 500
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 3, ido: 100}, // 250
        {nyil: 1, ido: 100},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 3, ido: 100}, // 250
        {nyil: 0, ido: 50, tipus: "kill"},

        {nyil: 1, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 3, ido: 100}, // 500
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50},
        {nyil: 3, ido: 100}, // 500
        {nyil: 0, ido: 100, tipus: "kill"},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 1, ido: 50},
        {nyil: 3, ido: 100}, // 400
        {nyil: 2, ido: 100},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 3, ido: 100},  // 250
        {nyil: 1, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 3, ido: 100}, // 250
        {nyil: 2, ido: 100},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 100},
        {nyil: 3, ido: 100}, // 400
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 100, tipus: "kill"},
        {nyil: 2, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 3, ido: 100}, // 500
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 3, ido: 100}, // 250
        {nyil: 1, ido: 100},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 3, ido: 100}, // 250
        {nyil: 0, ido: 50, tipus: "kill"},


        {nyil: 1, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 3, ido: 100}, // 500
        {nyil: 2, ido: 50},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50},
        {nyil: 3, ido: 100}, // 500
        {nyil: 0, ido: 100, tipus: "kill"},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 1, ido: 50},
        {nyil: 3, ido: 100}, // 400
        {nyil: 2, ido: 100},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 3, ido: 100},  // 250
        {nyil: 1, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 3, ido: 100}, // 250
        {nyil: 2, ido: 100},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 2, ido: 100},
        {nyil: 3, ido: 100}, // 400
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 50},
        {nyil: 1, ido: 50},
        {nyil: 0, ido: 100, tipus: "kill"},
        {nyil: 2, ido: 100},
        {nyil: 2, ido: 100},
        {nyil: 3, ido: 100}, // 500
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 0, ido: 100},
        {nyil: 2, ido: 50, tipus: "kill"},
        {nyil: 3, ido: 100}, // 250
        {nyil: 1, ido: 100},
        {nyil: 2, ido: 100, tipus: "kill"},
        {nyil: 3, ido: 100}, // 250
        {nyil: 0, ido: 50, tipus: "kill"},
//#endregion
]

}


//#endregion
    
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

    const scoreDiv = document.createElement("div")
    scoreDiv.innerHTML = score
    scoreDiv.id = "scoreDiv"
    mainDiv.appendChild(scoreDiv)
    const activeNotes = []
    const pressedLanes = new Set()
    let combo = 1
    let elapsedTime = 0
    let gameOver = false;
    function WinGame(song) {
        song.addEventListener("ended", () => {
        if (gameOver) return;

        gameOver = true;

        window.alert(
            "Gratulálok, végigvitted. Elért pontszámod: " + score
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
            
            
            if (closestNote && smallestDistance <= 80) {
                if (closestNote.type === "hold") {
                    closestNote.holding = true;
                    closestNote.hit = true;
                    closestNote.holdStarted = performance.now();
                    closestNote.lastTick = performance.now();
                
                    requestAnimationFrame(() => updateHold(closestNote));
                }
            /*else if(closestNote.type === "kill"){
                closestNote.hit = true;
                gameOver = true
                song.pause()
                alert(`Rányomtál a rossz nyílra. vesztettél! Viszont ${score} pontot szereztél!`)
                mainTitle()
               


            }*/  else {
                
                closestNote.hit = true;
                closestNote.element.remove();

                const index = activeNotes.indexOf(closestNote);
                if (index !== -1) {
                    activeNotes.splice(index, 1);
                }

                score += smallestDistance <= 35 ? Math.round(20 * combo) : Math.round(10 * combo);
                combo += 0.1;
                HangJatszo(Hit);
    }

    scoreDiv.innerHTML = score;
    } 
            
            else if(closestNote){
                console.log("MISS!");
                score -= Math.round(5 * combo)
                combo = 1
            }
            scoreDiv.innerHTML = score
}
function updateHold(note) {
    if (!note.holding || gameOver) return;

    const elapsed = performance.now() - note.holdStarted;

    if (!pressedLanes.has(note.lane)) {
        note.holding = false;
        note.element.remove();

        const index = activeNotes.indexOf(note);
        if (index !== -1) activeNotes.splice(index, 1);

        return;
    }

    const now = performance.now();

    if (now - note.lastTick >= 100) {
        score += Math.round(2 * combo);
        note.lastTick = now;
        scoreDiv.innerHTML = score;
    }

    if (elapsed >= note.holdDuration) {
        note.holding = false;
        note.element.remove();

        const index = activeNotes.indexOf(note);
        if (index !== -1) activeNotes.splice(index, 1);

        score += Math.round(20 * combo);
        combo += 0.1;
        scoreDiv.innerHTML = score;

        HangJatszo(Hit);
        return;
    }

    requestAnimationFrame(() => updateHold(note));
}
     document.addEventListener("keydown", (event) => {
        if(event.repeat) return
        if (event.key === left) {
            pressedLanes.add(0)
            ArrowButtons.children[0].classList.add("active")
            checkHit(0);
        }
        if (event.key === up) {
            pressedLanes.add(1)
            ArrowButtons.children[1].classList.add("active")
            checkHit(1);
        }
        if (event.key === down) {
            pressedLanes.add(2)
            ArrowButtons.children[2].classList.add("active")
            checkHit(2);
        }
        if (event.key === right) {
            pressedLanes.add(3)
            ArrowButtons.children[3].classList.add("active")
            checkHit(3);
        }

    })
    document.addEventListener("keyup", (event) =>{
        if (event.key === left) {
            pressedLanes.delete(0)
            ArrowButtons.children[0].classList.remove("active")
            
        }
        if (event.key === up) {
            pressedLanes.delete(1)
            ArrowButtons.children[1].classList.remove("active")
            
        }
        if (event.key === down) {
            pressedLanes.delete(2)
            ArrowButtons.children[2].classList.remove("active")
            
        }
        if (event.key === right) {
            pressedLanes.delete(3)
            ArrowButtons.children[3].classList.remove("active")
        }


    })
    
    for (let i = 0; i < notes.length; i++) {
        const noteData = notes[i]
        if (noteData.ido < 0) {
            elapsedTime += Math.abs(noteData.ido)
            continue
        
        }
        const note = document.createElement("div")
        note.classList.add("note")
        if (noteData.tipus === "hold") {
        note.classList.add("hold-note");
        note.style.setProperty(
            "--hold-height",
            `${noteData.hossz}px`
         );
        }
        else if(noteData.tipus === "kill"){
            note.setAttribute("style", "color: red;")
        }
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

             if (position < window.innerHeight || activeNote.holding) {
                    requestAnimationFrame(moveNote);
            
                } else {
                note.remove();

                const index = activeNotes.findIndex(
                    activeNote => activeNote.element === note
                );

            if (index !== -1) {
                const missedNote = activeNotes[index];
                if (!missedNote.hit && !gameOver) {
                    score -= 20;
                    combo = 1;

                    console.log("MISSED NOTE!");

                    scoreDiv.innerHTML =   score;



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
            active: false,


            type: noteData.tipus || "normal",
            holdDuration: noteData.hossz || 0,
            holding: false,
            holdStarted: 0,
            lastTick: 0
        }
        activeNotes.push(activeNote)
        elapsedTime += noteData.ido
        
        
    }
    WinGame(song)
    
    

//#endregion
//#region 

}







let killNotes = false;

let keys = {
    left: "ArrowLeft",
    up: "ArrowUp",
    down: "ArrowDown",
    right: "ArrowRight"
};

const mainDiv = document.createElement("div")

function mainTitle() {
    
    mainDiv.innerHTML = ""
    
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
    playButton.addEventListener("click", () => {songSelector(mainDiv, keys.left, keys.up, keys.down, keys.right);})


    const settingsButton = document.createElement("div")
    settingsButton.classList.add("button")
    const settingsButtonTEXT = document.createTextNode("SETTINGS")
    settingsButton.appendChild(settingsButtonTEXT)
    
settingsButton.addEventListener("click", () => {
    mainDiv.innerHTML = `
        <div id="settingsDiv">
            <div class="uiverse-pixel-radio-group">

                <label class="uiverse-pixel-radio">
                    <input type="radio" name="pixel-choice" value="resolution" checked>
                    <span class="label-text">Resolution</span>
                </label>

                <label class="uiverse-pixel-radio">
                    <input type="radio" name="pixel-choice" value="kill">
                    <span class="label-text">"Kill" note-ok kikapcsolása</span>
                </label>

                <label class="uiverse-pixel-radio">
                    <input type="radio" name="pixel-choice" value="keys">
                    <span class="label-text">Gombjaim átírása</span>
                </label>

            </div>

            <div id="optionDiv"></div>
        </div>
    `;

    const radiok = mainDiv.querySelectorAll('.uiverse-pixel-radio input[type="radio"]');

    const OptionDiv = document.querySelector("#optionDiv");


    function settingsUpdate(option) {
        OptionDiv.innerHTML = "";

        switch (option) {

            case "resolution":
                OptionDiv.textContent =
                    "A felbontás beállítása még fejlesztés alatt áll :P";
                break;

            case "kill":
                const label = document.createElement("label");
                label.classList.add("setting-checkbox");

                const checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.checked = killNotes;

                checkbox.addEventListener("change", () => {
                    killNotes = checkbox.checked;
                    console.log("Kill notes:", killNotes);
                });

                const text = document.createElement("span");
                text.textContent = "Kill note-ok kikapcsolása";

                label.append(checkbox, text);
                OptionDiv.appendChild(label);
                break;

            case "keys":
                const keyContainer = document.createElement("div");
                keyContainer.classList.add("key-container");

                const directions = [
                    { name: "left", symbol: "←" },
                    { name: "up", symbol: "↑" },
                    { name: "down", symbol: "↓" },
                    { name: "right", symbol: "→" }
                ];

                directions.forEach(direction => {
                    const keyButton = document.createElement("button");
                    keyButton.classList.add("arrow");
                    keyButton.textContent = direction.symbol;

                    const keyText = document.createElement("p");
                    keyText.textContent = keys[direction.name].toUpperCase();

                    keyButton.addEventListener("click", () => {
                        keyText.textContent = "Nyomj egy gombot...";

                        const keyListener = (event) => {
                            event.preventDefault();

                            keys[direction.name] = event.key;
                            keyText.textContent = event.key;

                            document.removeEventListener("keydown", keyListener);

                            console.log("Új billentyűk:", keys);
                        };

                        document.addEventListener("keydown", keyListener);
                    });

                    const keyDiv = document.createElement("div");
                    keyDiv.append(keyButton, keyText);
                    keyContainer.appendChild(keyDiv);
                });

                OptionDiv.appendChild(keyContainer);
                break;
        }
    
    }

    radiok.forEach(radio => {
        radio.addEventListener("change", () => {
            if (radio.checked) {
                settingsUpdate(radio.value);
            }
        });
    });

    settingsUpdate("resolution");
    const vissza = document.createElement("div")
    vissza.innerHTML = "Vissza"
    vissza.classList.add("button")
    vissza.setAttribute("style", "width: 200px;")
    vissza.addEventListener("click", () => {mainTitle()} )
    mainDiv.appendChild(vissza)
    
});

        

    buttons.appendChild(playButton) 
    buttons.appendChild(settingsButton)
    
    
    
    mainDiv.appendChild(h1)
    mainDiv.appendChild(buttons)
    document.body.appendChild(mainDiv)
    mainDiv.classList.add("mainDiv")


}
mainTitle()