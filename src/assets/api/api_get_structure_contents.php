<?php
  header('Access-Control-Allow-Origin: *');

  include('./db_connect.php');

  $sql = "";

  $output = array();

  if (isset($_GET['title'])) {
    $output['title'] = $_GET['title'];
  }
  if (isset($_GET['id'])) {
    $sql .= "SELECT * FROM structure
          INNER JOIN
          subject
          ON structure.Subject_ID = subject.Subject_ID
          INNER JOIN
          group_main
          ON structure.Main_ID = group_main.Main_ID
          INNER JOIN
          subject_group
          ON structure.Group_ID = subject_group.Group_ID
          WHERE structure.Course_ID = '" . $_GET['id'] . "'";
    $result = $conn->query($sql);
    $arr = array();
    if ($result->num_rows > 0) {
      // output data of each row
      while ($row = $result->fetch_assoc()) {
        array_push($arr, $row);
      }
    } 
    else {
      echo "0 results";
    }
    $output['data'] = $arr;
  }
  echo json_encode($output);
  $conn->close();
?>