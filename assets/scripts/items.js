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

/*async function userControl(){
    const userID = 2;
    let users = await fetchUser();
    let itemData = await fetchitems();

    users.forEach(user => {
        if(userID === user.id) {
            itemData.forEach(item => {
                let currentUserInventory = user.inventory;
                //console.log(currentUserInventory);
                if(currentUserInventory.includes(item.id) === false) {
                    console.log(currentUserInventory.includes(item.id));
                    let itemsDiv = document.createElement("div");
                    console.log(itemsDiv);
                } 
            })     
        }
    })
}*/

let inventoryimg = [];

//let currentUserIMGInventory = [];

async function fetchItemsForPlanets () {
    const userID = 2;
    let users = await fetchUser();
    let itemData = await fetchitems();
    let currentUserIDInventory = [];

    //items.push(itemData);
    //console.log(document.querySelector(".inventoryObjectsOpen"));
    
    currentID.forEach(currentid => {
        itemData.forEach(item => {
            if(item.id === currentid) {
                users.forEach(user => {
                    if(userID === user.id) {
                        currentUserIDInventory = user.inventory;
                        console.log(user.inventory);

                        if(currentUserIDInventory.includes(item.id) === false) {
                            let itemsDiv = document.createElement("div");
                            itemsDiv.classList.add("planetsItem");
                            document.querySelector(".background").prepend(itemsDiv);
                            itemsDiv.style.backgroundImage = `url(${item.image})`;
                            
                        } 
                    }
                })
            }
        });         
    })

}

async function fetchUserInventoryIMGS () {
    const userID = 2;
    let users = await fetchUser();
    let itemData = await fetchitems();

    let currentUserIDInventory = [];
    let currentUserIMGInventory = [];

    
    currentID.forEach(currentid => {
        itemData.forEach(item => {
            if(item.id === currentid) {
                users.forEach(user => {
                    if(userID === user.id) {
                        currentUserIDInventory = user.inventory;

                        //får ut användarens inventory i bilder.
                        currentUserIDInventory.forEach(userInventoryID => {
                            itemData.forEach(item => {
                                if(userInventoryID === item.id) {
                                    currentUserIMGInventory.push(item.image);
                                }
                            })
                        })
                    }
                })
            }
        });         
    })
    return currentUserIMGInventory;
}


