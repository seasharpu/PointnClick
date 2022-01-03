"use strict";

let spaceShipBackground = document.querySelector(".spaceShipBackground");

let cloudSmall = document.createElement("div");
cloudSmall.classList.add("cloudSmall");
cloudSmall.classList.add("cloud");
spaceShipBackground.append(cloudSmall);

let cloudBig = document.createElement("div");
cloudBig.classList.add("cloudBig");
cloudBig.classList.add("cloud");
spaceShipBackground.append(cloudBig);