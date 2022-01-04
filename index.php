<?php session_start(); ?>
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
    <link rel="stylesheet" href="assets/css/desert.css">
    <link rel="stylesheet" href="assets/css/rave.css">
    <link rel="stylesheet" href="assets/css/spaceship.css">
    <link rel="stylesheet" href="assets/css/tutorial.css">
    <link rel="stylesheet" href="assets/css/water.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DotGothic16&display=swap" rel="stylesheet">
    <title>Saving Laika</title>
</head>

<body>
    <header id="location">
    </header>
    <wrapper>
        <div class="leftBlack"></div>
    <main id="hidden">
        <?php
        //kollar om vi har en inloggad användare.
        if (isset($_SESSION["id"], $_SESSION["nameTag"])) {
            $id = $_SESSION["id"];
            $nameTag = $_SESSION["nameTag"];
        } else {
            $id = -1;
            $nameTag = "";
        }
        echo "<script>const userID = $id</script>";
        echo "<script>const userNameTag = $nameTag</script>";
        ?>
        <script src="/assets/scripts/requests.js"></script>
        <script src="/assets/scripts/startPage.js"></script>
        <script src="/assets/scripts/tutorial.js"></script>
        <script src="/assets/scripts/spaceship.js"></script>
        <script src="/assets/scripts/dialogue.js"></script>
        <script src="assets\scripts\statuscodemessages.js"></script>
        <script src="/assets/scripts/pluto.js"></script>
        <script src="/assets/scripts/items.js"></script>
        <script src="/assets/scripts/loading.js"></script>
    </main>
    <div class="rightBlack"></div>
    </wrapper>
    <footer>
        <h4 id="footer-tile">© 2021 - Click n'Point studios</h4>
    </footer>
</body>

</html>