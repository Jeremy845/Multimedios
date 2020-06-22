<?php
$name= $_POST["name"];
$last_name= $_POST["lastname"];
$email= $_POST["email"];
$number= $_POST["number"];
$password= $_POST["password"];
//echo $name +$last_name+$email+""+$number+""+$password;
require("Connection.php");
$sql= "INSERT INTO `users`( `name`, `lastname`, `email`, `number`, `password`) VALUES ('$name','$last_name','$email','$number','$password')";
//echo "realizo el insert";
$res =mysqli_query($connection, $sql); //mysql_query($sql);
	if ( isset( $res ) )
		echo "Sus datos se han registrado correctamente";
	else
		echo "Hubo un error al registrar sus datos";
?>