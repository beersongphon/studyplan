
<?php
  header('Access-Control-Allow-Origin: *');

  include('./db_connect.php');
  
  $postdata = file_get_contents("php://input");
  $empid=$_GET["id"];
  
  $sql="SELECT * FROM transfer";
  if(isset($_GET['id'])){
    $sql .= " WHERE transfer.Subject_ID='$empid'";
  }
  
  if($result = mysqli_query($conn,$sql)) {
    $rows = array();
    while($row = mysqli_fetch_assoc($result)) {
      $rows[] = $row;
    }
  
    echo json_encode($rows);
  }
  else {
    http_response_code(404);
  }
?>