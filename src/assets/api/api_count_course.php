<?php
	header('Access-Control-Allow-Origin: *');

	include('./db_connect.php');
	
	$sql = "SELECT COUNT(*) AS Course_ID FROM course";
	
	$result = $conn->query($sql);
	$arr_data = array();
	if ($result->num_rows > 0) {
	  // output data of each row
	  while($row = $result->fetch_assoc()) {
		array_push($arr_data,$row);
	  }
	}
	echo json_encode($arr_data);
	$conn->close();
?>