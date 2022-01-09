<?php
session_start();
require_once "functions.php";

$rqstMethod = $_SERVER["REQUEST_METHOD"];

$data = file_get_contents("php://input");
$rqstData = json_decode($data, true);



if ($rqstMethod === "POST") {
echo $_POST["nameTag"];
echo $_POST["password"];
var_dump($_POST);

    if (isset($_POST["nameTag"], $_POST["password"])) {
        //loggar in en redan EXISTERANDE användare
        //nameTag & password
        echo "nueeee";

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
        } else {
            statusCode(469);
        }
    }
}
?>