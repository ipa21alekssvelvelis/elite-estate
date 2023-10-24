<?php
include_once 'db.php';

header('Content-Type: application/json');
header("Access-Control-Allow-Origin: http://localhost:3000");

$db = new Database();

if (isset($_GET["offerID"])) {
  $offerID = $_GET["offerID"];
  $success = $db->deleteOffer($offerID);
  echo json_encode(["message" => "Task deleted successfully", "offerID" => $offerID]);
}
?>