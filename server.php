<?php
session_start();
require_once "/functions.php";
//fil för serverhantering. Här sker alla GET, POST, 
//PATCH och DELETE.




$rqstMethod = $_SERVER["REQUEST_METHOD"];
$contentType = $_SERVER["CONTENT_TYPE"];

$data = file_get_contents("php://input");
$rqstData = json_decode($data, true);

    // Tillåt alla (origins) och alla headers
if ($method === "OPTIONS") {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
}

// Alla är välkommna
header("Access-Control-Allow-Origin: *");


if ($contentType == "application/json"){
    //kod funkar endast om inskickat material är json.
    if($rqstMethod === "POST"){
        //skapar en NY användare
        if (isset($rqstData["nameTag"], $rqstData["password"], $FILES["image"])){
            $nameTag = $rqstData["nameTag"];
            $password = $rqstData["password"];

            //variabler för bild-filen
            $profilePicture = $FILES["image"];
            $filename = $profilePicture["name"];
            $tempname = $profilePicture["tmp_name"];
            $size = $profilePicture["size"];
            $error = $profilePicture["error"];

            //nameTag är färre än 3 bokstäver
            if (strlen($nameTag) <= 2) {
                sendJson(["Please add more characters to your nameTag."], 406);
            }
            //lösenord är färre än 4 bokstäver
            if (strlen($password) <= 3) {
                sendJson(["Please add more characters to your password."], 406);
                if (preg_match('~[0-9]+~', $password)) {
                    sendJson(["Your password has to at least include one number."], 406);
                    exit();
                }
            }
            //hantering för bild som användaren laddar upp
            if ($error !== 0) {
                sendJson(["Something went wrong with the picture, try again."], 409);
                exit();
            }
                // Filen får inte vara större än ~400kb
            if ($size > (0.4 * 1000 * 1000)) {
                sendJson(["Picture too large! Try something smaller than 400kb."]) ;
                exit();
            }
        }
        //loggar in en redan EXISTERANDE användare
        if (isset($rqstData["nameTag"], $rqstData["password"])){
            $users = loadJson("database.json");
            $found = false;
            foreach ($users as $key => $user) {
                if($user["id"] == $rqstData["id"]){
                    $_SESSION["userID"] = $user["id"];
                    $_SESSION["nameTag"] = $user["nameTag"];
                    $_SESSION["isLoggedIn"] = true;
                    $found = true;
                }
            }
            if($found){
            sendJson("Login succcessful");
            }else{
                sendJson("Information incorrect");
            }
        }
    }
    if($rqstMethod === "PATCH"){
        //
    }

    // ta bort användare
    if($rqstMethod === "DELETE"){
      

        if(isset($_SESSION["userID"], $_SESSION["nameTag"])){

     
        $users = loadJson("database.json");
        $found = FALSE;

        foreach ($users as $key => $user) {
            if ($_SESSION["id"] == $rqstData["id"]) {
                $found = TRUE;
                array_splice($users, $key, 1);
            }
        }
        if ($found == False) {
            sendJson(["user not found"], 404);
        }
        
        saveJson("database.json", $data);
        sendJson("successful");
    }
    }
    //logga ut knappen ska ha en a href länk som skickar
    //till server.php/logout.
    //TODO: kolla GET-förfrågan om den är "logout",
    //om den är det avslutas SESSION, och användaren skickas
    //till index.html igen. (logga in sida)
    if($rqstMethod === "GET"){
        if($_GET == "logout"){
            session_unset();
            session_destroy();
            header("Location: index.html");
        }
    
    }
}
    
    //
?>