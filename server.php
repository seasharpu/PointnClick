<?php
session_start();
require_once "functions.php";
//fil för serverhantering. Här sker alla GET, POST, 
//PATCH och DELETE.


$rqstMethod = $_SERVER["REQUEST_METHOD"];
$contentType = $_SERVER["CONTENT_TYPE"];

$data = file_get_contents("php://input");
$rqstData = json_decode($data, true);

// Tillåt alla (origins) och alla headers
if ($rqstMethod === "OPTIONS") {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
}

// Alla är välkommna
header("Access-Control-Allow-Origin: *");

//TODO
//lägg till kontroll om användarnamn redan finns.
//ändra nycklar till SESSION, där det sker inloggning 
//och när vi behöver klla om någon är inloggad
if ($contentType == "application/json") {

   //kod funkar endast om inskickat material är json.
    if ($rqstMethod === "POST") {
       //loggar in en redan EXISTERANDE användare
       //nameTag & password
        if (isset($rqstData["nameTag"], $rqstData["password"]) && !isset($_FILES["images"])) {
            $users = loadJson("api/user.json");
            $found = false;

            foreach ($users as $key => $user) {
                if ($user["nameTag"] == $rqstData["nameTag"] && $user["password"] == $rqstData["password"]) {
                    $_SESSION["userID"] = $user["id"];
                    $_SESSION["nameTag"] = $user["nameTag"];
                    $_SESSION["isLoggedIn"] = true;
                    $found = true;
                }
            }
            if ($found) {
                statusCode(210);
            } else {
                statusCode(469);
            }
            //lägger till ETT ITEM i användarens array
        } elseif (isset($rqstData["inventoryID"], $rqstData["userID"])){
            $users = loadJson("api/user.json");
            $items = loadJson("api/items.json");
            $found = FALSE;
            $userID = null;
            $addedItem = $rqstData["inventoryID"];

           //hitta den specifika användaren.
            foreach ($users as $user) {
                if ($rqstData["userID"] == $user["id"]) {
                    $userID = $user["id"];
                }
            }

           //den specifika användarens inventory.
            foreach ($items as $key => $item) {
                if ($rqstData["inventoryID"] == $item["id"]) {
                    $found = TRUE;
                    array_push($users[$key]["inventory"], $addedItem);
                }
            }
            if ($found == FALSE) {
                statusCode(460);
            }
            saveJson("api/user.json", $users);
            statusCode(211);
        }else {
                statusCode(461);
            }
        }
    }

   //Ändra användarnamn
   //Behöver nytt användarnamn
    if ($rqstMethod === "PATCH") {
        if (isset($rqstData["newNameTag"], $rqstData["nameTag"])) {
            $users = loadJson("api/user.json");
            $newNameTag = $rqstData["newNameTag"];
            $foundUser = false;

            if (strlen($$rqstData["nameTag"]) <= 2) {
                statusCode(468);
            }

            foreach ($users as $key => $user) {
                if ($rqstData["nameTag"] == $user["nameTag"]) {
                    $foundUser = true;
                    $users[$key]["nameTag"] = $newNameTag;
                }
            }
            if ($foundUser) {
                saveJson("api/user.json", $users);
                statusCode(212);
            } else {
                statusCode(462);
            }
            ///DELETE INVENTORY ITEM
        } elseif (isset($rqstData["inventoryID"], $rqstData["userID"])) {
            $users = loadJson("api/user.json");
            $found = FALSE;
            $userID = null;

           //hitta den specifika användaren.
            foreach ($users as $key => $user) {
                if ($rqstData["userID"] == $user["id"]) {
                    $userID = $user["id"];
                    $index = $key;
                }
            }
           //den specifika användarens inventory.
            foreach ($users[$index]["inventory"] as $key => $userItem) {
                if ($rqstData["inventoryID"] == $userItem) {
                    $found = TRUE;
                    array_splice($users[$index]["inventory"], $key, 1);
                }
            }
            if ($found == FALSE) {
                statusCode(460);
            }
            saveJson("api/user.json", $users);
            statusCode(213);
        }else {
            statusCode(461);
        }
    }

   //ta bort användare
   //Behöver användarens id.
    if ($rqstMethod === "DELETE") {

       //tar bort ANVÄNDAREN. behöver userID, och specifikt INTE inventoryID. 
        if (isset($rqstData["deleteUserID"]) && !isset($rqstData["inventoryID"])) {

            $users = loadJson("api/user.json");
            $found = FALSE;

            foreach ($users as $key => $user) {
                if ($rqstData["deleteUserID"] == $user["id"]) {
                    $found = TRUE;
                    array_splice($users, $key, 1);
                }
            }
            if ($found == False) {
                statusCode(463);
            } else {
                saveJson("api/user.json", $users);
                statusCode(214);
            }
        }
    }
   //logga ut knappen ska ha en a href länk som skickar
   //till server.php/logout.
   //TODO: kolla GET-förfrågan om den är "logout",
   //om den är det avslutas SESSION, och användaren skickas
   //till index.php igen. (logga in sida)
    if ($rqstMethod === "GET") {
        if ($_GET == "logout") {
            session_unset();
            session_destroy();
            header("Location: index.html");
        }
    } else {
    statusCode(405);
}
