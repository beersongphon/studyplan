<?php
	header('Access-Control-Allow-Origin: *');
	header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
	header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

	include('./db_connect.php');
	
	if($_SERVER['REQUEST_METHOD'] == 'POST'){
		$content = file_get_contents('php://input');
		$Teacher = json_decode($content, true);

		$User_ID = $Teacher['User_ID'];
		$User_Name = $Teacher['User_Name'];
		$Address = $Teacher['Address'];
		$Phone = $Teacher['Phone'];

		// check duplicate email
		$sql = "SELECT Teacher_ID FROM teacher WHERE Teacher_ID = '$User_ID'";
		$result = $conn->query($sql);
		if($result->num_rows > 0) {
			echo json_encode(['status'=>'error','message'=>'ไม่สามารถเพิ่มได้ รหัสอาจารย์ นี้มีผู้ใช้งานแล้ว']);
			exit();
		}

		// insert data
		$sql = "INSERT INTO `teacher` (`Teacher_ID`,`Teacher_Name`,`Address`,`Phone`)
				VALUES ('$User_ID','$User_Name','$Address','$Phone')";
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