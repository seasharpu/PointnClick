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

    let signInDiv = document.createElement("div");
    signInDiv.classList.add("registerDiv");

    let avatarWrapperDiv = document.createElement("div");
    avatarWrapperDiv.classList.add("avatarDiv");

    document.querySelector(".wrapperDiv").append(signInDiv, avatarWrapperDiv);



}

MakerRegisterPage();