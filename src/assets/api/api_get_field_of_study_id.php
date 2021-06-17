<?php
	header('Access-Control-Allow-Origin: *');

	include('./db_connect.php');
	
	$sql = "SELECT * FROM field_of_study";
	if(isset($_GET['Field_of_Study_ID'])){
		$sql .= " WHERE Field_of_Study_ID=".$_GET['Field_of_Study_ID'];
	}
	$sql .= " ORDER BY Field_of_Study_Name";
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