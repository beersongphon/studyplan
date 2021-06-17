<?php
	header('Access-Control-Allow-Origin: *');
	header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
	header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

	include('./db_connect.php');
	
	if($_SERVER['REQUEST_METHOD'] == 'POST'){
		$content = file_get_contents('php://input');
		$Adding = json_decode($content, true);

		$Add_With_ID = $Adding['Add_With_ID'];
		$Student_ID = $Adding['Student_ID'];
		$Teacher_ID = $Adding['Teacher_ID'];
		$Add_Withdraw = $Adding['Add_Withdraw'];
		$Subject_ID = $Adding['Subject_ID'];
		$Instructor = $Adding['Instructor'];
		$Year_ID = $Adding['Year_ID'];
		$Term = $Adding['Term'];
		$Date = $Adding['Date'];
		$Status = $Adding['Status'];

		// update data
		$sql = "UPDATE `adding_withdrawing` SET `Student_ID` = '$Student_ID', `Teacher_ID` = '$Teacher_ID', `Add_Withdraw` = '$Add_Withdraw', `Subject_ID` = '$Subject_ID', `Instructor` = '$Instructor', `Year_ID` = '$Year_ID', `Term` = '$Term', `Date` = '$Date', `Status` = '$Status' WHERE `Add_With_ID` = '$Add_With_ID'";
		$result = $conn->query($sql);
		if($result){
			echo json_encode(['status'=>'success','message'=>'ทำการอนุมัติสำเร็จ']);
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