"use strict";

let attribute = document.getElementById("3").getAttribute("id");

async function whichPlanet(){
    let planetData = await fetchPlanetNamesandIDs();
    let planetDialogue = [];
    planetData.forEach(element => {
        //IF sats här tror jag angående vilken dialog ska hamna var
       
        console.log(attribute);
        if(attribute == element.id) {
            planetDialogue.push(element.NPC);
        }
        
    });

    return planetDialogue;
}

whichPlanet();

async function whichDialogue (){
    let planetDialogue = await whichPlanet();
    planetDialogue.forEach(obj => {
        let characterTalkBubble = document.createElement("div");
        let dialogue = obj.dialogue;
        characterTalkBubble.append(dialogue);
        console.log(characterTalkBubble);
    })
}
whichDialogue();

function makeandplaceCharacters(){
    let characterDiv = document.createElement("div");

    characterTalkBubble.append(dialogue);
    document.querySelector(".background").append(characterTalkBubble);
}
