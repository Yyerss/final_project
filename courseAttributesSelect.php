<?php
define("DB_SERVER",'localhost');
define("DB_USERNAME",'Zhanik');
define("DB_PASSWORD",'j1a2k3o4');
define("DB_NAME",'uide');

$link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

if($link==false) {
    die("Error: couln't connect". mysqli_connect_error());
}

    $sql = "select * from uide where id = (SELECT MAX(id) FROM uide)";

    $result = mysqli_query($link, $sql);

    $data = array();

    while ($row = mysqli_fetch_assoc($result)) {
        $data[] = $row;
      }
      $jsonData = json_encode($data);
      echo $jsonData;
?>