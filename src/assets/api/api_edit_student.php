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

		// update data
		$sql = "UPDATE `student` SET `Student_Name` = '$User_Name', `Edu_Level_ID` = '$Edu_Level_ID', `Year` = '$Year',  `Faculty_ID` = '$Faculty_ID', `Brand_ID` = '$Brand_ID', `Field_of_Study_ID` = '$Field_of_Study_ID', `Sec_ID` = '$Sec_ID', `Teacher_ID` = '$Teacher_ID', `Institution_ID` = '$Institution_ID', `Address` = '$Address', `Phone` = '$Phone' WHERE `Student_ID` = '$User_ID'";
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


