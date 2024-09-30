<?php

if (isset($_POST['submit'])) {
    //Add database connection 
    require 'database.php';

    $username = $_POST['f_username'];
    $password = $_POST['f_password'];
    $confirmPass = $_POST['f_confirmPassword'];

    if (empty($username) || empty($password) || empty($confirmPass)) {
        header("Location:../register.php?error=emptyfields&username=" . $username);
        exit();
    } elseif(!preg_match("/^[a-zA-Z0-9]*/", $username)) {
        header("Location:../register.php?error=invalidusername&username=" . $username);
        exit();
    } elseif ($password !== $confirmPass) {
        header("Location:../register.php?error=passwordsdonotmatch&username=" . $username);
        exit();
    } else {
        $sql ="SELECT username FROM users WHERE username = ?";
        $stmt = mysqli_stmt_init($conn);
        if (!mysqli_stmt_prepare($stmt, $sql)) {
            header("Location:../register.php?error=sqlerror".$username);
            exit(); 

         } else {
                mysqli_stmt_bind_param($stmt,"s", $username); //add extra s to check another field
                mysqli_stmt_execute($stmt);
                mysqli_stmt_store_result($stmt);
                $rowCount = mysqli_stmt_num_rows($stmt); 
            
            if ($rowCount > 0) {
                header("Location:../register.php?error=usernametaken".$username);
                exit();
            } else {
                $sql ="INSERT INTO users (username, password) VALUES (?, ?)";  
                $stmt = mysqli_stmt_init($conn);
                if (!mysqli_stmt_prepare($stmt, $sql)) {
                    header("Location:../register.php?error=sqlerror".$username);
                    exit();
              } else {

                    $hashedPass = password_hash($password, PASSWORD_DEFAULT);
                 mysqli_stmt_bind_param($stmt,"ss", $username, $hashedPass); //add extra s to check another field
                 mysqli_stmt_execute($stmt);
                 header("Location:../register.php?success=registered".$username);
                    exit();           

                }
            }
        }

    }
    mysqli_stmt_close($stmt);
    mysqli_close($conn);
}
?>