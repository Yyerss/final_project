<?php
define("DB_SERVER",'localhost');
define("DB_USERNAME",'Zhanik');
define("DB_PASSWORD",'j1a2k3o4');
define("DB_NAME",'uide');

$link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

if($link==false) {
    die("Error: couln't connect". mysqli_connect_error());
}

if(isset($_POST['email'])) {
    $email = $_POST['email'];
    $pass = $_POST['password'];

    $sql = "select * from user where email = '".$email."'AND password = '".$pass."' limit 1";
    $result = mysqli_query($link, $sql);
    $data = array();
    
    while ($row = mysqli_fetch_assoc($result)) {
        $data[] = $row;
      }
      $jsonData = json_encode($data);

    if(mysqli_num_rows($result)==1) {
          echo $jsonData;
    }
    else {
        echo "Error";
    }
}
?>