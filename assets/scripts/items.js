"use strict";
/*async function fetchUser() {
    const response = await fetch('./api/user.json')
    const data = await response.json()
    let userData = await data;
    return userData;
}*/

//hämtar items från items.json
async function fetchItemsForPlanets () {
    const response = await fetch('./api/items.json')
    const data = await response.json()
    let itemData = await data;
    
    //console.log(itemData);
    let itemsDiv = document.createElement("div");
    itemsDiv.innerHTML = "";
    let inventoryImage = [];

    currentID.forEach(currentid => {
        itemData.forEach(item => {
            if(item.id === currentid) {
                localStorage.setItem("itemID", item.id);
                itemsDiv.classList.add("planetsItem");
                document.querySelector(".background").prepend(itemsDiv);
                inventoryImage.push(item.image);
                itemsDiv.style.backgroundImage = `url(${item.image})`;
                console.log(inventoryImage);
            }
        });

        itemsDiv.addEventListener("click", () => {
            document.querySelector(".itemboxes").append(itemsDiv);
            if(document.querySelector(".itemboxes").contains(itemsDiv)){        
                localStorage.setItem("itemInventory", inventoryImage);
                   //ska egentligen vara userID > -1
            if(userID == -1) {
                let itemID = localStorage.getItem("itemID");
                //requestAddItem(userID, itemID);
                //console.log("hej");
            }
            }
         
            
        })

                //let localInventory = localStorage.getItem("itemInventory");
                //itemsDiv.style.backgroundImage = `url(${localInventory})`;
          
    })
}
