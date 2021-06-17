<?php
	header('Access-Control-Allow-Origin: *');
	header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
	header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

	include('./db_connect.php');
	
	if($_SERVER['REQUEST_METHOD'] == 'POST'){
		$content = file_get_contents('php://input');
		$Structure = json_decode($content, true);

        $Structure_ID = $Structure['Structure_ID'];
		$Subject_ID = $Structure['Subject_ID'];
		$Course_ID = $Structure['Course_ID'];
		$Main_ID = $Structure['Main_ID'];
		$Group_ID = $Structure['Group_ID'];

		// update data
		$sql = "UPDATE `structure` SET `Subject_ID` = '$Subject_ID', `Course_ID` = '$Course_ID', `Main_ID` = '$Main_ID', `Group_ID` = '$Group_ID' WHERE `Structure_ID` = '$Structure_ID'";
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