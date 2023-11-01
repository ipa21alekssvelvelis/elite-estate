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

    $currentPersonalData = $db->selectPersonalData();

    $personasKodsExists = false;
    $emailExists = false;
    $phoneExists = false;

    foreach($currentPersonalData as $dataset){
        if ($dataset['personas_kods'] === $personasKodsToAdd) {
            $personasKodsExists = true;
        }
        if ($dataset['telefona_nr'] === $phoneToAdd) {
            $phoneExists = true;
        }
        if ($dataset['email'] === $emailToAdd) {
            $emailExists = true;
        }
    }

    $errors = [];

    if ($personasKodsExists) {
        $errors['PersonasKods'] = 'Personas kods already exists';
    }

    if ($emailExists) {
        $errors['email'] = 'Email already exists';
    }

    if ($phoneExists) {
        $errors['phone'] = 'Phone already exists';
    }

    if (!empty($errors)) {
        echo json_encode(['errors' => $errors]);
    } else {
        $result = $db->insertPersonalData($nameToAdd, $surnameToAdd, $personasKodsToAdd, $phoneToAdd, $emailToAdd, $userID);
        if ($result) {
            echo json_encode([
                'message' => 'Inserted successfully',
                'sellerid' => $result,
            ]);
        } else {
            echo json_encode(['errors' => 'Issues inserting']);
        }
    }
    }
?>
