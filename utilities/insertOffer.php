<?php
include_once 'db.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

$db = new Database();
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    // $titleToAdd = htmlspecialchars($data->task);
    // $descToAdd = htmlspecialchars($data->desc);
    // $dueDate = $data->date;
    // $createBy = $data->roleID;
    // $createdAt = date('Y-m-d');

    // if ($db->InsertTasks($titleToAdd, $descToAdd, $dueDate, 0, $createdAt,$createBy)) {
    //     echo json_encode([
    //         'message' => 'Inserted successfully',
    //         'data'=> $data,
    //     ]);
    // } else {
    //     echo json_encode(['error' => 'Issues inserting']);
    // }
}
?>
