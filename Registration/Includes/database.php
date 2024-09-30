<?php


// Params to connect to a database 
$dbHost = "localhost"; // if using a website need to add different host
$dbUser = "root";
$dbPass = ""; // if using website may need password
$dbName = "phptutorial";

// Connection to database
$conn = mysqli_connect($dbHost, $dbUser, $dbPass, $dbName); // better practice to use mysqli and use ORDER

if (!$conn) {
    die("Dataabase connetion failed!");
}
?>