<?php
	header('Access-Control-Allow-Origin: *');
	header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
	header("Access-Control-Allow-Headers: Content-Type, Authorization, Access-Control-Allow-Headers, X-Requested-With");
    //print_r(apache_request_headers());
    include('./db_connect.php');
    //exit();
    $headers = apache_request_headers();
    $auth = $headers['Authorization'];
	$sql = "SELECT *
		FROM student
		INNER JOIN education_level 
		ON education_level.Edu_Level_ID = student.Edu_Level_ID
        INNER JOIN faculty 
		ON faculty.Faculty_ID = student.Faculty_ID
        INNER JOIN brand 
		ON brand.Brand_ID = student.Brand_ID
        INNER JOIN field_of_study 
		ON field_of_study.Field_of_Study_ID = student.Field_of_Study_ID
        INNER JOIN sec 
		ON sec.Sec_ID = student.Sec_ID
		INNER JOIN teacher 
		ON teacher.Teacher_ID = student.Teacher_ID
		INNER JOIN institution 
		ON institution.Institution_ID = student.Institution_ID
		INNER JOIN user 
		ON user.User_ID = student.Student_ID
        WHERE student.Student_ID = '$auth'";

	$sql .= " ORDER BY Student_ID";
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


