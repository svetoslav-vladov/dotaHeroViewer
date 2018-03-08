<?php
    $heroDB = file_get_contents("https://api.opendota.com/api/heroStats");
    $heroDB = json_decode($heroDB, true);
    $apiHost = "https://api.opendota.com";
if(isset($_GET["search"])){
    $search = htmlentities($_GET["search"]);
    $result = array();
    $idx = 0;
    $found = false;

    foreach ($heroDB as $hero){

        if(strstr(strtolower($hero["localized_name"]), strtolower($search))){
            $result[] = ["name"=>$hero["localized_name"],"id"=>$hero["id"],"icon"=>$apiHost.$hero["icon"]];
            $found = true;
            $idx++;
        }
        if($idx == 6){
            break;
        }
    }
    if(!$found){
        echo "Hero not found";
    }
    else{
        echo json_encode($result);
    }

}

if(isset($_GET["id"])){
    $id = htmlentities($_GET["id"]);
    $character = array();

    foreach ($heroDB as $key => $hero){
        if($hero["id"] == $id){
            $character["id"] = $hero["id"];
            $character["name"] = $hero["localized_name"];
            $character["primary_attr"] = $hero["primary_attr"];
            $character["attack_type"] = $hero["attack_type"];
            $character["img"] = $apiHost . $hero["img"];
            $character["icon"] = $apiHost . $hero["icon"];
            $character["base_health"] = $hero["base_health"];
            $character["base_mana"] = $hero["base_mana"];
            $character["base_health_regen"] = $hero["base_health_regen"];
            $character["base_mana_regen"] = $hero["base_mana_regen"];
            $character["attack_range"] = $hero["attack_range"];
            $character["projectile_speed"] = $hero["projectile_speed"];
            $character["attack_rate"] = $hero["attack_rate"];
            $character["move_speed"] = $hero["move_speed"];
            $character["turn_rate"] = $hero["turn_rate"];
            $character["base_armor"] = $hero["base_armor"];
            break;
        }

    }
    echo json_encode($character);
}
