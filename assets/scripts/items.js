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

async function userControl(){
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
}
let inventoryimg = [];
console.log(inventoryimg);
//hämtar items från items.json
async function fetchItemsForPlanets () {
    const userID = 2;
    let users = await fetchUser();
    let itemData = await fetchitems();
   
    currentID.forEach(currentid => {
        itemData.forEach(item => {
            if(item.id === currentid) {
                users.forEach(user => {
                    if(userID === user.id) {
                        let currentUserInventory = user.inventory;
                        if(currentUserInventory.includes(item.id) === false) {
                         
                            let itemsDiv = document.createElement("div");
                            itemsDiv.classList.add("planetsItem");
                            document.querySelector(".background").prepend(itemsDiv);
                            itemsDiv.style.backgroundImage = `url(${item.image})`;
                           
                            itemsDiv.addEventListener("click", () => {
                                itemsDiv.innerHTML = "";
                                inventoryimg.push(item.image);
        
                                document.querySelector(".itemboxes").append(itemsDiv);
                                //document.querySelector(".itemboxes").classList.add(item.id);
                                //requestAddItem(userID, item.id);
                            })
                        } 
                    }
                })
            }
        });         
    })
}
