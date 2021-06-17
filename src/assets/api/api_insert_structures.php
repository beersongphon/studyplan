<?php
	header('Access-Control-Allow-Origin: *');
	header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
	header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

	include('./db_connect.php');
	
	if($_SERVER['REQUEST_METHOD'] == 'POST'){
		$content = file_get_contents('php://input');
		$Structure = json_decode($content, true);

		$Subject_ID = $Structure['Subject_ID'];
		$Course_ID = $Structure['Course_ID'];
		$Main_ID = $Structure['Main_ID'];
		$Group_ID = $Structure['Group_ID'];

		// check duplicate Subject_ID and Course_ID
		$sql = "SELECT Subject_ID, Course_ID FROM structure WHERE (Subject_ID = '$Subject_ID') AND Course_ID = '$Course_ID'";
		$result = $conn->query($sql);
		if($result->num_rows > 0) {
			echo json_encode(['status'=>'error','message'=>'ไม่สามารถเพิ่มได้ รหัสวิชา นี้มีในหลักสูตรแล้ว']);
			exit();
		}

		// insert data
		$sql = "INSERT INTO `structure` (`Subject_ID`,`Course_ID`,`Main_ID`,`Group_ID`)
				VALUES ('$Subject_ID','$Course_ID','$Main_ID','$Group_ID')";
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