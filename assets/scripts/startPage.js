"use strict";

function makeStartPage() {
    document.querySelector("main").style.backgroundImage = "url('assets/images/background2.gif')";
    //document.querySelector("main").innerHTML = "";

    let titleTextDiv = document.createElement("div");
    let formContainerDiv = document.createElement("div");
    let titleText = document.createElement("h2");
    let smallTitle = document.createElement("h1");

    titleTextDiv.classList.add("titleTextDiv");
    formContainerDiv.classList.add("formContainerDiv");
    titleText.classList.add("titleText");
    smallTitle.classList.add("smallTitleStart");

    document.querySelector("main").append(titleTextDiv, formContainerDiv);
    document.querySelector(".titleTextDiv").append(titleText, smallTitle);
    titleText.innerHTML = "Saving Laika";
    smallTitle.innerHTML = "return of the lost dog"
    let logInWrapper = document.createElement("div");
    logInWrapper.classList.add("logInWrapper");

    let planetMoon = document.createElement("div");
    planetMoon.classList.add("planetMoon");
    let laikaContain = document.createElement("div");
    laikaContain.classList.add("laikaStart");
    formContainerDiv.append(logInWrapper,planetMoon, laikaContain);

    let NameTagText = document.createElement("h2");
    NameTagText.classList.add("NameTagText");
    document.querySelector(".logInWrapper").append(NameTagText);
    NameTagText.innerHTML = "NameTag";

    let NameTagInput = document.createElement("input");
    document.querySelector(".logInWrapper").append(NameTagInput);
    NameTagInput.setAttribute("ID", "nameTagInput");

    let PasswordText = document.createElement("h2");
    PasswordText.classList.add("PasswordText");
    document.querySelector(".logInWrapper").append(PasswordText);
    PasswordText.innerHTML = "Password";
    let PassWordInput = document.createElement("input");
    document.querySelector(".logInWrapper").append(PassWordInput);
    PassWordInput.setAttribute("ID", "passwordInput");

    let buttonsDiv = document.createElement("div");
    document.querySelector(".logInWrapper").append(buttonsDiv);
    buttonsDiv.classList.add("buttonsDiv");

    let newPlayerButton = document.createElement("div");
    let signUpButton = document.createElement("div");
    document.querySelector(".buttonsDiv").append(newPlayerButton, signUpButton);
    newPlayerButton.innerHTML = "<p>New player</p>";
    signUpButton.innerHTML = "<p>Sign in</p>";
    signUpButton.setAttribute("ID", "signInButton");
    newPlayerButton.setAttribute("ID", "newPlayerButton");
}

makeStartPage();

document.getElementById("signInButton").addEventListener("click", function () {
    clickSound();

    //PRELIMINÄR LÖSNING

    setTimeout(() => {
        //om statuskoden visar på fel, ska användaren
        //få chans att läsa vad som var fel, och sen trycka tillbaka
        let message = document.querySelector(".statusColor");
        if (message.style.color = "red"){
            document.querySelector(".spaceShipBackground").style.backgroundImage = "none";
            document.querySelector(".joystickDiv").style.display = "none";
            document.querySelector(".space").style.display = "none";
            document.querySelector(".profileDiv").style.display = "none";
            //document.querySelector(".exit").style.display = "none";
        }
    }, 500);
    

    setTimeout(() => {
        //
        let message = document.querySelector(".statusColor");
        if (message.style.color = "red"){
        document.querySelector(".understood").addEventListener("click", () => {
            document.querySelector("main").innerHTML = "";
            makeStartPage();
        })
    }

    }, 800);
    
    let nametag = document.getElementById("nameTagInput").value;
    let password = document.getElementById("passwordInput").value;

    //om det är tomt i fälten.
    if (nametag.length == 0 || password.length == 0){
        document.querySelector("main").append(statusCodeDiv("Please fill in all the fields."));

        document.querySelector(".understood").addEventListener("click", (event) =>{
            let statusCodeDiv = event.target.parentElement.parentElement;
            statusCodeDiv.remove();
        })
        return;
    }


    requestLoginUser(nametag, password);
    spaceShip();
    backgrounds();

})



document.getElementById("newPlayerButton").addEventListener("click", function () {
    clickSound();
    document.querySelector("#hidden").innerHTML = "";
    MakerRegisterPage();
});

