<?php
$firstname=$_POST['fname'];
echo "<h2>Welcome dear $firstname, Congrats!!<br><br>Your Account has been created!</h2><br>";
$lastname=$_POST['lname'];
echo "<h3 style='color:purple'>Your LastName Is: $lastname</h3><br>";
$phone=$_POST['phone'];
echo "<h3 style='color:purple'>Your Phone Number Is: $phone</h3><br>";
$email=$_POST['email'];
echo "<h3 style='color:purple'>Your Email address Is: $email</h3><br>";
$username=$_POST['username'];
echo "<h3 style='color:purple'>Your UserName Is: $username</h3><br>";
?>