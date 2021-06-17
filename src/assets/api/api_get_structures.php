<?php
	header('Access-Control-Allow-Origin: *');
	header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
	header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

	include('./db_connect.php');

	$sql = "SELECT structure.Structure_ID, structure.Subject_ID, structure.Course_ID, structure.Main_ID, group_main.Main_Name, structure.Group_ID, subject_group.Group_Name, subject.Subject_Name, subject.Subject_Credit, subject.Subject_Detail
		FROM structure
		INNER JOIN
		subject
		ON structure.Subject_ID = subject.Subject_ID
		INNER JOIN
		group_main
		ON structure.Main_ID = group_main.Main_ID
		INNER JOIN
		subject_group
		ON structure.Group_ID = subject_group.Group_ID";

	if($_SERVER['REQUEST_METHOD'] == 'POST'){
		$content = file_get_contents('php://input');
		$Subject = json_decode($content, true);
		
		$txtSearch = $Subject['txtSearch'];
		if(strlen($txtSearch)>0){
			$sql .= " WHERE structure.Structure_ID = '$txtSearch' || 
				structure.Subject_ID like '%$txtSearch%' ||
				subject.Subject_Name like '%$txtSearch%'
			";
		}
	}

	$sql .= " ORDER BY structure.Group_ID";
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
