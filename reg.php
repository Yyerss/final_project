<?php
define("DB_SERVER",'localhost');
define("DB_USERNAME",'Zhanik');
define("DB_PASSWORD",'j1a2k3o4');
define("DB_NAME",'uide');

$link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

if($link==false) {
    die("Error: couln't connect". mysqli_connect_error());
}

if(isset($_POST['name'])){
    $uname = $_POST['name'];
    $usurname = $_POST['surname'];
    $email = $_POST['email'];
    $uage = $_POST['age'];
    $uabout = $_POST['about'];
    $uinsta = $_POST['insta'];
    $pass = $_POST['password'];
    


    $sql = "insert into user(id, name, surname, email, about_user, user_insta, age, password) values (NULL, '".$uname."', '".$usurname."','".$email."','".$uabout."','".$uinsta."','".$uage."','".$pass."')";
    
    $result = mysqli_query($link, $sql);

    if($result){
        echo "Success!";
        exit();
    }
    else{
        echo "Wrong!";
    }
}
?>