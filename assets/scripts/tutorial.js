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
            "On the 3rd of November 1957, a spacedog named Laika was launched off into space by the Soviet space program. As she was traveling around in space the guidance system failed sending her into an unstable orbit. The spacecraft spun out of control and Laika quickly corrected course but realized that, instead of earth, a strange planet had appeared before her. Laika made an emergency crash landing on to the alien planet´s surface.
            However the crash compromised the spaceship so Laika sent out an emergency signal back for headquarters to hear. With no response she put on her spacehelmet and hoped for the best. Little did she know that a brave hero picked up her distress signal and set off to rescue her. 
            In the spaceship you will be able to choose which planet you want to travel to. Some of the planets are locked and will need a special item to allow access. Clues about which item is needed will be given by a fellow friend (or foe) on a certain planet. Once you have the item you will be able to explore the locked planet. These items will be shown in your inventory and can be removed at any time. 

            You will be able to travel back to the planets as you wish and continue to explore. Once you’ve made it to Laikas planet you will have to insert a code to open her spaceship. You can find a clue in the box nearby. Regarding the codepanel you should keep an extra lookout for a special something in the background on each planet. 

            Now that you have the basics down, you’re free to explore and most importantly save Laika. Oh, and don’t forget to see what the aliens have to say, even if it might sound alien. Good luck fellow space friend!
            "
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

    document.querySelector("#buttonSpaceShip").addEventListener("click", function () {
        document.querySelector("#hidden").innerHTML = "";
        spaceShip();
        backgrounds();
    
    });
}
