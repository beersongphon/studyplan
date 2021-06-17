<?php
	header('Access-Control-Allow-Origin: *');
	header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
	header("Access-Control-Allow-Headers: Content-Type, Authorization, Access-Control-Allow-Headers, X-Requested-With");
    //print_r(apache_request_headers());
    include('./db_connect.php');
    //exit();
    $headers = apache_request_headers();
    $auth = $headers['Authorization'];
	$sql = "SELECT user.User_ID, user.User_Name, user.Email, user.Password, user.Userlevel_ID, userlevel.Userlevel_Name
		FROM user
		INNER JOIN
		userlevel
		ON user.Userlevel_ID = userlevel.Userlevel_ID
        WHERE user.User_ID = '$auth'";
	if($_SERVER['REQUEST_METHOD'] == 'POST'){
		$content = file_get_contents('php://input');
		$user = json_decode($content, true);
		
		$txtSearch = $user['txtSearch'];
		if(strlen($txtSearch)>0){
			$sql .= " AND User_ID = '$txtSearch' || 
				User_Name like '%$txtSearch%' ||
				Email like '%$txtSearch%' ||
				Userlevel_Name like '%$txtSearch%'
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


