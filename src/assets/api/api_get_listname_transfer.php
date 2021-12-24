<?php
  header('Access-Control-Allow-Origin: *');

  include('./db_connect.php');

  $id=$_GET["id"];

  $sql="SELECT
  transfer_detail.Subject_ID,
  subject.Subject_Name,
  transfer_detail.Student_ID,
  student.Student_Name,
  sec.Sec_Name
  FROM
  transfer_detail
  INNER JOIN student
  ON student.Student_ID = transfer_detail.Student_ID
  INNER JOIN sec
  ON sec.Sec_ID = student.Sec_ID
  INNER JOIN subject
  ON subject.Subject_ID = transfer_detail.Subject_ID";

  if(isset($_GET['id'])){
    $sql .= " WHERE transfer_detail.Subject_ID='$id'";
  }

  $sql .= " ORDER BY Student_ID DESC";
  if ($result = mysqli_query($conn, $sql)) {
    $rows = array();
    while ($row = mysqli_fetch_assoc($result)) {
      $rows[] = $row;
    }

    echo json_encode($rows);
  } else {
    http_response_code(404);
  }
?>
