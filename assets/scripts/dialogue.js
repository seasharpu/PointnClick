"use strict";


/*function fetchDialogue(){   
    fetch('./api/planet.json').then(response => {
        return response.json();
      }).then(data => {
        //console.log(data);
        data.forEach(element => {
            let characterDialogue = element.NPC.dialogue;
            let planetID = element.id;
            console.log(characterDialogue);
            console.log(planetID);
        });
      }).catch(err => {
         console.log(err = "This did not work");
      }); 

      planetNameID = document.getElementById(4);

      if(planetID === planetNameID) {
        console.log(characterDialogue);
    }

}
fetchDialogue();*/

function whichPlanet(){
    // if data.name === id.location.innerHTML
}


function makeandplaceCharacters(){
    let characterDiv = document.createElement("div");
    characterDiv.style.backgroundImage ="url('/assets/images/Tiger_JunglePlanet.png')"
    document.getElementById(4).append(characterDiv);
}
