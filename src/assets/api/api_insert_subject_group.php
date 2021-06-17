<?php
	header('Access-Control-Allow-Origin: *');
	header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
	header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

	include('./db_connect.php');
	
	if($_SERVER['REQUEST_METHOD'] == 'POST'){
		$content = file_get_contents('php://input');
		$Group = json_decode($content, true);

		$Group_ID = $Group['Group_ID'];
		$Main_ID = $Group['Main_ID'];
		$Course_ID = $Group['Course_ID'];
		$Group_Name = $Group['Group_Name'];
		$Group_Credit = $Group['Group_Credit'];

		// check duplicate email
		$sql = "SELECT Group_ID FROM subject_group WHERE Group_ID = '$Group_ID'";
		$result = $conn->query($sql);
		if($result->num_rows > 0) {
			echo json_encode(['status'=>'error','message'=>'ไม่สามารถเพิ่มได้ รหัสกลุ่มวิชา นี้มีแล้ว']);
			exit();
		}

		// insert data
		$sql = "INSERT INTO `subject_group` (`Group_ID`,`Main_ID`,`Course_ID`,`Group_Name`,`Group_Credit`)
				VALUES ('$Group_ID','$Main_ID','$Course_ID','$Group_Name','$Group_Credit')";
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