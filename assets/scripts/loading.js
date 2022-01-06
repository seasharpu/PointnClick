"use strict";

function loadingDivPlanet(){

    let loadingDivWrapper = document.createElement("div");
    loadingDivWrapper.classList.add("ldWrapper");

    loadingDivWrapper.innerHTML = `
        <div class="lds-dots"><div></div><div></div><div></div></div>
        <h2 id="travelingText">Traveling to planet</h2>
        <div id="spaceshipImgMoving"></div>
    `
    document.getElementById("hidden").append(loadingDivWrapper);

    setTimeout(() => {
        loadingDivWrapper.style.display = "none";
    }, 2000);
}

function loadingDivSpaceship(){

    let loadingDivWrapper = document.createElement("div");
    loadingDivWrapper.classList.add("ldWrapperShip");

    loadingDivWrapper.innerHTML = `
        <div class="lds-dots"><div></div><div></div><div></div></div>
        <h2 id="travelingText">Beaming up to spaceship</h2>
        <div id="beamgif"></div>
    `
    document.getElementById("hidden").append(loadingDivWrapper);

    setTimeout(() => {
        loadingDivWrapper.style.display = "none";
    }, 2000);
}

