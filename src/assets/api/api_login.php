<?php
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: POST');
  header('Access-Control-Allow-Headers: Content-Type');

  include("db_connect.php");

  $output = array(
    "status" => "error"
  );

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $content = file_get_contents('php://input');
    $user = json_decode($content, true);

    $Email = $user['email'];
    $Password = $user['password'];

    //  check duplicate email
    $sql = "SELECT * FROM user WHERE Email = '$Email' AND `Password` = '$Password'";

    $result = $conn->query($sql);
    if (isset($result) && ($result->num_rows > 0)) {
      $row = $result->fetch_assoc();
      $output['status'] = "success";
      $output['message'] = "Welcome " . $row['User_Name'];
      $output['data'] = $row['User_ID'];
      $output['userlevel_id'] = $row['Userlevel_ID'];
    } else {
      $output['message'] = "Invalid email or password";
    }
  } else {
    $output['message'] = "REQUEST_METHOD Error";
  }
  echo json_encode($output);
  $conn->close();
?>