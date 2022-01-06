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
let currentUserIDInventory = [];
let items = [];
//hämtar items från items.json
async function fetchItemsForPlanets () {
    const userID = 2;
    let users = await fetchUser();
    let itemData = await fetchitems();

    items.push(itemData);
    //console.log(document.querySelector(".inventoryObjectsOpen"));
   
    currentID.forEach(currentid => {
        itemData.forEach(item => {
            if(item.id === currentid) {
                users.forEach(user => {
                    if(userID === user.id) {
                        let currentUserInventory = user.inventory;
                        currentUserIDInventory.push(user.inventory);
                        if(currentUserInventory.includes(item.id) === false) {
                            let itemsDiv = document.createElement("div");
                            itemsDiv.classList.add("planetsItem");
                            document.querySelector(".background").prepend(itemsDiv);
                            itemsDiv.style.backgroundImage = `url(${item.image})`;
                           
                            itemsDiv.addEventListener("click", () => {
                                itemsDiv.innerHTML = "";
                                //document.querySelector(".planetsItem").classList.add("itemClicked");
                                //document.querySelector(".itemboxes").append(itemsDiv);
                                //inventoryimg.push(item.image);

                                /*let itemboxesArr = document.querySelectorAll(".itemboxes");
                                for(let i = 0; i < itemboxesArr.length; i++) {
                                    //let oneitembox = [i]; 
                                    //console.log(oneitembox);
                                    document.querySelector(`.itemboxes${i}`).append(item.image);
                                    console.log(itemboxesArr[i]);
                                }*/
                    
                                /*if(document.querySelector(".itemboxes").contains(itemsDiv) === false) {
                                    document.querySelector(".itemboxes").append(itemsDiv);

                                }*/
                                //document.querySelector(".itemboxes").append(itemsDiv);
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

async function userAnditemsID (){
    console.log(items);
    console.log(currentUserIDInventory);

    currentUserIDInventory.forEach(userInventoryID => {
        items.forEach(item => {
            if(userInventoryID === item.id) {
                console.log(item.id);
                console.log(item.image);
            }
        })
    })

}

