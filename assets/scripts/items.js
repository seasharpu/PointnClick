"use strict";

async function fetchUser(userData) {
    const response = await fetch('./api/user.json')
    const data = await response.json()
    userData = await data;
    return userData;
}

//hämtar items från items.json
async function fetchItemsForPlanets () {
    const response = await fetch('./api/items.json')
    const data = await response.json()
    let itemData = await data;
    
    //console.log(itemData);

    let itemsDiv = document.createElement("div");
    itemsDiv.innerHTML = "";
    let users = await fetchUser();

    currentID.forEach(currentid => {
        itemData.forEach(item => {
            if(item.id === currentid) {
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
            //requestAddItem(userID, 5);
        })
    })
}
