<?php
	header('Access-Control-Allow-Origin: *');
	header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
	header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

	include('./db_connect.php');
	
	if($_SERVER['REQUEST_METHOD'] == 'POST'){
		$content = file_get_contents('php://input');
		$Transfer = json_decode($content, true);

		$Student_ID = $Transfer['Student_ID'];
		$Subject_ID = $Transfer['Subject_ID'];
		$Date = $Transfer['Date'];

		// check duplicate Student_ID And Subject_ID
		$sql = "SELECT Student_ID, Subject_ID FROM transfer WHERE (Subject_ID = '$Subject_ID') AND Student_ID = '$Student_ID'";
		$result = $conn->query($sql);
		if($result->num_rows > 0) {
			echo json_encode(['status'=>'error','message'=>'ข้อมูลซ้ำ กรุณาเพิ่มใหม่อีกครั้ง']);
			exit();
		}

		// insert data
		$sql = "INSERT INTO `transfer` (`Student_ID`,`Subject_ID`,`Date`)
				VALUES ('$Student_ID','$Subject_ID','$Date')";
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