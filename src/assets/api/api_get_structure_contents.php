<?php
  header('Access-Control-Allow-Origin: *');

  include('./db_connect.php');

  $sql = "SELECT * FROM structure
  INNER JOIN
  subject
  ON structure.Subject_ID = subject.Subject_ID
  INNER JOIN
  group_main
  ON structure.Main_ID = group_main.Main_ID
  INNER JOIN
  subject_group
  ON structure.Group_ID = subject_group.Group_ID";
	if(isset($_GET['id'])){
		$sql .= " WHERE structure.Course_ID=".$_GET['id'];
	}
  $sql .= " ORDER BY structure.Group_ID";
  $result = $conn->query($sql);
  $arr = array();
  if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
      array_push($arr,$row);
    }
  } 
  else {
    echo "0 results";
  }
  echo json_encode($arr);
  $conn->close();
?>