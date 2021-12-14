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
//if ($contentType == "application/json") {
//    echo $contentType;
//    //kod funkar endast om inskickat material är json.
//    if ($rqstMethod === "POST") {
//        //loggar in en redan EXISTERANDE användare
//        //nameTag & password
//        if (isset($rqstData["nameTag"], $rqstData["password"]) && !isset($FILES["images"])) {
//            $users = loadJson("api/testUser.json");
//            $found = false;
//
//            foreach ($users as $key => $user) {
//                if ($user["nameTag"] == $rqstData["nameTag"] && $user["password"] == $rqstData["password"]) {
//                    $_SESSION["userID"] = $user["id"];
//                    $_SESSION["nameTag"] = $user["nameTag"];
//                    $_SESSION["isLoggedIn"] = true;
//                    $found = true;
//                }
//            }
//            if ($found) {
//                sendJson(200, "Login succcessful");
//            } else {
//                sendJson(400, "Information incorrect");
//            }
//        }
//    }
//
//    //Ändra användarnamn
//    //Behöver nytt användarnamn
//    if ($rqstMethod === "PATCH") {
//        if (isset($rqstData["newNameTag"], $rqstData["nameTag"])) {
//            $users = loadJson("api/testUser.json");
//            $newNameTag = $rqstData["newNameTag"];
//            $foundUser = false;
//
//            foreach ($users as $key => $user) {
//                if ($rqstData["nameTag"] == $user["nameTag"]) {
//                    $foundUser = true;
//                    $users[$key]["nameTag"] = $newNameTag;
//                }
//            }
//            if ($foundUser) {
//                saveJson("api/testUser.json", $users);
//                sendJson(200, "namechange successful");
//            } else {
//                sendJson(404, "namechange failed");
//            }
//             ///DELETE INVENTORY ITEM
//        } elseif (isset($rqstData["inventoryID"], $rqstData["userID"])) {
//            $users = loadJson("api/testUser.json");
//            $found = FALSE;
//            $userID = null;
//
//            //hitta den specifika användaren.
//            foreach ($users as $key => $user) {
//                if ($rqstData["userID"] == $user["id"]) {
//                    $userID = $user["id"];
//                    $index = $key;
//                }
//            }
//            var_dump($users[$index]["inventory"]);
//            //den specifika användarens inventory.
//            foreach ($users[$index]["inventory"] as $key => $userItem) {
//                if ($rqstData["inventoryID"] == $userItem) {
//                    echo $userItem;
//                    $found = TRUE;
//                    array_splice($users[$index]["inventory"], $key, 1);
//                    
//                }
//            }
//            if ($found == FALSE) {
//                sendJson(404, ["item not found"]);
//            }
//            saveJson("api/testUser.json", $users);
//            sendJson(200, "successfully deleted item");
//        } else {
//            sendJson(404, "fill in all information");
//        }
//    }
//
//    //ta bort användare
//    //Behöver användarens id.
//    if ($rqstMethod === "DELETE") {
//
//        //tar bort ANVÄNDAREN. behöver userID och nameTag, och specifikt INTE inventoryID. 
//        if (isset($rqstData["deleteUserID"]) && !isset(
//            $rqstData["inventoryID"]
//        )) {
//
//            $users = loadJson("api/testUser.json");
//            $found = FALSE;
//
//            foreach ($users as $key => $user) {
//                if ($rqstData["deleteUserID"] == $user["id"]) {
//                    $found = TRUE;
//                    array_splice($users, $key, 1);
//                }
//            }
//            if ($found == False) {
//                sendJson(400, ["user not found"]);
//            } else {
//                saveJson("api/testUser.json", $users);
//                sendJson(200, "successful");
//            }
//        }
//    }
//    //logga ut knappen ska ha en a href länk som skickar
//    //till server.php/logout.
//    //TODO: kolla GET-förfrågan om den är "logout",
//    //om den är det avslutas SESSION, och användaren skickas
//    //till index.php igen. (logga in sida)
//    if ($rqstMethod === "GET") {
//        if ($_GET == "logout") {
//            session_unset();
//            session_destroy();
//            header("Location: index.html");
//        }
//    }
//} else {
//    sendJson(405, ["Content type is not JSON."]);
//}

if ($rqstMethod === "POST"){
    //skapar en NY användare
        //input:
        //{
        //   "nameTag": "string",
        //   "password": "string" 
        //}
        //output:
        //{
        //    "
        //}
        var_dump($_POST);

        if (isset($_POST["nameTag"], $_POST["password"], $FILES["image"])) {
            $nameTag = $_POST["nameTag"];
            $password = $_POST["password"];

            //variabler för bild-filen
            $profilePicture = $FILES["image"];
            $filename = $profilePicture["name"];
            $tempname = $profilePicture["tmp_name"];
            $size = $profilePicture["size"];
            $error = $profilePicture["error"];

            //nameTag är färre än 3 bokstäver
            if (strlen($nameTag) <= 2) {
                sendJson(406, ["Please add more characters to your nameTag."]);
            }
            //lösenord är färre än 4 bokstäver
            if (strlen($password) <= 3) {
                sendJson(406, ["Please add more characters to your password."]);
                if (preg_match('~[0-9]+~', $password)) {
                    sendJson(406, ["Your password has to at least include one number."] );
                    exit();
                }
            }
            //hantering för bild som användaren laddar upp
            if ($error !== 0) {
                sendJson(409, ["Something went wrong with the picture, try again."] );
                exit();
            }
                // Filen får inte vara större än ca 500kb
            if ($size > (0.5 * 1000 * 1000)) {
                sendJson(405, ["Picture too large! Try something smaller than 400kb."]) ;
                exit();
            }

            // Hämta filinformation
            $info = pathinfo($filename);
            // Hämta ut filändelsen (och gör om till gemener)
            $ext = strtolower($info["extension"]);
            
            // Konvertera från int (siffra) till en sträng,
            // så vi kan slå samman dom nedan.
            $time = (string) time(); // Klockslaget i millisekunder
            // Skapa ett unikt filnamn med TID + FILNAMN
            $uniqueFilename = sha1("$time$filename");
            // Skickar iväg bilden till vår mapp
            move_uploaded_file($tempname, "api/profileImages/" . $uniqueFilename . $ext);

            //när all info har kikats genom och kontrollerats, ska 
            //det läggas till i databasen. 

            //id till ny användare.
            $allUsers = loadJson("api/testUser.json");
            $highestID = theHighestId($allUsers);

            //ny array med nycklar.
            $newUser = [];
            $newUser["id"] = $highestID;
            $newUser["nameTag"] = $nameTag;
            $newUser["password"] = $password;
            $newUser["profilePicture"] = $uniqueFilename . $ext;
            $newUser["inventory"] = [];

            //sparar i array, och sen i json-fil.
            array_push($allUsers, $newUser);
            saveJson("api/testUser.json", $allUsers);
            sendJson(200, ["User is added." => $newUser]);
            //header("Location: index.php");
            exit();
        } else {
            //sendJson(405, ["TagName or Password is not set."]);
            echo "dodnt work";
            exit();
        }
}
