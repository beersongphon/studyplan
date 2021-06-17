<?php
	header('Access-Control-Allow-Origin: *');
	header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
	header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

	include('./db_connect.php');
	
	if($_SERVER['REQUEST_METHOD'] == 'POST'){
		$content = file_get_contents('php://input');
		$Adding = json_decode($content, true);

		$Student_ID = $Adding['Student_ID'];
		$Teacher_ID = $Adding['Teacher_ID'];
		$Add_Withdraw = $Adding['Add_Withdraw'];
    $Subject_ID = $Adding['Subject_ID'];
		$Instructor = $Adding['Instructor'];
		$Year_ID = $Adding['Year_ID'];
		$Term = $Adding['Term'];
		$Date = $Adding['Date'];

		// check duplicate Student_ID, Subject_ID And Year_ID
		$sql = "SELECT Student_ID, Subject_ID, Year_ID FROM adding_withdrawing WHERE (Subject_ID = '$Subject_ID' AND Year_ID = '$Year_ID') AND Student_ID = '$Student_ID'";
		$result = $conn->query($sql);
		if($result->num_rows > 0) {
			echo json_encode(['status'=>'error','message'=>'ข้อมูลซ้ำ กรณาเพิ่มใหม่อีกครั้ง']);
			exit();
		}

		// insert data
		$sql = "INSERT INTO `adding_withdrawing` (`Student_ID`,`Teacher_ID`,`Add_Withdraw`,`Subject_ID`,`Instructor`,`Year_ID`,`Term`,`Date`)
				VALUES ('$Student_ID','$Teacher_ID','$Add_Withdraw','$Subject_ID','$Instructor','$Year_ID','$Term','$Date')";
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