<?php
	header('Access-Control-Allow-Origin: *');
	header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
	header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

	include('./db_connect.php');

	$sql = "SELECT Subject_Ins_ID, Subject_Ins_Name, Subject_Ins_Credit FROM subject_of_institution";

	if($_SERVER['REQUEST_METHOD'] == 'POST'){
		$content = file_get_contents('php://input');
		$SubjectofInstitution = json_decode($content, true);
		
		$txtSearch = $SubjectofInstitution['txtSearch'];
		if(strlen($txtSearch)>0){
			$sql .= " WHERE Subject_Ins_ID = '$txtSearch' || 
				Subject_Ins_Name like '%$txtSearch%'
			";
		}
	}

	$sql .= " ORDER BY Subject_Ins_ID";
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
