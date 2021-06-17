<?php
	header('Access-Control-Allow-Origin: *');
	header("Access-Control-Allow-Headers: Content-Type, Authorization, Access-Control-Allow-Headers, X-Requested-With");
	//print_r(apache_request_headers());
	include('./db_connect.php');
	//exit();
	$headers = apache_request_headers();
	$auth = $headers['Authorization'];
    $sql = "SELECT DISTINCT 
    transfer_detail.Subject_ID,
	subject.Subject_Name,
    COUNT(transfer_detail.Student_ID) AS Student_ID 
    FROM 
    transfer_detail 
	INNER JOIN student 
	ON student.Student_ID = transfer_detail.Student_ID 
	INNER JOIN subject
	ON subject.Subject_ID = transfer_detail.Subject_ID 
	WHERE student.Teacher_ID = '$auth'
    GROUP BY Subject_ID
	ORDER BY Student_ID DESC";
	
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
