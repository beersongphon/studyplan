<?php
	header('Access-Control-Allow-Origin: *');
	header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
	header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

	include('./db_connect.php');
	
	if($_SERVER['REQUEST_METHOD'] == 'POST'){
		$content = file_get_contents('php://input');
		$course = json_decode($content, true);

		$Course_ID = $course['Course_ID'];
		$Course_Name = $course['Course_Name'];
		$Course_Allcredit = $course['Course_Allcredit'];

		// update data
		$sql = "UPDATE `course` SET `Course_Name` = '$Course_Name', `Course_Allcredit` = '$Course_Allcredit' WHERE `Course_ID` = '$Course_ID'";
		$result = $conn->query($sql);
		if($result){
			echo json_encode(['status'=>'success','message'=>'แก้ไขข้อมูลสำเร็จ']);
		}
		else{
			echo json_encode(['status'=>'error','message'=>'เกิดข้อผิดพลาดในการแก้ไขข้อมูล.']);
		}
	}
	else{
		echo json_encode(['status'=>'error','message'=>'REQUEST_METHOD ผิดพลาด']);
	}
	$conn->close();
?>