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

		// update data
		$sql = "UPDATE `subject` SET `Main_ID` = '$Main_ID', `Group_ID` = '$Group_ID', `Subject_Name` = '$Subject_Name', `Subject_Credit` = '$Subject_Credit', `Subject_Detail` = '$Subject_Detail' WHERE `Subject_ID` = '$Subject_ID'";
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