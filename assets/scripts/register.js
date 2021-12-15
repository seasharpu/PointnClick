"use strict";

//REGISTER SIDA
function MakerRegisterPage() {
    document.querySelector("main").style.backgroundImage = "url('assets/images/space_background.png')";
    let wrapperDiv = document.createElement("div");
    wrapperDiv.classList.add("wrapperDiv");
    document.querySelector("main").append(wrapperDiv);

    let signInDiv = document.createElement("div");
    signInDiv.classList.add("hej");

    let avatarWrapperDiv = document.createElement("div");
    avatarWrapperDiv.classList.add("hejhej");

    document.querySelector(".wrapperDiv").append(signInDiv, avatarWrapperDiv);



}

MakerRegisterPage();