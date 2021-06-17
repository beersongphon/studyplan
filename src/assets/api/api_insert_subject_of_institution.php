<?php
	header('Access-Control-Allow-Origin: *');
	header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
	header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

	include('./db_connect.php');
	
	if($_SERVER['REQUEST_METHOD'] == 'POST'){
		$content = file_get_contents('php://input');
		$SubjectofInstitution = json_decode($content, true);

		$Subject_Ins_ID = $SubjectofInstitution['Subject_Ins_ID'];
		$Subject_Ins_Name = $SubjectofInstitution['Subject_Ins_Name'];
		$Subject_Ins_Credit = $SubjectofInstitution['Subject_Ins_Credit'];

		// insert data
		$sql = "INSERT INTO `subject_of_institution` (`Subject_Ins_ID`,`Subject_Ins_Name`,`Subject_Ins_Credit`)
				VALUES ('$Subject_Ins_ID','$Subject_Ins_Name','$Subject_Ins_Credit')";
		$result = $conn->query($sql);
		if($result){
			echo json_encode(['status'=>'success','message'=>'บันทึกข้อมูลสำเร็จ']);
		}
		else{
			echo json_encode(['status'=>'error','message'=>'เกิดข้อผิดพลาดในการบันทึกข้อมูล']);
		}
	}
	else{
		echo json_encode(['status'=>'error','message'=>'REQUEST_METHOD ผิดพลาด']);
	}
	$conn->close();
?>