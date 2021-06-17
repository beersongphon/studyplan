<?php
	header('Access-Control-Allow-Origin: *');
	header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
	header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

	include('./db_connect.php');

	$sql = "SELECT * FROM institution";

	if($_SERVER['REQUEST_METHOD'] == 'POST'){
		$content = file_get_contents('php://input');
		$Institution = json_decode($content, true);
		
		$txtSearch = $Institution['txtSearch'];
		if(strlen($txtSearch)>0){
			$sql .= " WHERE Institution_ID = '$txtSearch' || 
				Institution_Name like '%$txtSearch%'
			";
		}
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
