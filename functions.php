<?php

function loadJson($database)
{
    $json = file_get_contents($database);
    return json_decode($json, true);
}

function saveJson($database, $data)
{
    $json = json_encode($data, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
    file_put_contents($database, $json);
}


function statusCode($errorCode = 200)
{
    http_response_code($errorCode);
}

//Hittar det högsts id:et
function theHighestId($array)
{
    $userID = 0;
    foreach ($array as $obj) {
        if ($obj["id"] > $userID) {
            $userID = $obj["id"];
        }
    }
    $userID = $userID + 1;
    return $userID;
}

function checkIfLoggedIn(){
    if (isset($_SESSION["IsLoggedIn"])){
        if ($_SESSION["IsLoggedIn"] == true){
            return $_SESSION["nameTag"];
        }
    }
    else {
        return null;
    }
}
