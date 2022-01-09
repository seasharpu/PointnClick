"use strict";

//REGISTER SIDA
function MakerRegisterPage() {
    document.querySelector("main").style.backgroundImage = "url('assets/images/background2.gif')";
 
    let GridWrapperDiv = document.createElement("div");
    document.querySelector("main").append(GridWrapperDiv);
    GridWrapperDiv.classList.add("GridWrapperDiv");

    let wrapperDiv = document.createElement("div");
    wrapperDiv.classList.add("wrapperDiv");
    document.querySelector(".GridWrapperDiv").append(wrapperDiv);

    let registerDiv = document.createElement("div");
    registerDiv.classList.add("registerDiv");

    //let avatarWrapperDiv = document.createElement("div");
    //avatarWrapperDiv.classList.add("avatarWrapperDiv");

    document.querySelector(".wrapperDiv").append(registerDiv);


    //for (let i= 1; i <= 4; i++) {
    //    let avatars = document.createElement("div");
    //    avatars.classList.add("avatars");
    //    avatarWrapperDiv.append(avatars);

    //}   

    //skapa new player from
    let formDiv = document.createElement("div");
    formDiv.setAttribute("ID", "formWrapperDiv");
    registerDiv.append(formDiv);

    formDiv.innerHTML = `
        <form id="registerForm" action="/createUser.php" method="POST" enctype="multipart/form-data">
        <div id="regiFormWrapper">
            <div id="uploadpicture">
                <input type="file" name="image" id="file" onchange="loadfile(event)">
                <label for="file">
                    Choose profile picture
                </label>
            </div>
            <img id="prePic">
                <h2 class="placeholderTitle"> NameTag</h2>
                <input type="text" placeholder="NameTag" name="nameTag">
                <h2 class="placeholderTitle">Password</h2>
                <input type="text" placeholder="Password" name="password">
            <div id="buttonsDiv">
                <button type="submit" id="startExploring">Start Exploring</button>
                <button id="cancelButton"><a href='exit.php'>Cancel</a></button>
            </div>
        </div>
        <div id="avaterFormWrpper">
        <div id="avatarHeader">Choose your avatar</div>
            <div class="avatarWrapperDiv">
                <div class="avatars"><input type="radio" id="avatar1" name="avatarPic" value="HTML"></div>
                <div class="avatars"><input type="radio" id="avatar2" name="avatarPic" value="HTML"></div>
                <div class="avatars"><input type="radio" id="avatar3" name="avatarPic" value="HTML"></div>
                <div class="avatars"><input type="radio" id="avatar4" name="avatarPic" value="HTML"></div>
            </div>
        </div>
        </form>
    `

    // document.querySelector("#startExploring").addEventListener("click", function () {
    //     document.querySelector("#hidden").innerHTML = "";
    //     createTutorial();
    
    // });
}

//MakerRegisterPage();

//för så att bilden man laddar upp kan förhandsvisas
function loadfile(event){
    var output=document.getElementById("prePic");
    document.getElementById("prePic").classList.add("show")
    output.src=URL.createObjectURL(event.target.files[0]);
}



// console.log(createdUser);
// if (createdUser == true){
    
//     document.querySelector("main").innerHTML = "";
//     // document.querySelector(".logInWrapper").innerHTML = "HEJ";
//     // document.querySelector(".titleTextDiv").innerHTML = "HEJHEJ";
//     createTutorial();
//     console.log("den är true");
// }
