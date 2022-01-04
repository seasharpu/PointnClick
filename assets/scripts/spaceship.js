"use strict";

//lägger till id-siffran beroende på vilken planet användaren är på 
let currentID = [];

//hämtar infon om planeterna från planet.json
async function fetchPlanetNamesandIDs () {
    const response = await fetch('./api/planet.json')
    const data = await response.json()
    let planetData = await data;
    return planetData;
}

fetchPlanetNamesandIDs();

//skapar planeter och lägger till info från planet.json när man klickar på en planet så som bakgrundsbild etc
async function makePlanets(){
    let planetData = await fetchPlanetNamesandIDs();
   
    planetData.forEach(element => {
        let planetDiv = document.createElement("div");
        planetDiv.classList.add(element.name);
        document.querySelector(".space").append(planetDiv);

        planetDiv.addEventListener("click", ()=> {
            document.querySelector(".background").style.position = "static";
            document.getElementById("location").innerHTML = element.name;
            document.querySelector(".background").style.backgroundImage = `url(${element.backgroundImage})`;
            
            currentID.push(element.id);

            cleanBackground();
            document.querySelector(".background").append(inventory());
            fetchItemsForPlanets();
            backToSpaceship(); 
            whichDialogue();

            if (element.id == 6){
                createCodePanel();
            }

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

    document.querySelector(".spaceShipBackground").append(inventory());

    backgrounds();
    //inventory();
    joystick();

    let leftBlack = document.createElement("div");
    let rightBlack = document.createElement("div");
    leftBlack.classList.add("leftBlack");
    rightBlack.classList.add("rightBlack");
    document.querySelector("main").append(leftBlack);
    document.querySelector("main").append(rightBlack);

   /* let spaceshipMusic = new Audio('/assets/audiofiles/slow-travel.wav');
    spaceshipMusic.play(); */
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
    let chest = document.createElement("div");
    let inventoryObjects = document.createElement("div");

    inventory.classList.add("inventory");
    chest.classList.add("chest");
    inventoryObjects.classList.add("inventoryObjectsHidden");

    inventory.append(chest);
    inventory.append(inventoryObjects);

    //document.querySelector(".spaceShipBackground").append(inventory);

    chest.addEventListener("click", function(e) {
        chest.classList.toggle("chestOpen");

        if(inventoryObjects.classList.contains("inventoryObjectsHidden")) {
            inventoryObjects.classList.remove("inventoryObjectsHidden");
            inventoryObjects.classList.add("inventoryObjectsOpen");
            inventoryObjects.innerHTML = `<div class="itemboxes"></div>
                                                                    <div class="itemboxes">
                                                                        <button>delete</button>
                                                                    </div>
                                                                    <div class="itemboxes"></div>
                                                                    <div class="itemboxes"></div>
                                                                    <div class="itemboxes"></div>
                                                                    <div class="itemboxes"></div>`;
        } else if (inventoryObjects.classList.contains("inventoryObjectsOpen")){
            inventoryObjects.classList.remove("inventoryObjectsOpen");
            inventoryObjects.classList.add("inventoryObjectsHidden");
            inventoryObjects.innerHTML ="";
        }

    });
    return inventory;
}
// GRUNDEN TILL JOYSTICK FUNCTIONEN
function joystick() {
    let joystick = document.createElement("div");
    let goLeft = document.createElement("div");
    let goRight = document.createElement("div");

    joystick.classList.add("joystick");
    goLeft.classList.add("goLeft");
    goRight.classList.add("goRight");

    document.querySelector(".spaceShipBackground").append(joystick);
    document.querySelector(".spaceShipBackground").append(goLeft);
    document.querySelector(".spaceShipBackground").append(goRight);

    // RYMDEN DÄR ALLA PALANETER FINNS
    let space = document.createElement("div");
    document.querySelector("main").append(space);
    space.classList.add("space");

    // NÄR MAN KLICKAR PÅ JOYSTICKEN
    goLeft.addEventListener("click", function() {
        joystick.classList.toggle("joystickLeft");
        space.classList.toggle("spaceLeft");
    });
    goRight.addEventListener("click", function() {
        joystick.classList.toggle("joystickRight");
        space.classList.toggle("spaceRight");
    });
}