<?php
	header('Access-Control-Allow-Origin: *');
	header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
	header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

	include('./db_connect.php');

	$sql = "SELECT teacher.Teacher_ID AS User_ID, teacher.Teacher_Name AS User_Name, teacher.Address, teacher.Phone, user.Email, user.Password, user.Userlevel_ID 
	FROM teacher 
	INNER JOIN user 
	ON user.User_ID = teacher.Teacher_ID";

	if($_SERVER['REQUEST_METHOD'] == 'POST'){
		$content = file_get_contents('php://input');
		$teacher = json_decode($content, true);
		
		$txtSearch = $teacher['txtSearch'];
		if(strlen($txtSearch)>0){
			$sql .= " WHERE User_ID = '$txtSearch' || 
				User_Name like '%$txtSearch%'
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
