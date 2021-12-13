<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DotGothic16&display=swap" rel="stylesheet">
    <title>Saving Laika</title>
</head>
    <body>
        <header>
        </header>
        <main>
            <?php
            //kollar om vi har en inloggad användare.
            if (isset($_SESSION["id"], $_SESSION["nameTag"])){
                $id = $_SESSION["id"];
                $nameTag = $_SESSION["nameTag"];
            } else {
                $id = -1;
                $nameTag = "";
            }
            echo "<script>const userID = $id</script>";
            echo "<script>const userNameTag = $nameTag</script>";
            ?>
            <script src="script.js"></script>
        </main>
        <footer>
            <h4 id="footer-tile">© 2021 - Click n'Point studios</h4>
        </footer>
    </body>
</html>