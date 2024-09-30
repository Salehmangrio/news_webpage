<?php
//How to recieve emails


if (isset($_POST['submit'])) {
    $name = trim($_POST['f_name']);
    $topic = trim($_POST['f_topic']);
    $email = trim($_POST['f_email']);
    $url = trim($_POST['f_url']);
    $category = trim($_POST['f_category']);
    $option = trim($_POST['f_option']);
    $url2 = trim($_POST['ff_url']);
    $message = trim($_POST['f_message']);
    


    $myMail = "ruth.o2009@live.co.uk";
    $header = "From: ". $email;
    $message2 = "You have recieved a message from". $name . ".\n\n" . $topic. ".\n\n" . $email . ".\n\n" . $url . ".\n\n" . $category. ".\n\n" . $option . ".\n\n" . $url2. ".\n\n" . $message;
    
    
    //1. Email you're sending it to
    //2. Subject
    //3. Is the message

    mail($myMail, $subject, $message2, $header);
    header("Location: index.php?mailsent");

}

?>

