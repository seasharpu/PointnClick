"use strict";

function makeStartPage() {
    document.querySelector("main").style.backgroundImage = "url('assets/images/space_background.png')";

    let titleTextDiv = document.createElement("div");
    let titleText = document.createElement("h2");

    titleTextDiv.classList.add("titleTextDiv");
    titleText.classList.add("titleText");

    document.querySelector("main").append(titleTextDiv);
    document.querySelector(".titleTextDiv").append(titleText);
    titleText.innerHTML = "Saving Laika";

    let logInWrapper = document.createElement("div");
    logInWrapper.classList.add("logInWrapper");
    document.querySelector("main").append(logInWrapper);

    let NameTagText = document.createElement("h2");
    NameTagText.classList.add("NameTagText");
    document.querySelector(".logInWrapper").append(NameTagText);
    NameTagText.innerHTML = "NameTag";

    let NameTagInput = document.createElement("input");
    document.querySelector(".logInWrapper").append(NameTagInput);

    let PasswordText = document.createElement("h2");
    PasswordText.classList.add("PasswordText");
    document.querySelector(".logInWrapper").append(PasswordText);
    PasswordText.innerHTML = "Password";
    let PassWordInput = document.createElement("input");
    document.querySelector(".logInWrapper").append(PassWordInput);

    let buttonsDiv = document.createElement("div");
    document.querySelector(".logInWrapper").append(buttonsDiv);
    buttonsDiv.classList.add("buttonsDiv");

    let newPlayerButton = document.createElement("div");
    let signUpButton = document.createElement("div");
    document.querySelector(".buttonsDiv").append(newPlayerButton, signUpButton);
    newPlayerButton.innerHTML = "New player";
    signUpButton.innerHTML = "Sign in";
}

makeStartPage();