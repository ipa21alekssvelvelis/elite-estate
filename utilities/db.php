<?php
class Database{
    private $host;
    private $user;
    private $pass;
    private $dbname;
    public $conn;

    function __construct(){
        $this->host = "localhost";
        $this->user = "root";
        $this->pass = "root";
        $this->dbname = "estate";
        $this->conn = new mysqli ($this->host, $this->user, $this->pass, $this->dbname);
    }

    function insert($query){
        if($this->conn->query($query) === TRUE){
            return $this->conn->insert_id;
        } else {
            $error = $this->conn->error;
            echo "Error: $error";
            return false;
        }
    }
    

    function select($query){
        return $this->conn->query($query);
    }


    function selectOffers(){
        $result = $this->select("SELECT * FROM ipasumi");
        if($result && $result->num_rows > 0){
            $data = [];
            while ($row = $result->fetch_assoc()) {
                $data[] = $row;
            }
            return $data;
        }
    }

    function selectUsers(){
        $result = $this->select("SELECT * FROM users");
        if($result && $result->num_rows > 0){
            $data = [];
            while ($row = $result->fetch_assoc()) {
                $data[] = $row;
            }
            return $data;
        }
    }

    function selectPersonalData(){
        $result = $this->select("SELECT * FROM personigiedati");
        if($result && $result->num_rows > 0){
            $data = [];
            while ($row = $result->fetch_assoc()) {
                $data[] = $row;
            }
            return $data;
        }
    }

    function selectListingImages($ipasumaid) {
        $result = $this->select("SELECT * FROM listing_images WHERE ipasumaid = $ipasumaid");
        if ($result && $result->num_rows > 0) {
            $data = [];
            while ($row = $result->fetch_assoc()) {
                $data[] = $row;
            }
            return $data;
        }
    }
   
    function insertUser($username, $password){
        $result = $this->insert("INSERT INTO users (`Username`,`Password`) VALUES ('$username', '$password')");
        if($result){
            return $result;
        }else{
            return false;
        }
    }

    function insertPersonalData($name, $surname, $personas_kods, $phone, $email, $userID){
        $result = $this->insert("INSERT INTO personigiedati (`Vards`, `Uzvards`, `Personas_kods`, `telefona_nr`, `email`, `userID`) VALUES ('$name', '$surname', '$personas_kods', '$phone', '$email', $userID)");
        if($result){
            return $result;
        }else{
            return false;
        }
    }

    function insertOffer($nosaukums, $platiba, $lauka_platiba, $cena, $istabu_skaits, $tualesu_skaits, $gulamistabu_skaits, $apraksts, $majas_tips, $sellerID, $pieejams){
        $result = $this->insert("INSERT INTO ipasumi (`nosaukums`, `platiba`, `lauka_platiba`, `cena`, `istabu_skaits`, `tualesu_skaits`, `gulamistabu_skaits`, `apraksts`, `majas_tips`, `pieejams`, `sellerID`) 
        VALUES ('$nosaukums', $platiba, $lauka_platiba, $cena, $istabu_skaits, $tualesu_skaits, $gulamistabu_skaits, '$apraksts', '$majas_tips', $pieejams, $sellerID)");
        if($result){
            return $result;
        }else{
            return false;
        }
    }

    function insertListingImage($ipasumaid, $sellerid, $image_url) {
        $result = $this->insert("INSERT INTO listing_images (`ipasumaid`, `sellerid`, `image_url`) 
            VALUES ($ipasumaid, $sellerid, '$image_url')");
        if ($result) {
            return $result;
        } else {
            return false;
        }
    }

    function updateOffer($id, $nosaukums, $apraksts, $platiba, $lauka_platiba, $cenas, $gulamistabu_skaits, $tualesu_skaits, $istabu_skaits, $majas_tips, $pieejams){
        $query = "UPDATE ipasumi SET 
                `nosaukums` = '$nosaukums', 
                `apraksts` = '$apraksts',
                `platiba` = $platiba, 
                `lauka_platiba` = $lauka_platiba,
                `cena` = $cena, 
                `gulamistabu_skaits` = $gulamistabu_skaits,
                `tualesu_skaits` = $tualesu_skaits,
                `istabu_skaits` = $istabu_skaits,
                `majas_tips` = '$majas_tips',
                `pieejams` = $pieejams,
                WHERE `ipasumaID` = '$id'";
        if ($this->conn->query($query) === TRUE) {
            return true;
        } else {
            $error = $this->conn->error;
            echo "Error: $error";
            return false;
        }
    }

    function updatePersonalData($id, $uzvards, $email, $phone){
        $query = "UPDATE personigiedati SET 
                    `uzvards` = '$uzvards',
                    `telefona_nr` = '$phone',
                    `email` = '$email'
                    WHERE `userID` = $id";
        if($this->conn->query($query) === TRUE){
            return true;
        } else {
            $error = $this->conn->error;
            echo "Error: $error";
            return false; 
        }
    }

    function deleteOffer($id){
        $result = $this->select("DELETE FROM ipasumi WHERE `ipasumaid` = $id");
    }
    function deleteOfferImages($id){
        $result = $this->select("DELETE FROM listing_images WHERE `ipasumaid` = $id");
    }
}
?>