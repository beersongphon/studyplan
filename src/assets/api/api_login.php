<?php
	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
	header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
	
	include('db_connect.php');
	if($_SERVER['REQUEST_METHOD'] == 'POST'){
		$content = file_get_contents("php://input");
		$request = json_decode($content);
		if(isset($content) && !empty($content))
		{
			$email = mysqli_real_escape_string($conn, trim($request->Username));
			$password = mysqli_real_escape_string($conn, trim($request->Password));
			$sql='';
			$sql = "SELECT * FROM user WHERE Email='$email' AND Password='$password'";
			if($result = mysqli_query($conn, $sql))
			{
				$rows = array();
				while($row = mysqli_fetch_assoc($result))
				{
					$rows[] = $row;
				}
	
				echo json_encode($rows);
			}
		else
			{
			http_response_code(404);
			}
		}
	}
	else{
		echo json_encode(['status'=>'error','message'=>'REQUEST_METHOD Error']);
	}
?>