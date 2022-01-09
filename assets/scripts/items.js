"use strict";
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
                        document.querySelector(".background").prepend(itemsDiv);
                        itemsDiv.style.backgroundImage = `url(${item.image})`
                    } 
                }
            })
        })
    }

//jämför planetens ["requiredItem"] med användarens inventory
//om de inte finns i inventory - FALSE. Annars TRUE.
async function userRequiredItem(requiredItem, userInvArray){
    let found = true;

    for (let i = 0; i < userInvArray.length; i++) {
        if (requiredItem == undefined){
            //avslutar for-loopen direkt. ingen 
            //idé att fortsätta om requiredItem är undefined
            return found;
        }
        //kollar om requiredItem stämmer överens om
        //användarens inventory.
        if(userInvArray[i] == requiredItem){
            if (userInvArray.length == 0) {
                return found = false;
            } else {
                found = true;
            }
            //STANNA. Om den hittat.
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
    const userID = 2;
    let users = await fetchUser();
    let itemData = await fetchitems();

    let currentUserIMGInventory = [];
    let currentUserIDInventory = [];

    users.forEach(user => {
        if (user.id == userID){
            currentUserIDInventory = user.inventory;
            console.log(currentUserIDInventory);
        }
    })

    currentUserIDInventory.forEach(userInventoryID => {
        itemData.forEach(item => {
            if(userInventoryID === item.id) {
                currentUserIMGInventory.push(item.image);
            }
        });
    
        itemsDiv.addEventListener("click", () => {
            document.querySelector(".itemboxes").append(itemsDiv);
        })
    })
    return currentUserIMGInventory;
}


