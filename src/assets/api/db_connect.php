<?php
# Is this the production server or not?
define("PRODUCTION", $_SERVER["SERVER_NAME"] == "web.rmutp.ac.th");
# ตั้งค่าการเชื่อมต่อฐานข้อมูล
if (PRODUCTION) {
  # Production
  $servername = "localhost";
  $username = "bus64_studyplan";
  $password = "3bav94kdw4";
  $dbname = "bus64_studyplan";
} else {
  # Development
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "bus64_studyplan";
}

# Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
# Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
# กำหนด charset ให้เป็น utf8 เพื่อรองรับภาษาไทย
mysqli_set_charset($conn, "UTF8");
?>