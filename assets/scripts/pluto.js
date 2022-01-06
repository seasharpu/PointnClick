"use strict";

//Skapar kodpanelen när man är inne på Pluto.
function createCodePanel(){
    let wrapperShipDiv = document.createElement("div");
    document.querySelector(".background").append(wrapperShipDiv);
    wrapperShipDiv.classList.add("wrapperShipDiv");

    //Skapar "laikas skepp"
    function createLaikasShip(){
        let laikasShip = document.createElement("div");
        laikasShip.classList.add("laikasShip");
        wrapperShipDiv.append(laikasShip);

    }
    createLaikasShip();
    //Själva kodpanelen
    function codePanel() {
        let codeWrapper = document.createElement("div"); //main wrapper för innehållet
        wrapperShipDiv.append(codeWrapper);
        codeWrapper.classList.add("codeWrapper");
        codeWrapper.innerHTML =`<h1 class="codePanelTitle">ENTER KEY</h1>`;
        
        let codePanelIMGandNumbers = document.createElement("div"); //innehållet för bilder och input (siffror)
        codeWrapper.append(codePanelIMGandNumbers);
        codePanelIMGandNumbers.classList.add("codePanelIMGandNumbers");
        
        let codePanelWrapper = document.createElement("div"); 
        codePanelWrapper.classList.add("codeNumbersWrapper");
        codeWrapper.append(codePanelWrapper);

        let codeinputnumbers = document.createElement("div");
        codeinputnumbers.classList.add("codeinputnumbers");
        codePanelIMGandNumbers.append(codeinputnumbers);
        
    
        //skapar divar för kodpanelen 
        for (let i= 1; i <= 9; i++) {
            let codeNumbers = document.createElement("div");
            codePanelWrapper.append(codeNumbers);
            let numberString = i;
            codeNumbers.classList.add("codeNumbers");
            codeNumbers.innerHTML = numberString;

            codeNumbers.addEventListener("click", () => { 
                let numberDiv = document.createElement("div"); 
                let display = codeinputnumbers.innerHTML;
                numberDiv.append(display); 
                codeinputnumbers.innerHTML = `${display}<p class="displayNumberDiv">${numberString}</p>`;
                
                let displayNumberDiv = document.querySelectorAll(".displayNumberDiv");

                if (displayNumberDiv.length > 6) {
                    console.log("too long");
                    codeinputnumbers.innerHTML = "";
                    codeinputnumbers.innerHTML = `<p>Password is too long!</p>`;
                }

            })
        }
        let buttonWrapperPanel = document.createElement("div");
        buttonWrapperPanel.classList.add("buttonWrapperPanel");
        codeWrapper.append(buttonWrapperPanel);
    }

    codePanel();
    //Knappen för att kontrollera koden
    function codeControllerButton(){
        let enterCodeButton = document.createElement("div");
        document.querySelector(".buttonWrapperPanel").append(enterCodeButton);
        enterCodeButton.classList.add("enterCodeButton");
        enterCodeButton.innerHTML=`<p class="enterButton">ENTER CODE</p>`;
        let password = `123456`;

        enterCodeButton.addEventListener("click", () => {
            let codeValues = document.querySelector(".codeinputnumbers").innerHTML;
            console.log(codeValues);
    
            if(codeValues === password) {
                console.log("this is right");
            }else {
                console.log("not right")
                document.querySelector(".codeinputnumbers").innerHTML = "";
                document.querySelector(".codeinputnumbers").innerHTML = `<p>This is not the right code!</p>`;

            }
        })
    }

    codeControllerButton();

    //Knappen för att ta radera koden ur displayen
    function clearPanel (clearButton){
        clearButton = document.createElement("div");
        clearButton.classList.add("clearCodePanelButton");
        document.querySelector(".buttonWrapperPanel").append(clearButton);
        clearButton.innerHTML=`<p class="clearButton">CLEAR CODE</p>`;
        
        clearButton.addEventListener("click", () => {
            document.querySelector(".codeinputnumbers").innerHTML = "";
        })

    }
    clearPanel();

    //Classer för att få panelen att växa större och mindre
    document.querySelector(".laikasShip").addEventListener("click", function(){
        console.log("click worked");
        let wrapper = document.querySelector(".codeWrapper");
        let numberWrapper = document.querySelector(".codeNumbersWrapper");
        let panelTitle = document.querySelector(".codePanelTitle");
        let enterCode = document.querySelector(".enterCodeButton");
        let clearCode = document.querySelector(".clearCodePanelButton");
        let codeScreen = document.querySelector(".codePanelIMGandNumbers");

        let enterButtonText = document.querySelector(".enterButton");
        let clearButtonText = document.querySelector(".clearButton");
        let codeNumber = document.getElementsByClassName("codeNumbers");
        let screenNumbers = document.querySelector(".codeinputnumbers");

        if (wrapper.classList.contains("transformSize")){
            wrapper.classList.remove("transformSize");
            numberWrapper.classList.remove("numberWrapperSize");
            enterCode.classList.remove("enterCodeSize");
            clearCode.classList.remove("clearCodeSize");
            panelTitle.classList.remove("panelTitleSize");

            enterButtonText.classList.remove("enterButtonSize");
            clearButtonText.classList.remove("clearButtonSize");
            codeScreen.classList.remove("codeScreenSize");
            screenNumbers.classList.remove("screenNumberSize");

            for (let i = 0; i < codeNumber.length; i++){
                codeNumber[i].classList.remove("numberSize");
            }

        } else {
            wrapper.classList.add("transformSize");
            numberWrapper.classList.add("numberWrapperSize");

            enterCode.classList.add("enterCodeSize");
            clearCode.classList.add("clearCodeSize");
            panelTitle.classList.add("panelTitleSize");

            enterButtonText.classList.add("enterButtonSize")
            clearButtonText.classList.add("clearButtonSize");
            codeScreen.classList.add("codeScreenSize");
            screenNumbers.classList.add("screenNumberSize");

            for (let i = 0; i < codeNumber.length; i++){
                codeNumber[i].classList.add("numberSize");
            }
        }
    });
}

//Skapar den lilla lådan med kodordningen
function createBox(){
    let box = document.createElement("div");
    box.classList.add("cardboardBox");
    document.querySelector(".background").append(box);

    let notepad = document.createElement("div");
    notepad.classList.add("notepad");
    document.querySelector(".background").append(notepad);

    box.addEventListener("click",() => {
        if (notepad.classList.contains("notepadBig")){
            notepad.classList.remove("notepadBig");
        } else {
            notepad.classList.add("notepadBig");
        }
    });
}

