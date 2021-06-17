<?php
	header('Access-Control-Allow-Origin: *');
	header("Access-Control-Allow-Headers: Content-Type, Authorization, Access-Control-Allow-Headers, X-Requested-With");
	
	//print_r(apache_request_headers());
	include('./db_connect.php');
	//exit();
	$headers = apache_request_headers();
	$auth = $headers['Authorization'];
	$sql = "SELECT adding_withdrawing.Add_With_ID, adding_withdrawing.Student_ID, student.Student_Name, adding_withdrawing.Teacher_ID, teacher.Teacher_Name, adding_withdrawing.Add_Withdraw, adding_withdrawing.Subject_ID, subject.Subject_Name, adding_withdrawing.Date, adding_withdrawing.Year_ID, year.Year_Name, adding_withdrawing.Term, adding_withdrawing.Status 
	FROM adding_withdrawing 
	INNER JOIN student ON student.Student_ID = adding_withdrawing.Student_ID 
	INNER JOIN teacher ON teacher.Teacher_ID = adding_withdrawing.Teacher_ID 
	INNER JOIN subject ON subject.Subject_ID = adding_withdrawing.Subject_ID 
	INNER JOIN year ON year.Year_ID = adding_withdrawing.Year_ID 
	WHERE student.Student_ID = '$auth' AND Status='อนุมัติ' ";
	
	$result = $conn->query($sql);
	$arr_data = array();
	if ($result->num_rows > 0) {
	  // output data of each row
	  while($row = $result->fetch_assoc()) {
		array_push($arr_data,$row);
	  }
	}
	echo json_encode($arr_data);
	$conn->close();
?>