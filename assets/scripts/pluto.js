"use strict";

function createLaikasShip(){
    let laikasShip = document.createElement("div");
    laikasShip.classList.add("laikasShip");
    document.getElementById("main").append(laikasShip);

}
createLaikasShip();

function codePanel() {
    let codeWrapper = document.createElement("div"); //main wrapper för innehållet
    document.getElementById("main").append(codeWrapper);
    codeWrapper.classList.add("codeWrapper");
    codeWrapper.innerHTML =`<h1 class="codePanelTitle">UNLOCK LAIKAS SHIP
                                <p class= "codeMessage"></p>
                            </h1>`;
    
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
            document.querySelector(".codeMessage").innerHTML ="";
            let numberDiv = document.createElement("div"); 
            let display = codeinputnumbers.innerHTML;
            numberDiv.append(display); 
            codeinputnumbers.innerHTML = `${display + numberString}`;
        })
    }    
}

codePanel();

function codeControllerButton(){
    let enterCodeButton = document.createElement("div");
    document.querySelector(".codeWrapper").append(enterCodeButton);
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
            document.querySelector(".codeMessage").innerHTML ="This is not the right code!";

        }
    })
}

codeControllerButton();


function clearPanel (clearButton){
    clearButton = document.createElement("div");
    clearButton.classList.add("clearCodePanelButton");
    document.querySelector(".codeWrapper").append(clearButton);
    clearButton.innerHTML=`<p class="clearButton">CLEAR CODE</p>`;
    
    clearButton.addEventListener("click", () => {
        document.querySelector(".codeinputnumbers").innerHTML = "";
    })

}
clearPanel();


document.querySelector(".laikasShip").addEventListener("click", function(){
    console.log("click worked");
    let wrapper = document.querySelector(".codeWrapper");
    let numberWrapper = document.querySelector(".codeNumbersWrapper");
    let panelTitle = document.querySelector(".codePanelTitle");
    let enterCode = document.querySelector(".enterCodeButton");
    let clearCode = document.querySelector(".clearCodePanelButton");

    let enterButtonText = document.querySelector(".enterButton");
    let clearButtonText = document.querySelector(".clearButton");
    let codeNumber = document.getElementsByClassName("codeNumbers");

    if (wrapper.classList.contains("transformSize")){
        wrapper.classList.remove("transformSize");
        numberWrapper.classList.remove("numberWrapperSize");
        enterCode.classList.remove("enterCodeSize");
        clearCode.classList.remove("clearCodeSize");
        panelTitle.classList.remove("panelTitleSize");

        enterButtonText.classList.remove("enterButtonSize");
        clearButtonText.classList.remove("clearButtonSize");

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

        for (let i = 0; i < codeNumber.length; i++){
            codeNumber[i].classList.add("numberSize");
        }
    }
});