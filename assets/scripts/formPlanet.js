"use strict";

let spaceShipBackground = document.querySelector("#hidden");

async function fetchAvatarProfile(){
    let userID = globalUserID;
    let users = await fetchUser();
    let playeraCa = null;
    
    users.forEach(user => {
        if(user.id == userID){
            let avatar = user.avatar;
            playeraCa = document.querySelector(".playerCharacter");
            playeraCa.innerHTML = `<img src="${avatar}">`;
        }
    })
    return playeraCa;
}

//skapar ett element och eget klassnamn (css) till den, samt .character som alla karaktärer ska ha.
//.character kommer vi använda till ett klick-event
//ange klassnamn själv och styla den i planetens css-fil.
//nameOfImageFile = namn på filen som finns i /assets/images/characters/...
function implementCharacterElement(nameOfClass, nameOfImageFile){
    //skapelse av variabel (div);
    let character = document.createElement("div");
    //klasser till diven. characterklassen ska vara på alla karaktärer
    character.classList.add(`${nameOfClass}`);
    character.classList.add("character");
    character.style.backgroundImage = `url('/assets/images/characters/${nameOfImageFile}.gif')`; 
    document.querySelector(".background").append(character);

    return character;
}

//vad för attribut som behövs för karaktärens klass:
//{
//width:
//height:
//top:
//left:
//}

//skapar ett element och klass till den. ange klassnamn själv
//och den styla den i planetens css-fil.
function implementElement(nameOfClass, nameOfImageFile){
    //skapelse av variabel (div);
    let element = document.createElement("div");
    //klasser till diven.
    element.classList.add(`${nameOfClass}`);
    //lägger in diven i spaceshipBackground, vilket är planeten.
    element.style.backgroundImage = `url('/assets/images/characters/${nameOfImageFile}.png')`; 
    document.querySelector(".background").append(element);

    return element;
}


//divElementClassname = namnet på classen som du angav i implementCharacterElement.
//nameOfImage = namnet på bilden (BARA! ingen .png eller .gif) som hämtas från "/assets/images/characters/...
//VIKTIGT att det ska finnas en stillabild (png) och gif-alternativ av bilden, med samma namn.
function talkingCharacter(divElementClassname, nameOfImage){
    divElementClassname = document.querySelector(`.${divElementClassname}`);

    divElementClassname.style.backgroundImage = `url('/assets/images/characters/${nameOfImage}.png')`; 

    //...funktionen för dialogbiten

    setInterval(() => {
        divElementClassname.style.backgroundImage = `url('/assets/images/characters/${nameOfImage}.gif')`;
    }, 3000);
}
//här behövs funktion som hämtar ut användarens avatar-bild.
//den sätts in i funktionen implementelement("playerAvatar", userAvatar)
//då userAvatar är variabeln för användarens avatar - bilden.

//dessa funktioner kallar på när respektive planet trycks på.
function formPlutoPlanet(){
    //element för PLUTO
    implementElement("playerCharacter", fetchAvatarProfile());
    implementElement("cloudSmall", "molntrans");
    implementElement("cloudBig", "molntrans");
    implementCharacterElement("wingedDemon", "winged-demon");
    whichDialogue("wingedDemon");
}
function formAlienPlanet(){
    //element för ALIEN
    implementElement("playerCharacter", fetchAvatarProfile());
    implementCharacterElement("insect", "insect");
    whichDialogue("insect");
     
}
function formDesertPlanet(){
    //element för DESERT
    implementElement("playerCharacter", fetchAvatarProfile());
    implementCharacterElement("dragon", "dragon");
    whichDialogue("dragon");
   
}
function formWaterPlanet(){
    //element för WATER
    implementElement("playerCharacter", fetchAvatarProfile());
    implementCharacterElement("pinkjelly", "pinkjelly");
    whichDialogue("pinkjelly");
}
function formJunglePlanet(){
    //element för JUNGLE
    implementElement("playerCharacter", fetchAvatarProfile());
    implementCharacterElement("fireworm", "fireworm");
    whichDialogue("fireworm");
}
function formPartyPlanet(){
    //element för PARTY
    implementElement("playerCharacter", fetchAvatarProfile());
    implementCharacterElement("mike", "mike");
    whichDialogue("mike");
}