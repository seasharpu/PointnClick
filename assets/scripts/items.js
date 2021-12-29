"use strict";

//hämtar items från items.json
async function fetchItemsForPlanets () {
    const response = await fetch('./api/items.json')
    const data = await response.json()
    let itemData = await data;
    //console.log(itemData);
    let itemsDiv = document.createElement("div");
    itemsDiv.innerHTML = "";
    
    currentID.forEach(obj => {
        itemData.forEach(element => {
            if(element.id == obj) {
               
                itemsDiv.classList.add("planetsItem");
                document.querySelector(".background").prepend(itemsDiv);
                itemsDiv.innerHTML = element.name;
            }
        });
    })
}
