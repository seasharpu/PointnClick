"use strict";

//array med dialog från planet användaren befinner sig på 
let characterDialogue = [];
let i = -1;

function nextDialogue(){
    i = i + 1; // ökar i med ett
    i = i % characterDialogue.length; // ifall det går högre en i börja om från början
    return characterDialogue[i];
}

//hämtar arrayen från spaceship.js och går igenom den och skapar divar för varje dialog
async function whichDialogue(character) {
    const response = await fetch('./api/planet.json')
    const data = await response.json()
    let planetData = await data;

    let characterDialogueWrapper = document.createElement("div");
    characterDialogueWrapper.classList.add("characterDialogueWrapper");
    document.querySelector(`.${character}`).append(characterDialogueWrapper);

    currentID.forEach(current => { //går igenom planeten användaren befinner sig på och jämför med planetens id
        planetData.forEach(planet => {
            if(planet.id === current) {
                
                emptyDialogueArray();  //tömmer arrayen
                i = -1;      //ser till att dialogen alltid börjar om från början på varje planet
                
                let fullcharacterDialogue = planet.NPC.dialogue;
                characterDialogueWrapper.innerHTML ="";
                let characterTalkBubble = document.createElement("div");
                characterTalkBubble.setAttribute("id", "dialogueBubble"); 
                
                fullcharacterDialogue.forEach(dialogue => {
                    characterDialogue.push(dialogue);
                })                           
            }
        });               
    })


    let innerDialogue = document.createElement("div");
    innerDialogue.classList.add("innerDialogue");
    innerDialogue.textContent = "";
    
    document.querySelector(`.${character}`).addEventListener("click", () => { 
        innerDialogue.textContent = nextDialogue(); 

        document.querySelector(".characterDialogueWrapper").append(innerDialogue); 
        var click = new Audio('assets/audiofiles/sf_chabadabada.mp3');
        click.play();  
    })

}



//tar bort gammal dialog ur arrayen
function emptyDialogueArray(){
    let splicedDialogue = characterDialogue.splice(0, characterDialogue.length);
    return splicedDialogue;
}
