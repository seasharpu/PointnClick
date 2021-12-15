"use strict";

function createTutorial(){
    //Hämtar existerande element
    const mainDiv = document.querySelector("main");

    //alla divar
    const background = document.createElement("div");
    const headerDiv = document.createElement("div");
    const tutorialTitleParent = document.createElement("div");
    const gridMain = document.createElement("div");
    const bottomDiv = document.createElement("div");
    const button = document.createElement("div");

    //Specifikt innehåll
    tutorialTitleParent.innerHTML = `
        <h1>GAME TUTORIAL</h1>
    `
    gridMain.innerHTML= `
        <div class="totPic" id="picOne"></div>
        <div class="totTextParent" id="textOne">
            <p class="totText">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
        </div>
        <div class="totPic" id="picTwo"></div>
        <div class="totTextParent" id="textTwo">
            <p class="totText">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
        </div>
    `
    button.innerHTML = `
        <p>TO SPACESHIP</p>
    `
    //Ger elementen id:n
    background.setAttribute("ID","backgroundPic");
    headerDiv.setAttribute("ID","headerDiv");
    tutorialTitleParent.setAttribute("ID","tutorialTitleParent");
    gridMain.setAttribute("ID","gridMain");
    bottomDiv.setAttribute("ID","buttonParent");
    button.setAttribute("ID","buttonSpaceShip");

    //appendar elementen
    mainDiv.append(background);
    background.append(headerDiv, gridMain, bottomDiv);
    headerDiv.append(tutorialTitleParent);
    bottomDiv.append(button);
}
