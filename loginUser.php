<?php
session_start();
require_once "functions.php";

$rqstMethod = $_SERVER["REQUEST_METHOD"];

if ($rqstMethod === "POST") {

    if (isset($_POST["nameTag"], $_POST["password"])) {
        //loggar in en redan EXISTERANDE användare
        //nameTag & password

        $nameTag = $_POST["nameTag"];
        $password = $_POST["password"];

        if ($email == "" || $password == ""){
            //TOMMA FÄLT !!
            header("Location: /sign-in.php?error=1");
            statusCode(464);
            exit();
        }

        $users = loadJson("api/user.json");
        $found = false;
        foreach ($users as $key => $user) {
            
            if ($user["nameTag"] == $_POST["nameTag"] && $user["password"] == $_POST["password"]) {
                //var_dump($user);
                $_SESSION["userID"] = $user["id"];
                $_SESSION["nameTag"] = $user["nameTag"];
                $_SESSION["isLoggedIn"] = true;
                $found = true;
            }
        }
        if ($found) {
            header("Location: index.php?userFound=1");
            exit();
        } else {
            statusCode(469);
        }
    }
}
?>