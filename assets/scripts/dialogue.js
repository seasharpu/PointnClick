"use strict";

//hämtar arrayen från spaceship.js och går igenom den och skapar divar för varje dialog
function whichDialogue (){
    //eventuellt lägga till IF sats här
    currentPlanetDialogue.forEach(obj => {
        document.querySelector(".background").innerHTML="";
        let dialogue = obj.dialogue;

        dialogue.forEach(element => {
            let characterTalkBubble = document.createElement("div");
            characterTalkBubble.innerHTML = element;
            characterTalkBubble.classList.add("dialogueBubble")
            document.querySelector(".background").append(characterTalkBubble);
        })
    })
}
whichDialogue();


