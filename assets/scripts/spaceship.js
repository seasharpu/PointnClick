"use strict";
// *FUNKTIONEN SOM BEHÖVS VARA IGÅNG FÖR ATT SE NÅGOT*
spaceShip();
backgrounds();
backgroundDiv();
//array för dialog som finns på den planet användaren har klickat på 
let currentPlanetDialogue = [];

function backgroundDiv() {
    //let backgrundDIv = document.createElement("div");
    let leftBlack = document.createElement("div");
    let rightBlack = document.createElement("div");

    leftBlack.classList.add("leftBlack");
    rightBlack.classList.add("rightBlack");
    //backgrundDIv.classList.add("backgrundDIv");
    
    //document.querySelector("wrapper").append(leftBlack);
   //document.querySelector("wrapper").append(rightBlack);
    //document.querySelector("wrapper").append(backgrundDIv);
}

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
    //console.log(planetData);
    planetData.forEach(element => {
        let planetDiv = document.createElement("div");
        planetDiv.classList.add(element.name);
        document.querySelector(".space").append(planetDiv);
        
        planetDiv.addEventListener("click", ()=> {
            document.querySelector(".background").style.position = "static";
            document.getElementById("location").innerHTML = element.name;
            document.querySelector(".background").style.backgroundImage = `url(${element.backgroundImage})`;
            document.querySelector(".background").setAttribute("id", element.id);
            document.querySelector(".background").style.zIndex = 100;
            currentPlanetDialogue.push(element.NPC);
            
            //whichDialogue();
            cleanBackground();
            backToSpaceship();
        })
    });
}

// SKAPAR DIV SOM SKA ÄNDRA BAKRUND
function backgrounds() {
   // document.querySelector(".backround").innerHTML = "";
    let background = document.createElement("div");
    background.classList.add("background");
    document.querySelector("main").append(background);
}

// SPACESHIP
function spaceShip() {
    document.getElementById("hidden").innerHTML = "";
    let spaceShipBackground = document.createElement("div");
    spaceShipBackground.classList.add("spaceShipBackground");
    document.querySelector("main").append(spaceShipBackground);
    document.getElementById("location").innerHTML = "Spaceship";
    
    makePlanets();
    backgrounds();
    inventory();
    joystick();

    
}

// Rensar bakgrunden
function cleanBackground() {
    document.querySelector(".spaceShipBackground").style.display = "none";
    document.querySelector(".space").style.display = "none";
    document.querySelector(".joystick").style.display = "none";
    document.querySelector(".goLeft").style.display = "none";
    document.querySelector(".goRight").style.display = "none";
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
    document.querySelector("main").append(inventory);

    chest.addEventListener("click", function(e) {
        chest.classList.toggle("chestOpen");

        if(inventoryObjects.classList.contains("inventoryObjectsHidden")) {
            inventoryObjects.classList.remove("inventoryObjectsHidden");
            inventoryObjects.classList.add("inventoryObjectsOpen");
        } else if (inventoryObjects.classList.contains("inventoryObjectsOpen")){
            inventoryObjects.classList.remove("inventoryObjectsOpen");
            inventoryObjects.classList.add("inventoryObjectsHidden");
        }
    });
}
// GRUNDEN TILL JOYSTICK FUNCTIONEN
function joystick() {
    let joystick = document.createElement("div");
    let goLeft = document.createElement("div");
    let goRight = document.createElement("div");

    joystick.classList.add("joystick");
    goLeft.classList.add("goLeft");
    goRight.classList.add("goRight");

    document.querySelector("body").append(joystick);
    document.querySelector("body").append(goLeft);
    document.querySelector("body").append(goRight);

    // RYMDEN DÄR ALLA PALANETER FINNS
    let space = document.createElement("div");
    document.querySelector("body").append(space);
    space.classList.add("space");

    // NÄR MAN KLICKAR PÅ JOYSTICKEN
    goLeft.addEventListener("click", function(e) {
        joystick.classList.toggle("joystickLeft");
        space.classList.toggle("spaceLeft");
        if(joystick.classList.contains("joystickLeft")) {
            document.querySelector(".goRight").style.pointerEvents = "none";
            document.querySelector(".goRight").style.opacity = "0.6";
            document.querySelector(".goLeft").style.backgroundImage = "url(/assets/images/joystick/g23185.png)";
        } else {
            document.querySelector(".goRight").style.pointerEvents = "all";
            document.querySelector(".goLeft").style.backgroundImage = "url(/assets/images/joystick/g21493.png)";
            document.querySelector(".goRight").style.opacity = "1";
            
        }
    });
    goRight.addEventListener("click", function(e) {
        joystick.classList.toggle("joystickRight");
        space.classList.toggle("spaceRight");
        if(joystick.classList.contains("joystickRight")) {
            document.querySelector(".goLeft").style.pointerEvents = "none";
            document.querySelector(".goRight").style.backgroundImage = "url(/assets/images/joystick/g21493.png)";
            document.querySelector(".goLeft").style.opacity = "0.6";
        } else {
            document.querySelector(".goLeft").style.pointerEvents = "all";
            document.querySelector(".goLeft").style.opacity = "1";
            document.querySelector(".goRight").style.backgroundImage = "url(/assets/images/joystick/g23185.png)";
        }
    });
}
  