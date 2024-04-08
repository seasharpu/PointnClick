<?php session_start();
require_once "functions.php";
//tar fram felmeddelanden som skickats från createUser.php



?>
<!DOCTYPE html>
<html lang="en">



<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/css/common.css">
    <link rel="stylesheet" href="assets/css/start.css">
    <link rel="stylesheet" href="assets/css/alien.css">
    <link rel="stylesheet" href="assets/css/jungle.css">
    <link rel="stylesheet" href="assets/css/pluto.css">
    <link rel="stylesheet" href="assets/css/register.css">
    <link rel="stylesheet" href="assets/css/desert.css">
    <link rel="stylesheet" href="assets/css/rave.css">
    <link rel="stylesheet" href="assets/css/spaceship.css">
    <link rel="stylesheet" href="assets/css/tutorial.css">
    <link rel="stylesheet" href="assets/css/water.css">
    <link rel="shortcut icon" type="image/jpg" href="Favicon_Image_Location" />
    <link rel="icon" type="image/x-icon" href="assets/images/favicon.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Catamaran:wght@800&family=DotGothic16&family=Montserrat:wght@700;900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=DotGothic16&display=swap" rel="stylesheet">
    <link rel="shortcut icon" type="image/x-icon" href="assets\favicon.ico" />
    <title>Saving Laika</title>
</head>

<body>

    <header id="location">
    </header>
    <wrapper>
        <div class="leftBlack"></div>
        <main id="hidden">
            <script src="/assets/scripts/startPage.js"></script>
            <?php

            require_once "functions.php";
            if (!file_exists("api/items.json") || !file_exists("api/user.json") || !file_exists("api/planet.json")) {
                echo '<div id="noJSON">Error - JSON file(s) missing! Please make sure the following files are present in the directory: <br>items.json, user.json, planet.json</div>';
            }

            //kollar om vi har en inloggad användare.
            if (isset($_SESSION["userID"], $_SESSION["nameTag"])) {
                $id = $_SESSION["userID"];
                $nameTag = $_SESSION["nameTag"];
            } else {
                $id = -1;
                $nameTag = "";
            }
            if (isset($_GET["createdUser"])) {
                echo "<script>const createdUser = true </script>";
                echo "<script>makeTutorial();</script>";
            }

            if (isset($_GET["userFound"])) {
                echo "<script>const globalUserID = $id</script>";
                echo "<script>const userNameTag = '$nameTag'</script>";
            }
            if (isset($_POST["avatar"])) {
                $avatarPic = $_POST["avatar"];
                echo "<script>const userAvatar = '$avatarPic'</script>";
            }
            ?>
            <script src="/assets/scripts/requests.js"></script>
            <script src="/assets/scripts/tutorial.js"></script>
            <script src="/assets/scripts/register.js"></script>
            <script src="/assets/scripts/items.js"></script>
            <script src="/assets/scripts/spaceship.js"></script>
            <script src="/assets/scripts/dialogue.js"></script>
            <script src="assets\scripts\statuscodemessages.js"></script>
            <script src="/assets/scripts/pluto.js"></script>
            <script src="/assets/scripts/loading.js"></script>
            <script src="assets\scripts\formPlanet.js"></script>


            <?php
            if (isset($_GET["createdUser"])) {
                $createdCode = $_GET["createdUser"];
                if ($createdCode == true) {
                    echo '<script>document.querySelector("#hidden").innerHTML = ""</script>';
                    echo "<script>createTutorial()</script>";
                }
            }
            ?>

            <?php
            if (isset($_GET["id"])) {
                $errorCode = $_GET["id"];
                if ($errorCode == 210) {
                    statusCode(210);
                } else if ($errorCode == 463) {
                    //statusCode(468);
                    echo "<script>statusCodeDiv('User was not found. Huh?')</script>";
                    echo "<script>
                document.querySelector('.understood').addEventListener('click', (event) =>{
                document.querySelector('.statusCodeDiv').remove();
                });
                MakerRegisterPage();
            </script>";
                } else if ($errorCode == 464) {
                    //statusCode(464);
                    echo "<script>statusCodeDiv('User was not found. Huh?')</script>";
                    echo "<script>
                document.querySelector('.understood').addEventListener('click', (event) =>{
                document.querySelector('.statusCodeDiv').remove();
                });
            </script>";
                } else if ($errorCode == 468) {
                    //statusCode(468);
                    echo "<script>statusCodeDiv('Please add more than 2 characters in the input field.')</script>";
                    echo "<script>
                document.querySelector('.understood').addEventListener('click', (event) =>{
                document.querySelector('.statusCodeDiv').remove();
                });
            </script>";
                } else if ($errorCode == 467) {
                    //statusCode(467);
                    echo "<script>statusCodeDiv('Please add more than 3 characters to your password.')</script>";
                    echo "<script>
                document.querySelector('.understood').addEventListener('click', (event) =>{
                document.querySelector('.statusCodeDiv').remove();
                });
                MakerRegisterPage();
            </script>";
                } else if ($errorCode == 464) {
                    //statusCode(464);
                    echo "<script>statusCodeDiv('Please fill in all the fields.')</script>";
                    echo "<script>
                document.querySelector('.understood').addEventListener('click', (event) =>{
                document.querySelector('.statusCodeDiv').remove();
                });
            </script>";
                } else if ($errorCode == 466) {
                    //statusCode(466);
                    echo "<script>statusCodeDiv('Something went wrong with your picture. Please try again.')</script>";
                    echo "<script>
            document.querySelector('.understood').addEventListener('click', (event) =>{
            document.querySelector('.statusCodeDiv').remove();
            });
            MakerRegisterPage();
            </script>";
                } else if ($errorCode == 465) {
                    //statusCode(465);
                    echo "<script>statusCodeDiv('Picture is too large! Try something smaller than 400kb.')</script>";
                    echo "<script>
                document.querySelector('.understood').addEventListener('click', (event) =>{
                document.querySelector('.statusCodeDiv').remove();
                });
                MakerRegisterPage();
            </script>";
                } else if ($errorCode == 469) {
                    //statusCode(469);
                    echo "<script>statusCodeDiv('Fill all the fields.')</script>";
                    echo "<script>
                document.querySelector('.understood').addEventListener('click', (event) =>{
                document.querySelector('.statusCodeDiv').remove();
                });
                MakerRegisterPage();
            </script>";
                }
            }
            ?>


        </main>
        <div class="rightBlack"></div>
    </wrapper>
    <footer>
        <h4 id="footer-tile">© 2022 - Click n'Point studios</h4>
    </footer>
</body>

</html>