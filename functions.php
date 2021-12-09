<?php

function loadJson($database)
{
    $json = file_get_contents($database);
    return json_decode($json, true);
}

function saveJson($database, $data)
{
    $json = json_encode($data, JSON_PRETTY_PRINT);
    file_put_contents($database, $json);
}


function sendJson($errorCode = 200, $message)
{
    header("Content-Type: application/json");
    http_response_code($errorCode);
    $json = json_encode($message);
    echo $json;
    exit();
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
