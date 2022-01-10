"use strict";
const userID = globalUserID;
async function fetchUser() {
    const response = await fetch('./api/user.json')
    const data = await response.json()
    let userData = await data;
    return userData;
}

async function fetchitems(){
    const response = await fetch('./api/items.json')
    const data = await response.json()
    let itemData = await data;
    return itemData;
}

//hämtar planeters items utifrån användarens 
//inventory samt planetens itemOnGround.
async function fetchItemsForPlanets (userInvArray, currentPlanetID) {  
    let itemData = await fetchitems();

        currentPlanetID.forEach(idOfPlanet => {
            itemData.forEach(item => {
                if (idOfPlanet == item.id ){
                    if(userInvArray.includes(item.id) == false){
                        let itemsDiv = document.createElement("div");
                        itemsDiv.classList.add("planetsItem");
                        itemsDiv.innerHTML = `<img class="${item.name}"src="${item.image}"><span class="noSee">${item.name}</span>`;
                        document.querySelector(".background").prepend(itemsDiv);
                    } 
                }
            })
        })
    }

//jämför planetens ["requiredItem"] med användarens inventory
//om de inte finns i inventory - FALSE. Annars TRUE.
async function userRequiredItem(requiredItem, userInvArray){
    let found = true;

        //om användaren ännu inte har något i sin array
        //och det inte krävs ett requiredItem ska de komma
        //förbi ändå.&& requiredItem == undefined
        if (userInvArray.length == 0) {
            found = false;
            
            if (requiredItem == undefined){
                found = true;
                return found;
            }
            return found;
        } 

    for (let i = 0; i < userInvArray.length; i++) {
        if (requiredItem == undefined){
            //avslutar for-loopen direkt. ingen 
            //idé att fortsätta om requiredItem är undefined
            return found;
        }

        //kollar om requiredItem stämmer överens med
        //användarens inventory.
        if(userInvArray[i] == requiredItem){
            found = true;
            //STANNA. Om den hittat. wooo
            break;
        } else {
            found = false;
        }
    }
    return found;
}

//jämför användarens items med bilderna i item.json.
//skickar ut en array med bilder av användarens items
async function fetchUserInventoryIMGS () {
    let users = await fetchUser();
    let itemData = await fetchitems();

    let currentUserIMGInventory = [];
    let currentUserIDInventory = [];

    users.forEach(user => {
        if (user.id == userID){
            currentUserIDInventory = user.inventory;
        }
    })

    currentUserIDInventory.forEach(userInventoryID => {
        itemData.forEach(item => {
            if(userInventoryID === item.id) {
                currentUserIMGInventory.push(item.image);
            }
        })
    })
    return currentUserIMGInventory;
}


