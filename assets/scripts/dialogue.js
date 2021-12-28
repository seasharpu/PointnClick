"use strict";

function whichDialogue (){
    characterDialogue.forEach(obj => {
        document.querySelector(".background").innerHTML="";
        let dialogue = obj.dialogue;
        dialogue.forEach(element => {
            let characterTalkBubble = document.createElement("div");
            characterTalkBubble.innerHTML = element;
            characterTalkBubble.classList.add("dialogueBubble")
            document.querySelector(".background").append(characterTalkBubble);
            console.log(characterTalkBubble);
        })
    })
}
whichDialogue();


