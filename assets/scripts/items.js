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

    currentID.forEach(currentid => {
        itemData.forEach(item => {
            if(item.id === currentid) {
                localStorage.setItem("itemID", item.id);
                console.log(item.id)
                itemsDiv.classList.add("planetsItem");
                //itemsDiv.setAttribute("id", element.name);
                document.querySelector(".background").prepend(itemsDiv);
                //itemsDiv.innerHTML = element.name;
                itemsDiv.style.backgroundImage = `url(${item.image})`;
            }
        });
      
        itemsDiv.addEventListener("click", () => {
            document.querySelector(".itemboxes").append(itemsDiv);
            let toggledItemDiv = document.querySelector(".itemboxes").classList.toggle("inventoryWithItem");
            localStorage.setItem("ItemsDiv", toggledItemDiv);
            //ska egentligen vara userID > -1
            if(userID == -1) {
                let itemID = localStorage.getItem("itemID");
                //requestAddItem(userID, itemID);
                console.log("hej");
            }
            
        })
    })
}
