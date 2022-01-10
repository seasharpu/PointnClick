"use strict";

//lägger till id-siffran beroende på vilken planet användaren är på 
let currentID = [];

// *FUNKTIONEN SOM BEHÖVS VARA IGÅNG FÖR ATT SE NÅGOT*
// spaceShip();
// backgrounds();
if (globalUserID == undefined){
    console.log("not inlogged");
}
if (globalUserID  > 0) {

    document.querySelector("#hidden").innerHTML = "";
    //document.querySelector(".background").remove();

    spaceShip();
    backgrounds();
    //makeStartPage();
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

    planetData.forEach(element => {

        let planetDiv = document.createElement("div");
        planetDiv.classList.add(element.name);
        document.querySelector(".space").append(planetDiv);
        // När man hovrar över en planet ser man planetens namn
        planetDiv.addEventListener("mouseout", ()=>{
            document.querySelector(".displayDiv").innerHTML = "";
        });

        planetDiv.addEventListener("mouseenter", ()=>{
            document.querySelector(".displayDiv").innerHTML = `${element.location}`;
            clickSound();
        });
        
        planetDiv.addEventListener("click", async function(){
            
            currentID.push(element.id);
        
            async function getUserInventory () {
                let userID = globalUserID;
                
                let users = await fetchUser();
                let currentUserIDInventory = [];

                users.forEach(user => {
                    if (user.id == userID){
                        currentUserIDInventory = user.inventory;
                    }
                })
                return currentUserIDInventory;
            }
            
            let currentUserIDInventory = await getUserInventory();
            let hasUserRequiredItem = await userRequiredItem(element.requiredItem, currentUserIDInventory);
            
            if (hasUserRequiredItem == true){
                loadingDivPlanet();
                backgrounds();
                //document.querySelector(".background").style.position = "static";
                document.getElementById("location").innerHTML = element.location;
                document.querySelector(".background").style.backgroundImage = `url(${element.backgroundImage})`;
                document.querySelector(".background").style.pointerEvents = `all`;
                document.querySelector(".joystickDiv").style.display = "none";
                
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

                    cleanBackground();
                    fetchItemsForPlanets(currentUserIDInventory, currentID);
                    document.querySelector("#hidden").append(inventory());
                    backToSpaceship(); 
                    //whichDialogue();

            } else {
                if (!planetDiv.classList.contains("unavailablePlanet")){
                    let overlay = document.createElement("div");
                    overlay.classList.add("overlay");
                    planetDiv.classList.add("unavailablePlanet");
                    let padlock = document.createElement("div");
                    padlock.classList.add("padlock");

                    planetDiv.append(unavailablePlanet());
                    planetDiv.append(overlay, padlock);

                    setTimeout(() => {
                        planetDiv.classList.remove("unavailablePlanet");
                        planetDiv.firstChild.remove();
                        overlay.remove();
                        padlock.remove();
                    }, 5000);
                }
                currentID = [];
            };
        })
        
    });
    //tömmer nuvarande ID tills nästa planet.
    currentID = [];
}

function unavailablePlanet (){
    let text = document.createElement("p");
    text.classList.add("error");
    text.innerHTML = "You cannot visit this planet yet. Do you have the required item?";
    return text;
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
    //backgrounds();
    inventory();
    joystick(); 
    profile();
    exit();
    planetDisplay();
}

// Profilbild och nameTag
function profile() {
    let profileDiv = document.createElement("div");
    let profilePic = document.createElement("div");
    let profileName = document.createElement("div");

    profileDiv.classList.add("profileDiv");
    profilePic.classList.add("profilePic");
    profileName.classList.add("profileName");

    profileName.innerHTML = `${userNameTag}`;
    //document.querySelector("profilePic").style.backgroundImage = "";
    document.querySelector(".spaceShipBackground").append(profileDiv);
    document.querySelector(".profileDiv").append(profileName);
    document.querySelector(".profileDiv").append(profilePic);

    async function fetchImgProfile(){
        let userID = globalUserID;
        let users = await fetchUser();

        users.forEach(user => {
            if(user.id == userID){
                let profileImg = user.profilePicture;
                profilePic.innerHTML = `<img src="/api/profileImages/${profileImg}">`;
            }
        })
    }
    fetchImgProfile();
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

            updateUserInventorySlots();

        } else if (inventoryObjects.classList.contains("inventoryObjectsOpen")){
            inventoryObjects.classList.remove("inventoryObjectsOpen");
            inventoryObjects.classList.add("inventoryObjectsHidden");
        }

    })
    return inventory;
};

//hämtar ett ID av item med hjälp av en src från bild.
async function getItemIDFromPic(src){
    let items = await fetchitems();
    let itemID = 0;

    items.forEach(item => {
        if (item.image == src){
            itemID = item.id;
        }
    });
    return itemID;
}

async function updateUserInventorySlots(){
    let userID = globalUserID;
    let inventoryObjects = document.querySelector(".inventoryObjectsOpen") || document.querySelector(".inventoryObjectsHidden");
    inventoryObjects.innerHTML = "";
    let currentUserIMGInventory = await fetchUserInventoryIMGS();
    //skapar slotsen för inventory. 
    //lägger in användarens inv som bilder

    for (let i = 0; i < 6; i++) {
        let itemID = await getItemIDFromPic(currentUserIMGInventory[i]);
        let itemBoxes = document.createElement("div");
        let deleteButton = document.createElement("div");

        itemBoxes.innerHTML = "";
        
        itemBoxes.classList.add("itemboxes");
        itemBoxes.innerHTML = `<img src="${currentUserIMGInventory[i]}">`;

        deleteButton.classList.add("deleteButton");
        deleteButton.innerHTML = "<span class='removeItem'>DELETE</span>";

        //om ett item nyss har deletats av användaren, 
        //ska den inte få mouseover funktionen.
        if (itemBoxes.classList.contains("deletedItem")){
            itemBoxes.innerHTML = "";
        }
        
        //blir undefined om det inte är ett item på
        //det indexet. då töms divven. 
        if (itemBoxes.innerHTML.includes('<img src="undefined">') || itemBoxes.classList.contains("deletedItem")){
            itemBoxes.innerHTML = "";
        } else {
        //skapar en deletebutton vid hovring på itembox, om det 
        //finns ett item i rutan.
        itemBoxes.addEventListener("mouseover", () => {
            itemBoxes.append(deleteButton);
            if (itemBoxes.classList.contains("deletedItem")){
                itemBoxes.lastChild.style.display = "none";
            }
        })

        itemBoxes.addEventListener("mouseout", () => {
            deleteButton.remove();
        });
        }
        
        let removeTextButton = deleteButton.firstChild;
        //tar bort ett item baserat på dess id.
        removeTextButton.addEventListener("click", () => {
            itemBoxes.classList.add("deletedItem");

            setTimeout(() => {
                //2 ska vara userID när vi fått igång session["id"];
                requestDeleteItem(userID, itemID);
            }, 3000);

            itemBoxes.innerHTML = "";
            deleteButton.remove();
        })
    inventoryObjects.append(itemBoxes);
    }
}



// GRUNDEN TILL JOYSTICK FUNCTIONEN
function joystick() {
     // RYMDEN DÄR ALLA PALANETER FINNS
    let space = document.createElement("div");
    document.querySelector("main").append(space);
    space.classList.add("space");

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
function planetDisplay(){
    let displayDiv = document.createElement("div");
    displayDiv.classList.add("displayDiv");
    document.querySelector(".joystickDiv").append(displayDiv);
    }
