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

		// check duplicate email
		$sql = "SELECT Course_ID FROM course WHERE Course_ID = '$Course_ID'";
		$result = $conn->query($sql);
		if($result->num_rows > 0) {
			echo json_encode(['status'=>'error','message'=>'ไม่สามารถเพิ่มได้ รหัสหลักสูตร นี้มีแล้ว']);
			exit();
		}

		// insert data
		$sql = "INSERT INTO `course` (`Course_ID`,`Course_Name`,`Course_Allcredit`)
				VALUES ('$Course_ID','$Course_Name','$Course_Allcredit')";
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