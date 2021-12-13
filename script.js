"use strict";

//OM const userID = -1 är ingen inloggad. Då laddas inloggningssidan in.
//ELSE = kalla på spaceShipsidan.

function requestDeleteItem(userID, inventoryID, itemName){
    const data = {"userID": userID, "inventoryID": 2};
    const req = new Request("http://localhost:2000/create.php", {
        method: "DELETE",
        body: JSON.stringify(data)
    });
    fetch(req).then(response => response.text().then(value => console.log(value)))
}