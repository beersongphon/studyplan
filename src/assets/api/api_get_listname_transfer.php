<?php
  header('Access-Control-Allow-Origin: *');

  include("./db_connect.php");

  $sql = "";

  $output = array();

  if (isset($_GET['title'])) {
    $output['title'] = $_GET['title'];
  }
  if (isset($_GET['id'])) {
    $sql .= "SELECT
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
          ON subject.Subject_ID = transfer_detail.Subject_ID
          WHERE transfer_detail.Subject_ID = '" . $_GET['id'] . "'";
    $sql .= " ORDER BY Student_ID DESC";
    $result = $conn->query($sql);
    $arr = array();
    if ($result->num_rows > 0) {
      // output data of each row
      while ($row = $result->fetch_assoc()) {
        array_push($arr, $row);
      }
    } else {
      echo "0 results";
    }
    $output['data'] = $arr;
  }
  echo json_encode($output);
  $conn->close();

  // header('Access-Control-Allow-Origin: *');

  // include('./db_connect.php');

  // $id=$_GET["id"];

  // $sql="SELECT
  // transfer_detail.Subject_ID,
  // subject.Subject_Name,
  // transfer_detail.Student_ID,
  // student.Student_Name,
  // sec.Sec_Name
  // FROM
  // transfer_detail
  // INNER JOIN student
  // ON student.Student_ID = transfer_detail.Student_ID
  // INNER JOIN sec
  // ON sec.Sec_ID = student.Sec_ID
  // INNER JOIN subject
  // ON subject.Subject_ID = transfer_detail.Subject_ID";

  // if(isset($_GET['id'])){
  //   $sql .= " WHERE transfer_detail.Subject_ID='$id'";
  // }

  // $sql .= " ORDER BY Student_ID DESC";
  // if ($result = mysqli_query($conn, $sql)) {
  //   $rows = array();
  //   while ($row = mysqli_fetch_assoc($result)) {
  //     $rows[] = $row;
  //   }

  //   echo json_encode($rows);
  // } else {
  //   http_response_code(404);
  // }
?>
