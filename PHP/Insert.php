<?php
$name= $_POST["name"];
$last_name= $_POST["last_name"];
$email= $_POST["email"];
$number= $_POST["number"];
$password= $_POST["password"];
echo $name +""+$last_name+""+$email+""+$number+""+$password;
require("Connection.php");
$sql= "INSERT INTO `users`(`id`, `name`, `last_name`, `email`, `number`, `password`) VALUES ($id, $name,$last_name,$email,$number,$password)";
mysqli_query($connection, $sql);
$res = mysql_query($sql);
	if ( isset( $res ) )
		echo "correcto";
	else
		echo "error";
?>