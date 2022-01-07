"use strict";

//tar emot ID på inloggad användare samt ID på item som ska deletas.
function requestDeleteItem(userID, inventoryID){
    const data = {"userID": userID, "inventoryID": inventoryID};
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
    const data = {"userID": userID, "inventoryID": inventoryID};
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
//requestDeleteUser(4);



let formWrapper = document.createElement("div");
formWrapper.innerHTML = 
    `
    <form id="create-user" action="createUser.php "method="POST" enctype="multipart/form-data">
        <input type="file" name="image">
        <input type="text" placeholder="nameTag" name="nameTag">
        <input type="text" placeholder="password" name="password">
        <button id="button">Upload</button>
    </form>
    `;

document.querySelector("main").append(formWrapper);

//CREATE USER
const form = document.getElementById("create-user");
form.addEventListener("button", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    console.log(data);

    const req = new Request("createUser.php", {
        method: "POST",
        body: data
    });
    fetch(req).then(response => getStatusCode(response));

});


