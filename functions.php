<?php

function loadJson($database)
{
    $json = file_get_contents($database);
    return json_decode($json, true);
}

function saveJson($filename, $data)
{
    $json = json_encode($data, JSON_PRETTY_PRINT);
    file_put_contents($filename, $json);
}


function sendJson($errorCode = 200, $message)
{
    header("Content-Type: application/json");
    http_response_code($errorCode);
    $json = json_encode($message);
    echo $json;
    exit();
}