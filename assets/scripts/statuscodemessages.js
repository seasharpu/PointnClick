"use strict";
//vi använder oss av både egna och generella statuskoder här.
//se kommentarer.
//100: generell info 

//200 - 299 : gick bra 
    //210 - lyckades logga in
    //211 - lade till item i användarens inventory
    //212 - lyckades ändra nameTag
    //213 - lyckades deleta item från användarens inventory
    //214 - tog bort användaren

//300: du ska inte vara här.

//400 - 499: ngt gick fel på klienten 
    //405 - content type is not JSON
    //460 - hittade inte item i användarens inventory
    //461 - information från klient är fel. Försök igen
    //462 - kunde inte ändra namn
    //463 - hittade inte användaren 
    //464 - något fält i skapa användare är tomt
    //465 - bild är för stor 
    //466 - något error kom upp i samband med _FILES[image][error]
    //467 - lösen vill ha mer än 3 tecken
    //468 - användare finns ej - vid inloggning
    //469 - fel inmatning vid inloggning

//500 - 599: ngt gick fel på servern 


function statusCodeDiv(message){
    let div = document.createElement("div");
    div.classList.add("statusCodeDiv");
    document.querySelector("main").append(div);

    div.innerHTML = `
    <div>
        <h2>Message</h2>
        <p class="statusColor">${message}</p>
        <div class="understood">OK</div>
    </div>
    `;

    return div;
}


function statusCodeDivEnd(message){
    let div = document.createElement("div");
    div.classList.add("statusCodeDiv");
    document.querySelector("main").append(div);
    let button = document.createElement("div");

    div.innerHTML = `
    <div>
        <h2>Message</h2>
        <p class="statusColorexitORstay">${message}</p>
        <div class="stayORexitButtons">
            <div class="understoodToStay">Stay and explore</div>
            <div class="buttonToexit"><a href='php/exit.php'>Exit world</a></div>
        </div>    
    </div>
    `;
    return div;
}



function getStatusCode(responseFromFetch){

    //alla olika statuskoder som kan komma upp, som har "skapats" i respons
    //till if-satser i server.php
        //
        //RÄTTMEDDELANDEN
        //
        if(responseFromFetch.status == 210){
            statusCodeDiv("Successfully logged in!");
        };//lyckas logga in.
        if(responseFromFetch.status == 211){
            statusCodeDiv("Item was added to your inventory!");
        };//item lades in till inventory
        if(responseFromFetch.status == 212){
            statusCodeDiv("You have successfully changed your name tag!");
        };//nameTag ändrades
        if(responseFromFetch.status == 213){
            statusCodeDiv("Item was deleted from your inventory!");
        };//item raderades från inventory
        if(responseFromFetch.status == 214){
            statusCodeDiv("You have successfully removed your user.");
        };//borttaggning av användare success
        //
        //FELMEDDELANDEN
        //
        if(responseFromFetch.status == 405){
            statusCodeDiv("Wrong format. Would you please try that again?");
        };//content type är inte JSON. av ngn anledning
        if(responseFromFetch.status == 460){
            statusCodeDiv("Item was not found. Please try again.");
        };//item hittades inte i användarens itemarray
        if(responseFromFetch.status == 461){
            statusCodeDiv("Not enought information. Please try again.");
        };//information är generellt fel, try AGAIN
        if(responseFromFetch.status == 462){
            statusCodeDiv("Could not change name tag. Please try again.");
        };//kunde inte ändra namn
        if(responseFromFetch.status == 463){
            statusCodeDiv("User was not found. Huh?");
        };//kan inte hitta användaren
        if(responseFromFetch.status == 464){
            statusCodeDiv("Please fill in all the fields.");
        };//fält i skapa användare är tomt
        if(responseFromFetch.status == 465){
            statusCodeDiv("Picture is too large! Try something smaller than 400kb.");
        };//bild är större än ~400kb
        if(responseFromFetch.status == 466){
            statusCodeDiv("Something went wrong with your picture. Please try again.");
        };//något error från _FILES[image][error]
        if(responseFromFetch.status == 467){
            statusCodeDiv("Please add more than 3 characters to your password.");
        };//lösen behöver mer än 3 tecken
        if(responseFromFetch.status == 468){
            statusCodeDiv("Please add more than 2 characters to your new name tag.");
        };//nametag behöver mer än 2 tecken
        if(responseFromFetch.status == 469){
            statusCodeDiv("Perhaps you spelled something wrong. Try again.");
        };//nametag & password överensstämmer inte med databas
        if(responseFromFetch.status >= 500){
            statusCodeDiv("Server error! Sorry about that.");
        };//om 500 eller högre- serverfel

        //färger på texten beroende på statusen.
        if (responseFromFetch.status >= 201){
            document.querySelector(".statusColor").style.color = "rgb(3, 220, 3)";
        }
        if (responseFromFetch.status >= 400){
            document.querySelector(".statusColor").style.color = "red";
        }
        if (responseFromFetch.status >= 500){
            document.querySelector(".statusColor").style.color = "orange";
        }
        //click-eventet fungerar bara om divven kommit upp.
        document.querySelector(".understood").addEventListener("click", (event) =>{
            let statusCodeDiv = event.target.parentElement.parentElement;
            statusCodeDiv.remove();
        });
    };

