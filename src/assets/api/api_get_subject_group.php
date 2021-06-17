
<?php
	header('Access-Control-Allow-Origin: *');
	header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
	header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

	include('./db_connect.php');
	
	$sql = "SELECT subject_group.Group_ID, subject_group.Main_ID, group_main.Main_Name, subject_group.Course_ID, course.Course_Name, subject_group.Group_Name, subject_group.Group_Credit
		FROM subject_group
		INNER JOIN
		group_main
		ON subject_group.Main_ID = group_main.Main_ID
		INNER JOIN
		course
		ON subject_group.Course_ID = course.Course_ID";
	if($_SERVER['REQUEST_METHOD'] == 'POST'){
		$content = file_get_contents('php://input');
		$subject_group = json_decode($content, true);
		
		$txtSearch = $subject_group['txtSearch'];
		if(strlen($txtSearch)>0){
			$sql .= " WHERE Group_ID = '$txtSearch' || 
				
				Group_Name like '%$txtSearch%' ||
				Group_Credit like '%$txtSearch%'
			";
		}
	}

	$sql .= " ORDER BY Group_ID";
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
