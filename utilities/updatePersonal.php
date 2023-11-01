<?php
include_once 'db.php';

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

$db = new Database();
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    $surnameToAdd = htmlspecialchars($data->editSurname);
    $emailToAdd = $data->editEmail;
    $phoneToAdd = $data->editPhone;
    $userID = $data->isAuthenticated;

    $currentPersonalData = $db->selectPersonalData();

    $emailExists = false;
    $phoneExists = false;

    foreach($currentPersonalData as $dataset){
        if ($dataset['telefona_nr'] === $phoneToAdd) {
            $phoneExists = true;
        }
        if ($dataset['email'] === $emailToAdd) {
            $emailExists = true;
        }
    }

    $errors = [];


    if ($emailExists) {
        $errors['email'] = 'Email already exists';
    }

    if ($phoneExists) {
        $errors['phone'] = 'Phone already exists';
    }

    if (!empty($errors)) {
        echo json_encode(['errors' => $errors]);
    } else {
        if ($db->updatePersonalData($userID, $surnameToAdd, $emailToAdd, $phoneToAdd)) {
            echo json_encode(['message' => 'Updated successfully']);
        } else {
            echo json_encode(['errors' => ['Issues inserting']]);
        }
    }
    
    }
?>
