<?php
	header('Access-Control-Allow-Origin: *');

	include('./db_connect.php');
	
	$sql = "SELECT adding_withdrawing.Add_With_ID, adding_withdrawing.Student_ID, student.Student_Name, adding_withdrawing.Teacher_ID, teacher.Teacher_Name, adding_withdrawing.Subject_ID, subject.Subject_Name, adding_withdrawing.Date, adding_withdrawing.Status 
    FROM adding_withdrawing 
    LEFT JOIN student ON student.Student_ID = adding_withdrawing.Student_ID 
    LEFT JOIN teacher ON teacher.Teacher_ID = adding_withdrawing.Teacher_ID 
    LEFT JOIN subject ON subject.Subject_ID = adding_withdrawing.Subject_ID WHERE Status='รอการอนุมัติ' ";
	
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