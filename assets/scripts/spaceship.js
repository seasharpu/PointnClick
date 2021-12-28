"use strict";

let characterDialogue = [];

async function fetchPlanetNamesandIDs () {
    const response = await fetch('./api/planet.json')
    const data = await response.json()
    let planetData = await data;
    return planetData;
}

fetchPlanetNamesandIDs();

async function makePlanets(){
    let planetData = await fetchPlanetNamesandIDs();
    console.log(planetData);

    planetData.forEach(element => {
        let planetDiv = document.createElement("div");
        planetDiv.classList.add(element.name);
        document.querySelector(".space").append(planetDiv);

        planetDiv.addEventListener("click", ()=> {
            document.querySelector(".background").style.position = "static";
            document.getElementById("location").innerHTML = element.name;
            document.querySelector(".background").style.backgroundImage = `url(${element.backgroundImage})`;
            document.querySelector(".background").setAttribute("id", element.id)
            
           characterDialogue.push(element.NPC);
            

            whichDialogue();
            cleanBackground();
            backToSpaceship();
            
        })
    });
}

makePlanets();

// SKAPAR DIV SOM SKA ÄNDRA BAKRUND
function backgrounds() {
    let background = document.createElement("div");
    background.classList.add("background");
    document.querySelector("main").append(background);
}
// *FUNKTIONEN SOM BEHÖVS VARA IGÅNG FÖR ATT SE NÅGOT*
spaceShip();
// SPACESHIP
function spaceShip() {
    document.getElementById("hidden").innerHTML = "";
    let spaceShipBackground = document.createElement("div");
    spaceShipBackground.classList.add("spaceShipBackground");
    document.querySelector("main").append(spaceShipBackground);
    document.getElementById("location").innerHTML = "Spaceship";
    //document.querySelector(".spaceShipBackground").style.backgroundImage = "url('images/spaceship.bmp')";
    //document.querySelector(".spaceShipBackground").style.position = "static";
    backgrounds();
    inventory();
    // RYMDEN DÄR ALLA PALANETER FINNS
   
    let space = document.createElement("div");
    document.querySelector(".spaceShipBackground").append(space);
    space.classList.add("space");
}

// Rensar bakgrunden
function cleanBackground() {
    document.querySelector(".spaceShipBackground").style.display = "none";
    document.querySelector(".space").style.display = "none";
}

//Back to spaceship
function backToSpaceship() {
    let backToSpaceship = document.createElement("div");
    backToSpaceship.classList.add("backToSpaceship");
    backToSpaceship.innerHTML = "BACK TO SPACESHIP"
    document.querySelector(".background").append(backToSpaceship);

    backToSpaceship.addEventListener("click", function() {
        document.querySelector(".background").style.display = "none";
        makePlanets();
        spaceShip();
    });
}

// GRUND INVENTORY FUNCTION
function inventory(){
    let inventory = document.createElement("div");
    let backpack = document.createElement("div");
    let objects = document.createElement("div");

    inventory.classList.add("inventory");
    backpack.classList.add("backpack");
    objects.classList.add("invetoryObjectHidden");

    inventory.append(backpack);
    inventory.append(objects);
    document.querySelector(".spaceShipBackground").append(inventory);

    backpack.addEventListener("click", function(e) {
        objects.classList.toggle("invetoryObjects");
        backpack.classList.toggle("backpackOpen");
        if(objects.classList.contains("invetoryObjects")) {
            objects.classList.toggle("invetoryObjectsHidden");
        }
    });
}
