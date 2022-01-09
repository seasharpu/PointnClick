"use strict";

function makeStartPage() {

    let formDiv = document.createElement("div");
    formDiv.setAttribute("ID", "formWrapperDiv");
    document.querySelector("main").append(formDiv);

    formDiv.innerHTML = `
        <form method="POST" action="/loginUser.php" >
            <h2 class="registerTitle"> NameTag</h2>
            <input type="text" name="nameTag">
            <h2 class="registerTitle">Password</h2>
            <input type="password" name="password">
            <div id="buttonsDiv">
                <button class="loginButton" type="submit">Login</button>
                <button class="createUser" type="button">Create User</button>
            </div>
        </form>
    `;

document.querySelector("main").append(formDiv);
}
makeStartPage();

