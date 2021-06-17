<?php
	header('Access-Control-Allow-Origin: *');

	include('./db_connect.php');
	
	$sql = "SELECT * FROM subject_of_institution";
	if(isset($_GET['Subject_Ins_ID'])){
		$sql .= " WHERE Subject_Ins_ID=".$_GET['Subject_Ins_ID'];
	}
	$sql .= " ORDER BY Subject_Ins_Name";
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


