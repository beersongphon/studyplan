<?php
	header('Access-Control-Allow-Origin: *');
	header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
	header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

	include('./db_connect.php');
	
	if($_SERVER['REQUEST_METHOD'] == 'POST'){
		$content = file_get_contents('php://input');
		$Student = json_decode($content, true);

		$User_ID = $Student['User_ID'];
		$User_Name = $Student['User_Name'];
		$Edu_Level_ID = $Student['Edu_Level_ID'];
		$Year = $Student['Year'];
		$Faculty_ID = $Student['Faculty_ID'];
		$Brand_ID = $Student['Brand_ID'];
		$Field_of_Study_ID = $Student['Field_of_Study_ID'];
		$Sec_ID = $Student['Sec_ID'];
		$Teacher_ID = $Student['Teacher_ID'];
		$Institution_ID = $Student['Institution_ID'];
		$Address = $Student['Address'];
		$Phone = $Student['Phone'];

		// check duplicate email
		$sql = "SELECT Student_ID FROM student WHERE Student_ID = '$User_ID'";
		$result = $conn->query($sql);
		if($result->num_rows > 0) {
			echo json_encode(['status'=>'error','message'=>'ไม่สามารถเพิ่มได้ รหัสนักศึกษา นี้มีผู้ใช้งานแล้ว']);
			exit();
		}

		// insert data
		$sql = "INSERT INTO `student` (`Student_ID`,`Student_Name`,`Edu_Level_ID`,`Year`,`Faculty_ID`,`Brand_ID`,`Field_of_Study_ID`,`Sec_ID`,`Teacher_ID`,`Institution_ID`,`Address`,`Phone`)
				VALUES ('$User_ID','$User_Name','$Edu_Level_ID','$Year','$Faculty_ID','$Brand_ID','$Field_of_Study_ID','$Sec_ID','$Teacher_ID','$Institution_ID','$Address','$Phone')";
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


