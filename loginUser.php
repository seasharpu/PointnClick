<?php
session_start();
require_once "functions.php";


$rqstMethod = $_SERVER["REQUEST_METHOD"];
//$contentType = $_SERVER["CONTENT_TYPE"];

$data = file_get_contents("php://input");
$rqstData = json_decode($data, true);

var_dump($rqstData);

if ($rqstMethod === "POST") {
    if (isset($rqstData["nameTag"], $rqstData["password"])) {
        //loggar in en redan EXISTERANDE användare
        //nameTag & password
        echo "inne i rqst";
        $users = loadJson("api/user.json");
        $found = false;
        foreach ($users as $key => $user) {

            
            if ($user["nameTag"] == $rqstData["nameTag"] && $user["password"] == $rqstData["password"]) {
                //var_dump($user);
                $_SESSION["userID"] = $user["id"];
                $_SESSION["nameTag"] = $user["nameTag"];
                $_SESSION["isLoggedIn"] = true;
                echo "tjojena";
                $found = true;
            }
        }
        if ($found) {
            //echo "det gick";
            header("Location: index.php?userFound=1");
        } else {
            statusCode(469);
        }
    }
}
?>