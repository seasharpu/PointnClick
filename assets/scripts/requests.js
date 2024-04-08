"use strict";


//tar emot ID på inloggad användare samt ID på item som ska deletas.
function requestDeleteItem(userID,inventoryID){
    const data = {"userID": userID,"inventoryID": inventoryID};
    const req = new Request("server.php", {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {"Content-type": "application/json"}
    });
    fetch(req).then(response => getStatusCode(response));
}
//requestDeleteItem(2, 5);

//tar emot ID på inloggad användare samt ID på item som ska läggas till
//i användarens inventoryArray.
function requestAddItem(userID, inventoryID){
    const data = {"userID": userID,"inventoryID": inventoryID};
    const req = new Request("server.php", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {"Content-type": "application/json"}
    });
    fetch(req).then(response => getStatusCode(response));
}
//requestAddItem(2, 200);


//CHANGE NAMETAG 
//tar emot befintligt namn, samt det nya namnet.
function requestChangeUserName(nameTag, newNameTag){
    const data = {"nameTag": nameTag, "newNameTag": newNameTag};
    const req = new Request("server.php", {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {"Content-type": "application/json"}
    });
    fetch(req).then(response => getStatusCode(response));
}
//requestChangeUserName("testUser", "Buster");

//CHANGE LAIKA SATUS 
function requestLaikaStatus(boolean, userID){
    const data = {"laikaFound": boolean, "userID": userID};
    const req = new Request("server.php", {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {"Content-type": "application/json"}
    });
    fetch(req).then(response => getStatusCode(response));
}

//LOGIN USER
function requestLoginUser(nameTag, password){
    const data = {"nameTag": nameTag, "password": password};
    const req = new Request("server.php", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {"Content-type": "application/json"}
    });
    fetch(req).then(response => getStatusCode(response));
   
}
//requestLoginUser("AlexanderDenStore", "batman123");

//DELETE USER
function requestDeleteUser(userID){
    const data = {"deleteUserID": userID};
    const req = new Request("server.php", {
        method: "DELETE",
        body: JSON.stringify(data),
        headers: {"Content-type": "application/json"}
    });
    fetch(req).then(response => getStatusCode(response));
}



