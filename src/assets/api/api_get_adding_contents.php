<?php
  header('Access-Control-Allow-Origin: *');

  include('./db_connect.php');

  $sql = "SELECT adding_withdrawing.Add_With_ID,
  adding_withdrawing.Student_ID,
  student.Student_Name,
  student.Edu_Level_ID,
  education_level.Edu_Level_Name,
  student.Year,
  student.Faculty_ID,
  faculty.Faculty_Name,
  student.Brand_ID,
  brand.Brand_Name,
  student.Field_of_Study_ID,
  field_of_study.Field_of_Study_Name,
  student.Sec_ID,
  sec.Sec_Name,
  student.Institution_ID,
  student.Address,
  student.Phone,
  adding_withdrawing.Teacher_ID,
  teacher.Teacher_Name,
  adding_withdrawing.Subject_ID,
  subject.Main_ID,
  subject.Group_ID,
  subject.Subject_Name,
  subject.Subject_Credit,
  subject.Subject_Detail,
  adding_withdrawing.Instructor,
  user.User_ID,
  user.User_Name,
  user.Email,
  user.Password,
  user.Userlevel_ID,
  adding_withdrawing.Date,
  adding_withdrawing.Year_ID,
  year.Year_Name,
  adding_withdrawing.Term,
  adding_withdrawing.Status
  FROM adding_withdrawing 
  INNER JOIN student ON student.Student_ID = adding_withdrawing.Student_ID 
  INNER JOIN education_level ON education_level.Edu_Level_ID = student.Edu_Level_ID 
  INNER JOIN faculty ON faculty.Faculty_ID = student.Faculty_ID 
  INNER JOIN brand ON brand.Brand_ID = student.Brand_ID 
  INNER JOIN field_of_study ON field_of_study.Field_of_Study_ID = student.Field_of_Study_ID 
  INNER JOIN sec ON sec.Sec_ID = student.Sec_ID 
  INNER JOIN teacher ON teacher.Teacher_ID = adding_withdrawing.Teacher_ID 
  INNER JOIN subject ON subject.Subject_ID = adding_withdrawing.Subject_ID
  INNER JOIN year ON year.Year_ID = adding_withdrawing.Year_ID
  INNER JOIN user ON user.User_ID = adding_withdrawing.Student_ID WHERE Status='อนุมัติ' ";
	if(isset($_GET['id'])){
		$sql .= " AND adding_withdrawing.Add_With_ID =".$_GET['id'];
	}
  $sql .= " ORDER BY adding_withdrawing.Add_With_ID";
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