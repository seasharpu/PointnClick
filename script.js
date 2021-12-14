"use strict";

//OM const userID = -1 är ingen inloggad. Då laddas inloggningssidan in.
//ELSE = kalla på spaceShipsidan.


//tar emot ID på inloggad användare samt ID på item som ska deletas.
function requestDeleteItem(userID, inventoryID){
    const data = {"userID": userID, "inventoryID": inventoryID};
    const req = new Request("http://localhost:1000/server.php", {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {"Content-type": "application/json"}
    });
    fetch(req).then(response => response.text().then(value => console.log(value)))
}
//requestDeleteItem(2, 5);



//CHANGE NAMETAG 
function requestChangeUserName(nameTag, newNameTag){
    const data = {"nameTag": nameTag, "newNameTag": newNameTag};
    const req = new Request("http://localhost:1000/server.php", {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {"Content-type": "application/json"}
    });
    fetch(req).then(response => response.text().then(value => console.log(value)))
}
//requestChangeUserName("MatildaNimvik", "Buster");

//CREATE USER
function requestCreateUser(nameTag, password){
    const data = {"nameTag": nameTag, "password": password};
    const req = new Request("http://localhost:1000/server.php", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {"Content-type": "application/json"}
    });
    fetch(req).then(response => response.text().then(value => console.log(value)))
}
//requestCreateUser("AlexanderDenStore", "batman123");

//DELETE USER
function requestDeleteUser(userID){
    const data = {"deleteUserID": userID};
    const req = new Request("http://localhost:1000/server.php", {
        method: "DELETE",
        body: JSON.stringify(data),
        headers: {"Content-type": "application/json"}
    });
    fetch(req).then(response => response.text().then(value => console.log(value)))
}
//requestDeleteUser(4);

let formWrapper = document.createElement("div");
formWrapper.innerHTML = 
    `
    <form id="login-user" action="server.php" method="POST" enctype="multipart/form-data">
        <input type="file" name="image">
        <input type="text" placeholder="nameTag" name="nameTag">
        <input type="text" placeholder="password" name="password">
        <button>Upload</button>
    </form>
    `;

document.querySelector("main").append(formWrapper);

//LOGIN USER
function requestLoginUser(){
    const form = document.getElementById("login-user");
    const data = new FormData(form);
    const req = new Request("http://localhost:1000/server.php", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {"Content-type": "application/json"}
    });
    fetch(req).then(response => response.text().then(value => console.log(value)))
}
//requestLoginUser("Buster", "matilda");


