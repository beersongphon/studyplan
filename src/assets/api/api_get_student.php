<?php
	header('Access-Control-Allow-Origin: *');
	header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
	header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

	include('./db_connect.php');

	$sql = "SELECT * FROM (
				SELECT student.Student_ID AS User_ID, student.Student_Name AS User_Name, student.Edu_Level_ID, education_level.Edu_Level_Name, student.Year, student.Faculty_ID, faculty.Faculty_Name, student.Brand_ID, brand.Brand_Name, student.Field_of_Study_ID, field_of_study.Field_of_Study_Name, student.Sec_ID, sec.Sec_Name, student.Teacher_ID, teacher.Teacher_Name, student.Institution_ID, institution.Institution_Name, student.Address, student.Phone, user.Email, user.Password, user.Userlevel_ID 
				FROM student 
				LEFT JOIN education_level 
				ON education_level.Edu_Level_ID = student.Edu_Level_ID
				LEFT JOIN faculty 
				ON faculty.Faculty_ID = student.Faculty_ID
				LEFT JOIN brand 
				ON brand.Brand_ID = student.Brand_ID
				LEFT JOIN field_of_study 
				ON field_of_study.Field_of_Study_ID = student.Field_of_Study_ID
				LEFT JOIN sec 
				ON sec.Sec_ID = student.Sec_ID
				LEFT JOIN teacher 
				ON teacher.Teacher_ID = student.Teacher_ID
				LEFT JOIN institution 
				ON institution.Institution_ID = student.Institution_ID
				LEFT JOIN user 
				ON user.User_ID = student.Student_ID
			) AS student";

	if($_SERVER['REQUEST_METHOD'] == 'POST'){
		$content = file_get_contents('php://input');
		$Student = json_decode($content, true);
		
		$txtSearch = $Student['txtSearch'];
		if(strlen($txtSearch)>0){
			$sql .= " WHERE User_ID = '$txtSearch' || 
				User_Name like '%$txtSearch%' ||
				Phone like '%$txtSearch%' ||
				Email like '%$txtSearch%'
			";
		}
	}

	$sql .= " ORDER BY User_ID";
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
