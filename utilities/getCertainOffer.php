<?php
include_once 'db.php';

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

$db = new Database();

if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $authenticated = $_GET['isAuthenticated'];
    $ipasumi = $db->selectOffers();
    $sellers = $db->selectPersonalData();
    $ipasumsExists = false;

    $data = null;

    foreach ($ipasumi as $entry) {
        if ($entry["ipasumaid"] == $id) {
            $ipasumsExists = true;
            $data = $entry;
            break;
        }
    }


    if ($ipasumsExists) {
        $offer = [
            "offerid" => $data["ipasumaid"],
            "nosaukums" => $data["nosaukums"],
            "apraksts" => $data["apraksts"],
            "platiba" => $data["platiba"],
            "lauks" => $data["lauka_platiba"],
            "cena" => $data["cena"],
            "istabuSk" => $data["istabu_skaits"],
            "tualesuSk" => $data["tualesu_skaits"],
            "gulamistabuSk" => $data["gulamistabu_skaits"],
            "majasTips" => $data["majas_tips"],
            "sellerid" => $data["sellerid"],
            "pieejams" => $data["pieejams"]
        ];

        $images = $db->selectListingImages($id);
        $sellerExists = false;
        $offer["images"] = $images;
        foreach($sellers as $sellerInfo){
            if($sellerInfo["sellerid"] == $images["sellerid"])
            $sellerExists = true;
            break;
        }
        $offer["vards"] = $sellerInfo["vards"];
        $offer["uzvards"] = $sellerInfo["uzvards"];
        $offer["telefona_nr"] = $sellerInfo["telefona_nr"];
        $offer["email"] = $sellerInfo["email"];
        
        echo json_encode($offer);
    } else {
        echo json_encode(["error" => "No offer found for the given ID"]);
    }
} else {
    echo json_encode(["error" => "Error: 'id' parameter is missing."]);
}
?>
