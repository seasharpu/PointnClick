"use strict";

//hämtar items från items.json
async function fetchItemsForPlanets () {
    const response = await fetch('./api/items.json')
    const data = await response.json()
    let itemData = await data;
    //console.log(itemData);

    currentID.forEach(obj => {
        itemData.forEach(element => {
            if(element.id == obj) {
                
                let itemsDiv = document.createElement("div");
                itemsDiv.innerHTML = element.name;
                itemsDiv.classList.add("planetsItem");
                document.querySelector(".background").append(itemsDiv);
            }
        });
    })
}
