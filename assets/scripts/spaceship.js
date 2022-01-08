"use strict";

//lägger till id-siffran beroende på vilken planet användaren är på 
let currentID = [];
// *FUNKTIONEN SOM BEHÖVS VARA IGÅNG FÖR ATT SE NÅGOT*
spaceShip();
backgrounds();

//hämtar planeters items utifrån användarens inventory.
async function fetchItemsForPlanets (userInvArray) {    
    if(userInvArray.includes(item.id) === false) {
        let itemsDiv = document.createElement("div");
        itemsDiv.classList.add("planetsItem");
        document.querySelector(".background").prepend(itemsDiv);
        itemsDiv.style.backgroundImage = `url(${item.image})`
    } 
}

//jämför planetens ["requiredItem"] med användarens inventory
//om de inte finns i inventory - FALSE. Annars TRUE.
async function userRequiredItem(requiredItem, userInvArray){
    let found = "njo";

    for (let i = 0; i < userInvArray.length; i++) {

        if (requiredItem == undefined){
            found = true;
            //avslutar for-loopen direkt. ingen 
            //idé att fortsätta om requiredItem är undefined
            console.log(found);
            return found;
        }
        //kollar om requiredItem stämmer överens om
        //användarens inventory.
        if(userInvArray[i] == requiredItem){
            found = true;
            break;
        } else {//
            found = false;
        }
    }
    console.log(found);
    return found;
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
    backgrounds();
    planetData.forEach(element => {

        let planetDiv = document.createElement("div");
        planetDiv.classList.add(element.name);
        document.querySelector(".space").append(planetDiv);
        
        planetDiv.addEventListener("click", async function(){

            currentID.push(element.id);

            async function getUserInventory () {
                const userID = 2;
                let users = await fetchUser();
                let itemData = await fetchitems();
                let currentUserIDInventory

                currentID.forEach(currentid => {
                    itemData.forEach(item => {
                        if(item.id === currentid) {
                            users.forEach(user => {
                                if(userID === user.id) {
                                    currentUserIDInventory = user.inventory;
                                }
                            })
                        }
                    });         
                })
                return currentUserIDInventory;
            }

            //console.log(element.requiredItem.length); 

            //if (element.requiredItem.length )

            let currentUserIDInventory = await getUserInventory();
            
            let hasUserRequiredItem = userRequiredItem(element.requiredItem, currentUserIDInventory);
            //console.log(userRequiredItem(element.requiredItem, currentUserIDInventory));
            
            if (hasUserRequiredItem == true){
                //console.log(element.requiredItem);
                
                //console.log(element);
                document.querySelector(".background").style.position = "static";
                document.getElementById("location").innerHTML = element.name;
                document.querySelector(".background").style.backgroundImage = `url(${element.backgroundImage})`;
                
                if (element.id == 6){
                    createCodePanel();
                }

                cleanBackground();
                fetchItemsForPlanets();
                document.querySelector(".background").append(inventory());
                backToSpaceship(); 
                whichDialogue();
            } else {
                planetDiv.classList.add("unavailablePlanet");
            }
            ;
        })
    });
    //tömmer nuvarande ID tills nästa planet.
    currentID = [];
}

// SKAPAR DIV SOM SKA ÄNDRA BAKRUND
function backgrounds() {
   // document.querySelector(".backround").innerHTML = "";
    let background = document.createElement("div");
    background.classList.add("background");
    document.querySelector("main").append(background);
}


function spaceShip() {
    document.getElementById("hidden").innerHTML = "";
    let spaceShipBackground = document.createElement("div");
    spaceShipBackground.classList.add("spaceShipBackground");
    document.querySelector("main").append(spaceShipBackground);
    document.getElementById("location").innerHTML = "Spaceship";
    
    makePlanets();
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
        //makePlanets();
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

    chest.addEventListener("click", function() {
        inventoryObjects.innerHTML = "";
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
        deleteButton.innerHTML = "<span class='removeItem'>REMOVE</span>";

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
                requestDeleteItem(2, itemID);
            }, 3000);

            itemBoxes.innerHTML = "";
            deleteButton.remove();
        })
    inventoryObjects.append(itemBoxes);
    }
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

