<?php
include_once 'db.php';

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

$db = new Database();
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));

    if (!$data) {
        $response = array("error" => "No data received.");
        echo json_encode($response);
        exit;
    }

    $title = htmlspecialchars($data->title);
    $desc = htmlspecialchars($data->desc);
    $RoomCount = $data->RoomCount;
    $BathroomCount = $data->BathroomCount;
    $BedroomCount = $data->BedroomCount;
    $price = $data->price;
    $size = $data->size;
    $areaSize = $data->areaSize;
    $HouseType = htmlspecialchars($data->HouseType);
    $pieejams = 1;

    $imageArray = $data->imageLinks;

    $userID = $data->userID;
    $sellerID = $data->sellerID;

    $result = $db->insertOffer($title, $size, $areaSize, $price, $RoomCount, $BathroomCount, $BedroomCount, $desc, $HouseType, $sellerID, $pieejams);
    if ($result) {
        foreach($imageArray as &$image_url){
            $ipasumaResult = $db->insertListingImage($result, $sellerID, $image_url);
        }
        echo json_encode([
            'message' => 'Inserted successfully',
            'sellerid' => $result,
            'images_arr' => $imageArray,
        ]);
    } else {
        echo json_encode(['errors' => 'Issues inserting']);
    }
}
?>
