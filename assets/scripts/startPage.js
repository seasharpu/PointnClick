"use strict";

function makeStartPage() {
    document.querySelector("main").style.backgroundImage = "url('assets/images/background2.gif')";

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

    let formDiv = document.createElement("div");
    formDiv.setAttribute("ID", "formWrapperDivStart");
    document.querySelector(".logInWrapper").append(formDiv);

    formDiv.innerHTML = `
        <form method="POST" action="/loginUser.php" >
            <h2 class="registerTitle"> NameTag</h2>
            <input type="text" name="nameTag">
            <h2 class="passwordTitle">Password</h2>
            <input type="password" name="password">
            <div id="buttonsDivStart">
                <button class="loginButton" type="submit">Login</button>
                <button class="createUser" type="button">New Player</button>
            </div>
        </form>
    `;
}
makeStartPage();

document.querySelector(".createUser").addEventListener("click", function () {
    clickSound();
    document.querySelector("#hidden").innerHTML = "";
    MakerRegisterPage();
});