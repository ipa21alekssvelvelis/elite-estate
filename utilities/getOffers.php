<?php
include_once 'db.php';

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

$db = new Database();

$response = array();

$offers = $db->selectOffers();

if ($offers) {
    $response['offers'] = array();

    foreach ($offers as $offer) {
        $offerData = array(
            'ipasumaid' => $offer['ipasumaid'],
            'nosaukums' => $offer['nosaukums'],
            'platiba' => $offer['platiba'],
            'lauka_platiba' => $offer['lauka_platiba'],
            'cena' => $offer['cena'],
            'istabu_skaits' => $offer['istabu_skaits'],
            'tualesu_skaits' => $offer['tualesu_skaits'],
            'gulamistabu_skaits' => $offer['gulamistabu_skaits'],
            'apraksts' => $offer['apraksts'],
            'majas_tips' => $offer['majas_tips'],
            'sellerid' => $offer['sellerid'],
            'pieejams' => $offer['pieejams'],
            'images' => array()
        );

        $listingImages = $db->selectListingImages($offer['ipasumaid']);
        if ($listingImages) {
            foreach ($listingImages as $image) {
                $offerData['images'][] = $image['image_url'];
            }
        }
        $response['offers'][] = $offerData;
    }
    $response['success'] = true;
} else {
    $response['success'] = false;
}

echo json_encode($response);
?>
