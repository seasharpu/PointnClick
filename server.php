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
if ($contentType == "application/json" || $contentType == "multipart/form-data") {

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
               sendJson("Login succcessful");
           } else {
               sendJson("Information incorrect", 400);
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

           foreach ($users as $key => $user) {
               if ($rqstData["nameTag"] == $user["nameTag"]) {
                   $foundUser = true;
                   $users[$key]["nameTag"] = $newNameTag;
               }
           }
           if ($foundUser) {
               saveJson("api/user.json", $users);
               sendJson("namechange successful");
           } else {
               sendJson("namechange failed", 404);
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
           var_dump($users[$index]["inventory"]);
           //den specifika användarens inventory.
           foreach ($users[$index]["inventory"] as $key => $userItem) {
               if ($rqstData["inventoryID"] == $userItem) {
                   echo $userItem;
                   $found = TRUE;
                   array_splice($users[$index]["inventory"], $key, 1);
                   
               }
           }
           if ($found == FALSE) {
               sendJson(["item not found"], 404);
           }
           saveJson("api/user.json", $users);
           sendJson("successfully deleted item");
       } else {
           sendJson("fill in all information", 404);
       }
   }

   //ta bort användare
   //Behöver användarens id.
   if ($rqstMethod === "DELETE") {

       //tar bort ANVÄNDAREN. behöver userID och nameTag, och specifikt INTE inventoryID. 
       if (isset($rqstData["deleteUserID"]) && !isset(
           $rqstData["inventoryID"]
       )) {

           $users = loadJson("api/user.json");
           $found = FALSE;

           foreach ($users as $key => $user) {
               if ($rqstData["deleteUserID"] == $user["id"]) {
                   $found = TRUE;
                   array_splice($users, $key, 1);
               }
           }
           if ($found == False) {
               sendJson(["user not found"], 404);
           } else {
               saveJson("api/user.json", $users);
               sendJson("successful");
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
   }
} else {
   sendJson(["Content type is not JSON."], 405);
}
