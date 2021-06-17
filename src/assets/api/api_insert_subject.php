<?php
	header('Access-Control-Allow-Origin: *');
	header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
	header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

	include('./db_connect.php');
	
	if($_SERVER['REQUEST_METHOD'] == 'POST'){
		$content = file_get_contents('php://input');
		$Subject = json_decode($content, true);

		$Subject_ID = $Subject['Subject_ID'];
		$Main_ID = $Subject['Main_ID'];
		$Group_ID = $Subject['Group_ID'];
		$Subject_Name = $Subject['Subject_Name'];
		$Subject_Credit = $Subject['Subject_Credit'];
		$Subject_Detail = $Subject['Subject_Detail'];

		// check duplicate email
		$sql = "SELECT Subject_ID FROM subject WHERE Subject_ID = '$Subject_ID'";
		$result = $conn->query($sql);
		if($result->num_rows > 0) {
			echo json_encode(['status'=>'error','message'=>'ไม่สามารถเพิ่มได้ รหัสวิชา นี้มีแล้ว']);
			exit();
		}

		// insert data
		$sql = "INSERT INTO `subject` (`Subject_ID`,`Main_ID`,`Group_ID`,`Subject_Name`,`Subject_Credit`,`Subject_Detail`)
				VALUES ('$Subject_ID','$Main_ID','$Group_ID','$Subject_Name','$Subject_Credit','$Subject_Detail')";
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