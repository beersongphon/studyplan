<?php
	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
	header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
	
	include('db_connect.php');
	if($_SERVER['REQUEST_METHOD'] == 'POST'){
		$content = file_get_contents('php://input');
		$user = json_decode($content, true);
		
		$Email = $user['email'];
		$Password = $user['password'];
		
		$sql = "SELECT * FROM user WHERE Email='$Email' AND Password='$Password'";
		$result = $conn->query($sql);
		$arr_data = array();
		if ($result->num_rows > 0) {
			// output data of each row
			while($row = $result->fetch_assoc()) {
				array_push($arr_data,$row);
			}
		}
		echo json_encode($arr_data);
	}
	else{
		echo json_encode(['status'=>'error','message'=>'REQUEST_METHOD Error']);
	}

	// header('Access-Control-Allow-Origin: *');
	// header('Access-Control-Allow-Methods: POST');
	// header('Access-Control-Allow-Headers: Content-Type');
	
	// include("db_connect.php");
	
	// $output = array(
	// 	"status" => "error"
	// );
	
	// if($_SERVER["REQUEST_METHOD"] == "POST"){
	// 	$content = file_get_contents('php://input');
	// 	$user = json_decode($content, true);
		
	// 	$email = $user['email'];
	// 	$password = $user['password'];
	
	// 	//  check duplicate email
	// 	$sql = "SELECT *
	// 			FROM user
	// 			WHERE Email = '$email' AND `Password` = '$password'";
				
	// 	$result =$conn->query($sql);
	// 	if (isset($result) && ($result->num_rows > 0)) {
	// 		$row = $result->fetch_assoc();
	// 		$output['status'] = "success";
	// 		$output['message'] = "Welcome ".$row['User_Name'];
	// 		$output['token'] = $row;
	// 		$output['User_Name'] = $row;
	// 		$output['UserLevel_ID'] = $row['UserLevel_ID'];
	// 	}
	// 	else{
	// 		$output['message'] = "Invalid email or password";
	// 	}
	// }
	// else{
	// 	$output['message'] = "REQUEST_METHOD Error";
	// }
	// echo json_encode($output);
	// $conn->close(); 
?>