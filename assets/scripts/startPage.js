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

    // let NameTagText = document.createElement("h2");
    // NameTagText.classList.add("NameTagText");
    // document.querySelector(".logInWrapper").append(NameTagText);
    // NameTagText.innerHTML = "NameTag";

    // let NameTagInput = document.createElement("input");
    // document.querySelector(".logInWrapper").append(NameTagInput);
    // NameTagInput.setAttribute("ID", "nameTagInput");

    // let PasswordText = document.createElement("h2");
    // PasswordText.classList.add("PasswordText");
    // document.querySelector(".logInWrapper").append(PasswordText);
    // PasswordText.innerHTML = "Password";
    // let PassWordInput = document.createElement("input");
    // document.querySelector(".logInWrapper").append(PassWordInput);
    // PassWordInput.setAttribute("ID", "passwordInput");

    // let buttonsDiv = document.createElement("div");
    // document.querySelector(".logInWrapper").append(buttonsDiv);
    // buttonsDiv.classList.add("buttonsDiv");

    // let newPlayerButton = document.createElement("div");
    // let signUpButton = document.createElement("div");
    // document.querySelector(".buttonsDiv").append(newPlayerButton, signUpButton);
    // newPlayerButton.innerHTML = "<p>New player</p>";
    // signUpButton.innerHTML = "<p>Sign in</p>";
    // signUpButton.setAttribute("ID", "signInButton");
    // newPlayerButton.setAttribute("ID", "newPlayerButton");

    let formDiv = document.createElement("div");
    formDiv.setAttribute("ID", "formWrapperDivStart");
    document.querySelector(".logInWrapper").append(formDiv);

    formDiv.innerHTML = `
        <form id="loginForm" action="loginUser.php" method="POST">
            <h2 class="nameTitle"> NameTag</h2>
            <input type="text" name="nameTag">
            <h2 class="passwordTitle">Password</h2>
            <input type="password" name="password">
            <div id="buttonsDivStart">
                <button class="loginButton" type="submit">Login</button>
                <button class="createUser" type="button">New Player</button>
            </div>
        </form>
    `;


document.querySelector(formContainerDiv).append(formDiv);

//LOGIN USER
//const form = document.getElementById("loginForm");
//form.addEventListener("submit", (event) => {
//    event.preventDefault();
//    const data = new FormData(form);
//    console.log(data);
//
//
//    const req = new Request("/loginUser.php", {
//        method: "POST",
//        body: JSON.stringify(data),
//        });
//
//        fetch(req)
//        .then(response => {
//            console.log(response);
//            })
//});

}
makeStartPage();


//document.getElementById("signInButton").addEventListener("click", function () {
//    clickSound();
//    let nametag = document.getElementById("nameTagInput").value;
//    let password = document.getElementById("passwordInput").value;
//    requestLoginUser(nametag, password);
//    spaceShip();
//    backgrounds();
//    
//});
//
//document.getElementById("newPlayerButton").addEventListener("click", function () {
//    clickSound();
//    document.querySelector("#hidden").innerHTML = "";
//    MakerRegisterPage();
//});

