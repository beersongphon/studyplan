<?php
	header('Access-Control-Allow-Origin: *');

	include('./db_connect.php');
	
	$sql = "SELECT * FROM education_level";
	if(isset($_GET['Edu_Level_ID'])){
		$sql .= " WHERE Edu_Level_ID=".$_GET['Edu_Level_ID'];
	}
	$sql .= " ORDER BY Edu_Level_Name";
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