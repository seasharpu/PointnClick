<?php
session_start();
require_once "functions.php";
$rqstMethod = $_SERVER["REQUEST_METHOD"];

$data = file_get_contents("php://input");
$rqstData = json_decode($data, true);

if ($rqstMethod === "POST") {

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

    if (isset($_POST["nameTag"], $_POST["password"], $_FILES["image"])) {
        $nameTag = $_POST["nameTag"];
        $password = $_POST["password"];

        //variabler för bild-filen
        $profilePicture = $_FILES["image"];
        $filename = $profilePicture["name"];
        $tempname = $profilePicture["tmp_name"];
        $size = $profilePicture["size"];
        $error = $profilePicture["error"];

        if (!isset($_POST["avatar"])){
            header("Location: index.php?id=470");
            exit();
        }

        //nameTag är färre än 3 bokstäver
        if (strlen($nameTag) <= 2) {
            header("Location: index.php?id=468");
            exit();
        }
        //lösenord är färre än 4 bokstäver
        if (strlen($password) <= 3) {
            header("Location: index.php?id=467");
            exit();
        }
        //hantering för bild som användaren laddar upp
        if ($error !== 0) {
            header("Location: index.php?id=466");
            exit();
        }
        // Filen får inte vara större än ca 500kb
        if ($size > (0.5 * 1000 * 1000)) {
            header("Location: index.php?id=465");
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
        //sökväg för mappen
        $path = __DIR__ . '/api/profileImages/';

        //Skickar bilden till vår mapp
        move_uploaded_file($tempname, $path . "$uniqueFilename.$ext");
        //när all info har kikats genom och kontrollerats, ska 
        //det läggas till i databasen. 

        //id till ny användare.
        $allUsers = loadJson("api/user.json");
        $highestID = theHighestId($allUsers);

        // DB BACKUP
        saveJson("api/userBackup.json", $allUsers);
        $avatar = $_POST["avatar"];

        //ny array med nycklar.
        $newUser = [];
        $newUser["id"] = $highestID;
        $newUser["nameTag"] = $nameTag;
        $newUser["password"] = $password;
        $newUser["profilePicture"] = "$uniqueFilename.$ext";
        //$newUser["avatar"] = $_POST["avatar"];
        
        if ($_POST["avatar"] == "Blue"){
            $newUser["avatar"] = "/assets/images/characters/avatar1.png";
        }elseif ($_POST["avatar"] == "ninja"){
            $newUser["avatar"] = "/assets/images/characters/avatar2.png";
        }elseif ($_POST["avatar"] == "astro"){
            $newUser["avatar"] = "/assets/images/characters/avatar3.png";
        }elseif ($_POST["avatar"] == "blob"){
            $newUser["avatar"] = "/assets/images/characters/avatar4.png";
        }

        $newUser["inventory"] = [];
        $newUser["laikaFound"] = false;

        $found = false;

        //sparar i array, och sen i json-fil.
        array_push($allUsers, $newUser);
        saveJson("api/user.json", $allUsers);

        foreach ($allUsers as $key => $user) {
            if ($user["nameTag"] == $_POST["nameTag"] && $user["password"] == $_POST["password"]) {
                $_SESSION["userID"] = $user["id"];
                $_SESSION["nameTag"] = $user["nameTag"];
                $_SESSION["isLoggedIn"] = true;
                $found = true;
            }
        }
        if (!$found) {
            header("Location: index.html?id=463");
        }
        // $createdUser = true;
        header("Location: index.php?userFound=1");
        exit();
    } else {
        header("Location: index.html?id=464");
    }
}
