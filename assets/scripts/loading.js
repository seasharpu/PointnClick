"use strict";

function loadingDivPlanet(){
    let loadingDivMain = document.getElementById("hidden");
    loadingDivMain.innerHTML = "";

    let loadingDivWrapper = document.createElement("div");
    loadingDivWrapper.classList.add("ldWrapper");

    loadingDivWrapper.innerHTML = `
        <div class="lds-dots"><div></div><div></div><div></div></div>
        <h2 id="travelingText">Traveling to planet</h2>
        <div id="spaceshipImgMoving"></div>
    `
    loadingDivMain.append(loadingDivWrapper);
}

function loadingDivSpaceship(){
    let loadingDivMain = document.getElementById("hidden");
    loadingDivMain.innerHTML = "";

    let loadingDivWrapper = document.createElement("div");
    loadingDivWrapper.classList.add("ldWrapperShip");

    loadingDivWrapper.innerHTML = `
        <div class="lds-dots"><div></div><div></div><div></div></div>
        <h2 id="travelingText">Beaming up to spaceship</h2>
        <div id="beamgif"></div>
    `
    loadingDivMain.append(loadingDivWrapper);
}

