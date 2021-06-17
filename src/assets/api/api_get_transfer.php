<?php
	header('Access-Control-Allow-Origin: *');
	header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
	header("Access-Control-Allow-Headers: Content-Type, Authorization, Access-Control-Allow-Headers, X-Requested-With");
	//print_r(apache_request_headers());
	include('./db_connect.php');
	//exit();
	$headers = apache_request_headers();
	$auth = $headers['Authorization'];
	$sql = "SELECT transfer_detail.Transfer_ID, transfer.Date, transfer_detail.Student_ID, student.Student_Name, 
	transfer_detail.Subject_Ins_ID, subject_of_institution.Subject_Ins_Name, subject_of_institution.Subject_Ins_Credit, transfer_detail.Grade, 
	transfer_detail.Subject_ID, subject.Subject_Name, 
	subject.Subject_Credit, transfer.Transfer_Grade
	FROM transfer_detail
	LEFT JOIN transfer
	ON transfer.Transfer_ID = transfer_detail.Transfer_ID 
	LEFT JOIN student 
	ON student.Student_ID = transfer_detail.Student_ID 
	LEFT JOIN subject
	ON subject.Subject_ID = transfer_detail.Subject_ID 
	LEFT JOIN subject_of_institution
	ON subject_of_institution.Subject_Ins_ID = transfer_detail.Subject_Ins_ID 
	WHERE student.Teacher_ID = '$auth'";

	if($_SERVER['REQUEST_METHOD'] == 'POST'){
		$content = file_get_contents('php://input');
		$Transfer = json_decode($content, true);
		
		$txtSearch = $Transfer['txtSearch'];
		if(strlen($txtSearch)>0){
			$sql .= " AND transfer_detail.Transfer_ID = '$txtSearch' || 
			transfer_detail.Student_ID like '%$txtSearch%' ||
			transfer_detail.Subject_ID like '%$txtSearch%' ||
			transfer_detail.Subject_Ins_ID like '%$txtSearch%'
			";
		}
	}

	$sql .= " ORDER BY transfer_detail.Student_ID ASC";
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
