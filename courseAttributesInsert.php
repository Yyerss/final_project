<?php
define("DB_SERVER",'localhost');
define("DB_USERNAME",'Zhanik');
define("DB_PASSWORD",'j1a2k3o4');
define("DB_NAME",'uide');

$conn =  mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

if (!$conn) {
    die("Connection failed: " . $conn->connect_error);
}

if(isset($_POST['courseName'])){
    $courseName = $_POST['courseName'];
    $backgroundColor = $_POST['backgroundColor'];
    $imgSrc = $_POST['imgSrc'];

    $sql = "delete from uide";
    $result = mysqli_query($conn, $sql);
    // $sql = "update uide set course_name = '".$courseName."', course_backrgound = '".$backgroundColor."', course_image = '".$imgSrc."' where id = 1";
    $sql = "insert into uide(id, course_name,course_backrgound, course_image) values (1, '".$courseName."', '".$backgroundColor."','".$imgSrc."')";
    $result = mysqli_query($conn, $sql);

}
?>