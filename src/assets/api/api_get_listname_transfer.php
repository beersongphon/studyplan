<?php
  header('Access-Control-Allow-Origin: *');

  include('./db_connect.php');
  $sql="SELECT * FROM transfer";
  if(isset($_GET['id'])){
    $sql .= " WHERE transfer.Subject_ID='$empid'";
  }

  $sql = "SELECT DISTINCT
    transfer_detail.Subject_ID,
	subject.Subject_Name,
    COUNT(transfer_detail.Student_ID) AS Student_ID
    FROM
    transfer_detail
	INNER JOIN student
	ON student.Student_ID = transfer_detail.Student_ID
	INNER JOIN subject
	ON subject.Subject_ID = transfer_detail.Subject_ID
	WHERE student.Teacher_ID = '$auth'
    GROUP BY Subject_ID
	ORDER BY Student_ID DESC";


  if ($result = mysqli_query($mysqli, $sql)) {
    $rows = array();
    while ($row = mysqli_fetch_assoc($result)) {
      $rows[] = $row;
    }

    echo json_encode($rows);
  } else {
    http_response_code(404);
  }
?>
