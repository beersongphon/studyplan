<?php
	header('Access-Control-Allow-Origin: *');
	header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
	header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

	include('./db_connect.php');
	
	if($_SERVER['REQUEST_METHOD'] == 'POST'){
		$content = file_get_contents('php://input');
		$user = json_decode($content, true);

		$User_ID = $user['User_ID'];
		$User_Name = $user['User_Name'];
		$Email = $user['Email'];
		$Password = $user['Password'];

		// check duplicate email
		$sql = "SELECT Email FROM user WHERE Email = '$Email'";
		$result = $conn->query($sql);
		if($result->num_rows > 0) {
			echo json_encode(['status'=>'error','message'=>'ไม่สามารถลงทะเบียนได้ email นี้มีผู้ใช้งานแล้ว']);
			exit();
		}

		// insert data
		$sql = "INSERT INTO `user` (`User_ID`,`User_Name`,`Email`,`Password`,`Userlevel_ID`)
				VALUES ('$User_ID','$User_Name','$Email','$Password','2')";
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


