<?php
	header('Access-Control-Allow-Origin: *');

	include('./db_connect.php');
	
	$sql = "SELECT * FROM faculty";
	if(isset($_GET['Faculty_ID'])){
		$sql .= " WHERE Faculty_ID=".$_GET['Faculty_ID'];
	}
	$sql .= " ORDER BY Faculty_Name";
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