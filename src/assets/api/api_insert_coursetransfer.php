<?php
	header('Access-Control-Allow-Origin: *');
	header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
	header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

	include('./db_connect.php');
	
	if($_SERVER['REQUEST_METHOD'] == 'POST'){
		$content = file_get_contents('php://input');
		$Coursetransfer = json_decode($content, true);

		$Student_ID = $Coursetransfer['Student_ID'];
		$Transfer_ID = $Coursetransfer['Transfer_ID'];
		$Subject_ID = $Coursetransfer['Subject_ID'];

		// insert data
		$sql = "INSERT INTO `coursetransfer` (`Student_ID`,`Transfer_ID`,`Subject_ID`)
				VALUES ('$Student_ID','$Transfer_ID','$Subject_ID')";
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