"use strict";

//REGISTER SIDA
function MakerRegisterPage() {
    document.querySelector("main").style.backgroundImage = "url('assets/images/background2.gif')";
 
    let GridWrapperDiv = document.createElement("div");
    document.querySelector("main").append(GridWrapperDiv);
    GridWrapperDiv.classList.add("GridWrapperDiv");

    let wrapperDiv = document.createElement("div");
    wrapperDiv.classList.add("wrapperDiv");
    document.querySelector(".GridWrapperDiv").append(wrapperDiv);

    let registerDiv = document.createElement("div");
    registerDiv.classList.add("registerDiv");

    // let avatarWrapperDiv = document.createElement("div");
    // avatarWrapperDiv.classList.add("avatarWrapperDiv");

    document.querySelector(".wrapperDiv").append(registerDiv);


    /*for (let i= 1; i <= 4; i++) {
        let avatars = document.createElement("div");
        avatars.classList.add("avatars");
        avatarWrapperDiv.append(avatars);

    }    */

    //skapa new player from
    let formDiv = document.createElement("div");
    formDiv.setAttribute("ID", "formWrapperDiv");
    registerDiv.append(formDiv);

    formDiv.innerHTML = `
        <form id="registerForm" action="/createUser.php" method="POST" enctype="multipart/form-data">
        <div>
            <div id="uploadpicture">
                <input type="file" name="image" id="file" onchange="loadfile(event)">
                <label for="file">
                    Choose profile picture
                </label>
            </div>
        <img id="prePic">
        <h2 class="registerTitle"> NameTag</h2>
        <input type="text" name="nameTag">
        <h2 class="registerTitle">Password</h2>
        <input type="text" name="password">
        <div id="buttonsDiv">
            <button type="submit" id="startExploring">Start Exploring</button>
            <button id="cancelButton">Cancel</button>
        </div>
        </div>
        <div id="avatar">
        <div id="avatarHeader">Choose your avatar</div>
            <div class="avatarWrapperDiv">
                <div class="avatars"><input type="radio" id="avatar1" name="avatar" value="Blue"></div>
                <div class="avatars"><input type="radio" id="avatar2" name="avatar" value="ninja"></div>
                <div class="avatars"><input type="radio" id="avatar3" name="avatar" value="astro"></div>
                <div class="avatars"><input type="radio" id="avatar4" name="avatar" value="blob">
            </div>
        </div>
        </div>
        </form>
    `;

    document.querySelector("#cancelButton").addEventListener("click", () => {
        clickSound();
        document.querySelector("#hidden").innerHTML = "";
        makeStartPage();
    })
}

//för så att bilden man laddar upp kan förhandsvisas
function loadfile(event){
    var output=document.getElementById("prePic");
    document.getElementById("prePic").classList.add("show")
    output.src=URL.createObjectURL(event.target.files[0]);
}


