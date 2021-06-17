<?php
	header('Access-Control-Allow-Origin: *');
	header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
	header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

	include('./db_connect.php');

	$sql = "SELECT subject.Subject_ID, subject.Main_ID, group_main.Main_Name, subject.Group_ID, subject_group.Group_Name, subject.Subject_Name, subject.Subject_Credit, subject.Subject_Detail
		FROM subject
		INNER JOIN
		group_main
		ON subject.Main_ID = group_main.Main_ID
		INNER JOIN
		subject_group
		ON subject.Group_ID = subject_group.Group_ID";

	if($_SERVER['REQUEST_METHOD'] == 'POST'){
		$content = file_get_contents('php://input');
		$Subject = json_decode($content, true);
		
		$txtSearch = $Subject['txtSearch'];
		if(strlen($txtSearch)>0){
			$sql .= " WHERE Subject_ID = '$txtSearch' || 
				Subject_Name like '%$txtSearch%' ||
				Subject_Credit like '%$txtSearch%'
			";
		}
	}

	$sql .= " ORDER BY subject.Group_ID";
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
