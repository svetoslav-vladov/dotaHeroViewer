<?php
    $heroDB = file_get_contents("https://api.opendota.com/api/heroStats");
    $heroDB = json_decode($heroDB, true);
    $apiHost = "https://api.opendota.com";
if(isset($_GET["search"])){
    $search = htmlentities($_GET["search"]);
    $result = array();
    $idx = 0;
    foreach ($heroDB as $hero){
        if(strstr(strtolower($hero["localized_name"]), strtolower($search))){
            $result[] = $hero["localized_name"];
            $idx++;
        }
        if($idx == 7){
            break;
        }
    }
    echo json_encode($result);
}