"use strict";

//hämtar arrayen från spaceship.js och går igenom den och skapar divar för varje dialog
async function whichDialogue() {
    const response = await fetch('./api/planet.json')
    const data = await response.json()
    let planetData = await data;

    let characterDialogueWrapper = document.createElement("div");
    characterDialogueWrapper.classList.add("characterDialogueWrapper");
    document.querySelector(".background").append(characterDialogueWrapper);

    currentID.forEach(obj => {
        planetData.forEach(element => {
            if(element.id === obj) {
                let characterDialogue = element.NPC.dialogue;
                characterDialogueWrapper.innerHTML="";
                
                characterDialogue.forEach(element => {
                    let characterTalkBubble = document.createElement("div");
                    characterTalkBubble.innerHTML = element;
                    characterTalkBubble.classList.add("dialogueBubble")
                    characterDialogueWrapper.append(characterTalkBubble);
                })
            } 
        })
    })
}
//whichDialogue();


