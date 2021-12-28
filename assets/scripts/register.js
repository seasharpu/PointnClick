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

    let uploadProfilePicDiv = document.createElement("div");
    registerDiv.append(uploadProfilePicDiv);
    uploadProfilePicDiv.setAttribute("ID","uploadProfilePic");

    //skapar 4st divvar för avatargubbarna 
    // for (let i= 1; i <= 4; i++) {
    //     let avatars = document.createElement("div");
    //     avatars.classList.add("avatars");
    //     avatarWrapperDiv.append(avatars);

    // }    





}

MakerRegisterPage();