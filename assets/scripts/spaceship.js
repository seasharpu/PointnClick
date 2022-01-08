"use strict";

//lägger till id-siffran beroende på vilken planet användaren är på 
let currentID = [];
// *FUNKTIONEN SOM BEHÖVS VARA IGÅNG FÖR ATT SE NÅGOT*
// spaceShip();
// backgrounds();

// if (userID > 0) {
//     spaceShip();
//     backgrounds();
// } else {
//     makeStartPage();
// }

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
            loadingDivPlanet();

            document.querySelector(".background").style.position = "static";
            document.getElementById("location").innerHTML = element.name;
            document.querySelector(".background").style.backgroundImage = `url(${element.backgroundImage})`;
            document.querySelector(".background").style.pointerEvents = `all`;
            document.querySelector(".joystickDiv").style.display = "none";
            currentID.push(element.id);
            
            if (element.id == 6){
                createCodePanel();
                createBox();
                formPlutoPlanet();
                document.querySelector(".playerCharacter").classList.add("plutoPlayerCharacter");
            }
            if (element.id == 5) {
                formWaterPlanet();
                document.querySelector(".playerCharacter").classList.add("waterPlayerCharacter");
                
            }
            if (element.id == 4) {
                formJunglePlanet();
                document.querySelector(".playerCharacter").classList.add("junglePlayerCharacter");
                
            }
            if (element.id == 3) {
                formAlienPlanet();
                document.querySelector(".playerCharacter").classList.add("alienPlayerCharacter");
            }
            if (element.id == 2) {
                formDesertPlanet();
                document.querySelector(".playerCharacter").classList.add("desertPlayerCharacter");
            }
            if (element.id == 1) {
                formPartyPlanet();
                document.querySelector(".playerCharacter").classList.add("partyPlayerCharacter");
            }

            //document.querySelector(".background").style.zIndex = 100;
    
            cleanBackground();
            document.querySelector(".background").append(inventory());
            backToSpaceship(); 
            // fetchItemsForPlanets();
            // whichDialogue();
            
            
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
  // MUSIK OCH LJUDEFFEKTER
const spaceMusic = new Audio('assets/audiofiles/slow-travel.wav');
function spaceMusicPlay(){
        spaceMusic.loop = true;
        spaceMusic.load();
        spaceMusic.play();
    }   
spaceMusicPlay();
function clickSound() {
    var click = new Audio('assets/audiofiles/click.wav');
    click.play(); 
}
function spaceShip() {
    
    document.getElementById("hidden").innerHTML = "";
    let spaceShipBackground = document.createElement("div");
    spaceShipBackground.classList.add("spaceShipBackground");
    document.querySelector("main").append(spaceShipBackground);
    document.getElementById("location").innerHTML = "Spaceship";
    
    blinking();
    makePlanets();
    backgrounds();
    inventory();
    joystick(); 
    profile();
    exit();
    
}

// Profilbild och nameTag
function profile() {
    let profileDiv = document.createElement("div");
    let profilePic = document.createElement("div");
    let profileName = document.createElement("div");

    profileDiv.classList.add("profileDiv");
    profilePic.classList.add("profilePic");
    profileName.classList.add("profileName");

    profileName.innerHTML = "Jonna";
    document.querySelector(".spaceShipBackground").append(profileDiv);
    document.querySelector(".profileDiv").append(profileName);
    document.querySelector(".profileDiv").append(profilePic);
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
    backToSpaceship.innerHTML = `<p>BACK<br>TO SPACESHIP</p>`
    document.querySelector(".background").append(backToSpaceship);

    backToSpaceship.addEventListener("click", function() {
        // document.querySelector(".background").style.display = "none";
        loadingDivSpaceship();
        clickSound();
        setTimeout(() => {
            //makePlanets();
            spaceShip();  
        }, 2000);
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
            inventoryObjects.innerHTML = `<div class="itemboxes"></div>
                                                                    <div class="itemboxes"></div>
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
     // RYMDEN DÄR ALLA PALANETER FINNS
    let space = document.createElement("div");
    document.querySelector("main").append(space);
    space.classList.add("space");

    // stjärnorna i rymden
    let blink5 = document.createElement("div");
    blink5.classList.add("blink5");
    document.querySelector(".space").append(blink5);

    let blink6 = document.createElement("div");
    blink6.classList.add("blink6");
    document.querySelector(".space").append(blink6);

    let blink7 = document.createElement("div");
    blink7.classList.add("blink7");
    document.querySelector(".space").append(blink7);

    let blink8 = document.createElement("div");
    blink8.classList.add("blink8");
    document.querySelector(".space").append(blink8);

    // Joysticken
    let joystickDiv = document.createElement("div");
    joystickDiv.classList.add("joystickDiv");
    document.querySelector("main").append(joystickDiv);

    let goLeft = document.createElement("div");
    let joystick = document.createElement("div");
    let goRight = document.createElement("div");

    goLeft.classList.add("goLeft");
    joystick.classList.add("joystick");
    goRight.classList.add("goRight");

    document.querySelector(".joystickDiv").append(goLeft);
    document.querySelector(".joystickDiv").append(joystick);
    document.querySelector(".joystickDiv").append(goRight);

    // NÄR MAN KLICKAR PÅ JOYSTICKEN
    goLeft.addEventListener("click", function(e) {
        joystick.classList.toggle("joystickLeft");
        space.classList.toggle("spaceLeft");
        if(joystick.classList.contains("joystickLeft")) {
            document.querySelector(".goRight").style.pointerEvents = "none";
            document.querySelector(".goRight").style.opacity = "0.8";
            clickSound();
        } else {
            document.querySelector(".goRight").style.pointerEvents = "all";
            document.querySelector(".goRight").style.opacity = "1";
            clickSound();
        }
    });
    goRight.addEventListener("click", function(e) {
        joystick.classList.toggle("joystickRight");
        space.classList.toggle("spaceRight");
        if(joystick.classList.contains("joystickRight")) {
            document.querySelector(".goLeft").style.pointerEvents = "none";
            document.querySelector(".goLeft").style.opacity = "0.8";
            clickSound();
        } else {
            document.querySelector(".goLeft").style.pointerEvents = "all";
            document.querySelector(".goLeft").style.opacity = "1";
            clickSound();
        }
    });
}

function blinking() {
    let blink1 = document.createElement("div");
    blink1.classList.add("blink1");
    document.querySelector(".spaceShipBackground").append(blink1);

    let blink2 = document.createElement("div");
    blink2.classList.add("blink2");
    document.querySelector(".spaceShipBackground").append(blink2);

    let blink3 = document.createElement("div");
    blink3.classList.add("blink3");
    document.querySelector(".spaceShipBackground").append(blink3);

    let blink4 = document.createElement("div");
    blink4.classList.add("blink4");
    document.querySelector(".spaceShipBackground").append(blink4);
}

function exit() {
    let exitDiv = document.createElement("div");
    exitDiv.classList.add("exitDiv");
    document.querySelector(".joystickDiv").append(exitDiv);
    exitDiv.innerHTML = `
    <a href='exit.php'>exit</a>
`;
    return exitDiv;
}