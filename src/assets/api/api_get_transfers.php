<?php
header('Access-Control-Allow-Origin: *');
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "project";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT Transfer.Transfer_ID,Transfer.Student_ID,Transfer.Subject_ID,Subject.Subject_Name,Transfer.Grade FROM Transfer inner JOIN Subject ON Subject.Subject_ID = Transfer.Subject_ID ";
$result = $conn->query($sql);
$arr = array ();
if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    array_push ($arr,$row);
  }
  
} else {
  //$arr = array ();
}
echo json_encode($arr);
$conn->close();
?>


