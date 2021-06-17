<?php
	header('Access-Control-Allow-Origin: *');
	header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
	header("Access-Control-Allow-Headers: Content-Type, Authorization, Access-Control-Allow-Headers, X-Requested-With");
  //print_r(apache_request_headers());
	include('./db_connect.php');
  //exit();
  $headers = apache_request_headers();
  $auth = $headers['Authorization'];
	$sql = "SELECT coursetransfer.CourseTransfer_ID, coursetransfer.Student_ID, student.Student_Name, coursetransfer.Transfer_ID, transfer.Transfers_ID, 
    transfer.Transfer_Name, transfer.Transfer_Credit, transfer.Grade, coursetransfer.Subject_ID, subject.Subject_Name, 
    subject.Subject_Credit 
    FROM coursetransfer
    INNER JOIN transfer
    ON transfer.Transfer_ID = coursetransfer.Transfer_ID 
    INNER JOIN student 
    ON student.Student_ID = coursetransfer.Student_ID 
    INNER JOIN subject
    ON subject.Subject_ID = coursetransfer.Subject_ID 
    WHERE student.Teacher_ID = '$auth'";

  if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $content = file_get_contents('php://input');
    $Subject = json_decode($content, true);
    
    $txtSearch = $Subject['txtSearch'];
    if(strlen($txtSearch)>0){
      $sql .= " AND coursetransfer.CourseTransfer_ID = '$txtSearch' || 
        coursetransfer.Student_ID like '%$txtSearch%'
      ";
    }
  }

	$sql .= " ORDER BY CourseTransfer_ID";
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
