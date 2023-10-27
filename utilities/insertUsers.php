<?php
include_once 'db.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

$db = new Database();
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    $usernameToAdd = htmlspecialchars($data->user);
    $passwordToAdd = password_hash($data->password, PASSWORD_DEFAULT);
    $currentUsers = $db->selectUsers();
    $usernameClear = true; // Assume the username is clear by default

    foreach ($currentUsers as $userData) {
        if ($userData["username"] == $usernameToAdd) {
            $usernameClear = false; // Username is already taken
            break;
        }
    }

    if (!$usernameClear) {
        echo json_encode([
            'error' => 'Username taken',
        ]);
    } else {
        if ($db->insertUser($usernameToAdd, $passwordToAdd)) {
            echo json_encode([
                'message' => 'Inserted successfully',
                'data' => $data,
            ]);
        } else {
            echo json_encode(['error' => 'Issues inserting']);
        }
    }
}
?>
