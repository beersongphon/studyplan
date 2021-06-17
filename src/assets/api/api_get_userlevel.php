<?php
	header('Access-Control-Allow-Origin: *');

	include('./db_connect.php');
	
	$sql = "SELECT * FROM userlevel";
	if(isset($_GET['Userlevel_ID'])){
		$sql .= " WHERE Userlevel_ID=".$_GET['Userlevel_ID'];
	}
	$sql .= " ORDER BY Userlevel_Name";
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


