<?php
$email= $_POST["email"];
$password= $_POST["password"];
$message="";
echo "llego a search";
require("Connection.php");
$sql = "SELECT name FROM users where email = '%$email%' and password= '%$password%' ";

//$sql= "INSERT INTO `users`( `name`, `lastname`, `email`, `number`, `password`) VALUES ('$name','$last_name','$email','$number','$password')";
echo "realizo el insert";
$res =mysqli_query($connection, $sql); //mysql_query($sql);
$message=$res['name'];
    if ( isset( $res ) )
     
		echo "Bienvenido +$message";
	else
        echo "Usuario no registrado";
       
?>