<?php
	header('Access-Control-Allow-Origin: *');
	header("Access-Control-Allow-Headers: Content-Type, Authorization, Access-Control-Allow-Headers, X-Requested-With");
  //print_r(apache_request_headers());
	include('./db_connect.php');
  //exit();
  $headers = apache_request_headers();
  $auth = $headers['Authorization'];
  $sql = "SELECT transfer_detail.Transfer_ID, transfer.Date, transfer_detail.Student_ID, student.Student_Name, 
	transfer_detail.Subject_Ins_ID, subject_of_institution.Subject_Ins_Name, subject_of_institution.Subject_Ins_Credit, transfer_detail.Grade, 
	transfer_detail.Subject_ID, subject.Subject_Name, 
	subject.Subject_Credit, transfer.Transfer_Grade
	FROM transfer_detail
	INNER JOIN transfer
	ON transfer.Transfer_ID = transfer_detail.Transfer_ID 
	INNER JOIN student 
	ON student.Student_ID = transfer_detail.Student_ID 
	INNER JOIN subject
	ON subject.Subject_ID = transfer_detail.Subject_ID 
	INNER JOIN subject_of_institution
	ON subject_of_institution.Subject_Ins_ID = transfer_detail.Subject_Ins_ID 
  WHERE student.Teacher_ID = '$auth'";

  $sql .= " ORDER BY transfer_detail.Transfer_ID";
  $result = $conn->query($sql);
  $arr_data = array();
  if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
    array_push($arr_data,$row);
    }
  } 
  else {
    echo "0 results";
  }

  echo json_encode($arr_data);
  $conn->close();
?>
