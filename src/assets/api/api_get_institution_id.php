<?php
	header('Access-Control-Allow-Origin: *');

	include('./db_connect.php');
	
	$sql = "SELECT * FROM institution";
	if(isset($_GET['Institution_ID'])){
		$sql .= " WHERE Institution_ID=".$_GET['Institution_ID'];
	}
	$sql .= " ORDER BY Institution_ID";
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


