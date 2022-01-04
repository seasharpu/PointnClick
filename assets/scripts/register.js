"use strict";

//REGISTER SIDA
function MakerRegisterPage() {
    document.querySelector("main").style.backgroundImage = "url('assets/images/space_background.png')";
 
    let GridWrapperDiv = document.createElement("div");
    document.querySelector("main").append(GridWrapperDiv);
    GridWrapperDiv.classList.add("GridWrapperDiv");

    let wrapperDiv = document.createElement("div");
    wrapperDiv.classList.add("wrapperDiv");
    document.querySelector(".GridWrapperDiv").append(wrapperDiv);

    let registerDiv = document.createElement("div");
    registerDiv.classList.add("registerDiv");

    let avatarWrapperDiv = document.createElement("div");
    avatarWrapperDiv.classList.add("avatarWrapperDiv");

    document.querySelector(".wrapperDiv").append(registerDiv, avatarWrapperDiv);

    // let uploadProfilePicDiv = document.createElement("div");
    // registerDiv.append(uploadProfilePicDiv);
    // uploadProfilePicDiv.setAttribute("ID","uploadProfilePic");

    for (let i= 1; i <= 4; i++) {
        let avatars = document.createElement("div");
        avatars.classList.add("avatars");
        avatarWrapperDiv.append(avatars);

    }    

    //skapa new player from
    let formDiv = document.createElement("div");
    formDiv.setAttribute("ID", "formWrapperDiv");
    registerDiv.append(formDiv);

    formDiv.innerHTML = `
        <form id="registerForm" action="/createUser.php" method="POST" enctype="multipart/form-data">
            <div id="uploadpicture">
                <input type="file" name="image" id="file">
                <label for="file">
                    Ladda upp en profilbild
                </label>
            </div>
            <h2> NameTag</h2>
            <input type="text" placeholder="NameTag" name="nameTag">
            <h2>Password</h2>
            <input type="text" placeholder="Password" name="password">
            <div id="buttonsDiv">
                <button type"submit">Start Exploring</button>
                <button>Cancel</button>
            </div>
        </form>
    `




}

MakerRegisterPage();