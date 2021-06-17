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

		// update data
		$sql = "UPDATE `user` SET `User_Name` = '$User_Name', `Email` = '$Email', `Password` = '$Password', `Userlevel_ID` = '2' WHERE `User_ID` = '$User_ID'";
		$result = $conn->query($sql);
		if($result){
			echo json_encode(['status'=>'success','message'=>'แก้ไขข้อมูลสำเร็จ']);
		}
		else{
			echo json_encode(['status'=>'error','message'=>'เกิดข้อผิดพลาดในการบันทึกข้อมูล']);
		}
	}
	else{
		echo json_encode(['status'=>'error','message'=>'REQUEST_METHOD Error']);
	}
	$conn->close();
?>


