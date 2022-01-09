"use strict";

let characterDialogue = [];

let i = -1;

function nextDialogue(){
    i = i + 1; // increase i by one
    i = i % characterDialogue.length; // if we've gone too high, start from `0` again
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
   

    currentID.forEach(current => {
        planetData.forEach(planet => {
            if(planet.id === current) {
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

    //NÅGOT FEL MED DEN HÄR
    //console.log(characterDialogue);

    document.querySelector(`.${character}`).addEventListener("click", () => {  
        console.log(characterDialogue);
        innerDialogue.textContent = nextDialogue(); 
        document.querySelector(".characterDialogueWrapper").append(innerDialogue);
        
    })
    

}


/*
document.querySelector(".character").addEventListener(
    'click', // we want to listen for a click
    function (e) { // the e here is the event itself
        document.querySelector(".dialogueBubble").textContent = nextDialogue();
    }
);*/