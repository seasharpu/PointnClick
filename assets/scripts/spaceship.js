"use strict";
// SKAPAR DIV SOM SKA ÄNDRA BAKRUND
function backgrounds() {
    let background = document.createElement("div");
    background.classList.add("background");
    document.querySelector("main").append(background);
}
// *FUNCKTIONEN SOM BEHÖVS VARA IGÅNG FÖR ATT SE NÅGOT*
spaceShip();
// SPACESHIP
function spaceShip() {
    document.getElementById("hidden").innerHTML = "";
    let spaceShipBackground = document.createElement("div");
    spaceShipBackground.classList.add("spaceShipBackground");
    document.querySelector("main").append(spaceShipBackground);
    document.getElementById("location").innerHTML = "Spaceship";
    //document.querySelector(".spaceShipBackground").style.backgroundImage = "url('images/spaceship.bmp')";
    //document.querySelector(".spaceShipBackground").style.position = "static";
    backgrounds();
    
    // RYMDEN DÄR ALLA PALANETER FINNS
    let space = document.createElement("div");
    document.querySelector(".spaceShipBackground").append(space);
    space.classList.add("space");

    // UNDERVATTENPLANETEN
    let underwaterPLANET = document.createElement("div");
    underwaterPLANET.classList.add("underwaterPLANET");
    document.querySelector(".space").append(underwaterPLANET);

    // NÄR MAN KLICKAR PÅ UNDERVATTENPLANETEN
    underwaterPLANET.addEventListener("click", function() {
    cleanBackground();
    waterplanetbackground();
 });

    // JUNGELPLANETEN
    let junglePLANET = document.createElement("div");
    junglePLANET.classList.add("junglePLANET");
    document.querySelector(".space").append(junglePLANET);

    // NÄR MAN KLICKAR PÅ JUNGELPLANETEN
    junglePLANET.addEventListener("click", function() {
    cleanBackground();
    jungleplanetbackground();
 });

    // PARTYPLANETEN
    let partyPLANET = document.createElement("div");
    partyPLANET.classList.add("partyPLANET");
    document.querySelector(".space").append(partyPLANET);

    // NÄR MAN KLICKAR PÅ PARTYPLANETEN
    partyPLANET.addEventListener("click", function() {
    cleanBackground();
    partyplanetbackground();
 });

    // ALIENPLANETEN
    let alienPLANET = document.createElement("div");
    alienPLANET.classList.add("alienPLANET");
    document.querySelector(".space").append(alienPLANET);

    // NÄR MAN KLICKAR PÅ ALIENPLANETEN
    alienPLANET.addEventListener("click", function() {
    cleanBackground();
    alienplanetbackground();
});

    // ÖKENPLANETEN
    let desertPLANET = document.createElement("div");
    desertPLANET.classList.add("desertPLANET");
    document.querySelector(".space").append(desertPLANET);

    // NÄR MAN KLICKAR PÅ ÖKENPLANETEN
    desertPLANET.addEventListener("click", function() {
    cleanBackground();
    desertplanetbackground();
 });

    // PLUTOPLANETEN
    let plutoPLANET = document.createElement("div");
    plutoPLANET.classList.add("plutoPLANET");
    document.querySelector(".space").append(plutoPLANET);

    // NÄR MAN KLICKAR PÅ PLUTOPLANETEN
    plutoPLANET.addEventListener("click", function() {
    cleanBackground();
    plutoplanetbackground();
    });
}

// PÅ WATERPLANET
function waterplanetbackground() {
    document.querySelector(".background").style.backgroundImage = "url('/assets/images/Underwater.png')";
    document.querySelector(".background").style.position = "static";
    document.getElementById("location").innerHTML = "Waterplanet";
    backToSpaceship()
};
// PÅ JUNGLEPLANET
function jungleplanetbackground() {
    document.querySelector(".background").style.backgroundImage = "url('/assets/images/jungleplanet.png')";
    document.querySelector(".background").style.position = "static";
    document.getElementById("location").innerHTML = "Jungleplanet";
    backToSpaceship()
};
// PÅ PLUTOPLANET
function plutoplanetbackground() {
    document.querySelector(".background").style.backgroundImage = "url('/assets/images/jungleplanet.png')";
    document.querySelector(".background").style.position = "static";
    document.getElementById("location").innerHTML = "Plutoplanet";
    backToSpaceship()
}
// PÅ PARTYPLANET
function partyplanetbackground() {
    document.querySelector(".background").style.backgroundImage = "url('/assets/images/alien.png')";
    document.querySelector(".background").style.position = "static";
    document.getElementById("location").innerHTML = "Patyplanet";
    backToSpaceship()
}
// PÅ DESERTPLANET
function desertplanetbackground() {
    document.querySelector(".background").style.backgroundImage = "url('/assets/images/tiledesert.png')";
    document.querySelector(".background").style.position = "static";
    document.getElementById("location").innerHTML = "Desertplanet";
    backToSpaceship()
}
// PÅ ALIENPLANETEN
function alienplanetbackground() {
    document.querySelector(".background").style.backgroundImage = "url('/assets/images/alien.png')";
    document.querySelector(".background").style.position = "static";
    document.getElementById("location").innerHTML = "Alienplanet"
    backToSpaceship();
}

// Rensar bakgrunden
function cleanBackground() {
    document.querySelector(".spaceShipBackground").style.display = "none";
    document.querySelector(".space").style.display = "none";
}

//Back to spaceship
function backToSpaceship() {
    let backToSpaceship = document.createElement("div");
    backToSpaceship.classList.add("backToSpaceship");
    backToSpaceship.innerHTML = "BACK TO SPACESHIP"
    document.querySelector(".background").append(backToSpaceship);

    backToSpaceship.addEventListener("click", function() {
        document.querySelector(".background").style.display = "none";
        spaceShip();
    });
}