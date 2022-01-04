"use strict";

let spaceShipBackground = document.querySelector("#hidden");

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
    spaceShipBackground.append(character);

    return character;
}

//skapar ett element och klass till den. ange klassnamn själv
//och den styla den i planetens css-fil.
function implementElement(nameOfClass, nameOfImageFile){
    //skapelse av variabel (div);
    let element = document.createElement("div");
    //klasser till diven.
    element.classList.add(`${nameOfClass}`);
    //lägger in diven i spaceshipBackground, vilket är planeten.
    element.style.backgroundImage = `url('/assets/images/characters/${nameOfImageFile}.png')`; 
    spaceShipBackground.append(element);

    return element;
}


//divElementClassname = namnet på classen som du angav i implementCharacterElement.
//nameOfImage = namnet på bilden (BARA! ingen .png eller .gif) som hämtas från "/assets/images/characters/...
//VIKTIGT att det ska finnas en stillabild (png) och gif-alternativ av bilden, med samma namn.
function talkingCharacter(divElementClassname, nameOfImage){
    divElementClassname = document.querySelector(`.${divElementClassname}`);

    divElementClassname.style.backgroundImage = `url('/assets/images/characters/${nameOfImage}.png')`; 

    //ljud för den pratande karaktären
    let audioTalk = document.createElement("audio");
    audioTalk.setAttribute = "autoplay";
    document.querySelector("#hidden").append(audioTalk);
    audioTalk.innerHTML = `
    <source src="audiofiles/pacman-wakka.wav" type="audio/wav">
    `;
    setInterval(() => {
        divElementClassname.style.backgroundImage = `url('/assets/images/characters/${nameOfImage}.gif')`;
        audioTalk.remove();
    }, 3000);
}

formPlutoPlanet();
function formPlutoPlanet(){
    //element för PLUTO
    implementElement("cloudSmall", "molntrans");
    implementElement("cloudBig", "molntrans");
    implementCharacterElement("wingedDemon", "winged-demon");
}
formAlienPlanet();
function formAlienPlanet(){
    //element för ALIEN
    implementCharacterElement("insect", "insect");
}
formDesertPlanet();
function formDesertPlanet(){
    //element för DESERT
    implementCharacterElement("dragon", "dragon");
}
function formWaterPlanet(){
    //element för WATER
    implementCharacterElement("");
}
formJunglePlanet();
function formJunglePlanet(){
    //element för JUNGLE
    implementCharacterElement("fireworm", "fireworm");
}
function formPartyPlanet(){
    //element för PARTY
    implementCharacterElement("");
}