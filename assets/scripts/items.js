"use strict";

async function fetchUser() {
    const response = await fetch('./api/user.json')
    const data = await response.json()
    let userData = await data;
    console.log(userData);
}
fetchUser();

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
            if(element.id === obj) {
                itemsDiv.classList.add("planetsItem");
                //itemsDiv.setAttribute("id", element.name);
                document.querySelector(".background").prepend(itemsDiv);
                //itemsDiv.innerHTML = element.name;
                itemsDiv.style.backgroundImage = `url(${element.image})`;
            }
        });
        itemsDiv.addEventListener("click", () => {
            document.querySelector(".itemboxes").append(itemsDiv);
        })
    })
}
