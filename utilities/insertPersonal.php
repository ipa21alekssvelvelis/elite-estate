<?php
include_once 'db.php';



header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

$db = new Database();
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    $nameToAdd = htmlspecialchars($data->name);
    $surnameToAdd = htmlspecialchars($data->surname);
    $emailToAdd = $data->email;
    $phoneToAdd = $data->phone;
    $personasKodsToAdd = $data->PersonasKods;
    $userID = $data->isAuthenticated;

        $db->insertPersonalData($nameToAdd,$surnameToAdd,$personasKodsToAdd,$phoneToAdd,$emailToAdd,$userID);
        if ($db->insertPersonalData($nameToAdd, $surnameToAdd, $personasKodsToAdd, $phoneToAdd, $emailToAdd, $userID)) {
            echo json_encode([
                'message' => 'Inserted successfully',
            ]);
        } else {
            echo json_encode(['error' => 'Issues inserting']);
        }
    }
?>
