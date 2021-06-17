<?php
	$servername = "localhost";
	$username = "bus64_studyplan";
	$password = "3bav94kdw4";
	$dbname = "bus64_studyplan";
	
	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	// Check connection
	if ($conn->connect_error) {
	  die("Connection failed: " . $conn->connect_error);
	}
	mysqli_set_charset($conn,'UTF8');
?>


