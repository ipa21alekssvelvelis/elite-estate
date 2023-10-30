<?php
include_once 'db.php';

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

$db = new Database();

$data = json_decode(file_get_contents('php://input'));

$username = $data->user;
$password = $data->password;

$user = $db->selectUsers();
$seller = $db->selectPersonalData();
$foundUser = null;
$response = array();

foreach ($user as $userInfo) {
    if ($userInfo['username'] === $username) {
        $foundUser = $userInfo;
        break;
    }
}
$sellerExists = false;
if ($foundUser) {
    if (password_verify($password, $foundUser['password'])) {
        $response["message"] = "Login successful";
        $response["userid"] = $foundUser['userid'];
        foreach($seller as $sellerData){
            if($foundUser['userid'] == $sellerData['userid']){
                $sellerExists = true;
                break;
            }
        }
        if($sellerExists){
            $response["sellerid"] = $sellerData["userid"];
        }
    } else {
        $response["error"] = "Password is incorrect";
    }
} else {
    $response["error"] = "User doesn't exist";
}

echo json_encode($response);
?>
