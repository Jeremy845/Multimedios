 function getData(){

var name = document.getElementById("name").value;
var lastname = document.getElementById("lastname").value;
var email= document.getElementById("email").value;
var number= document.getElementById("number").value;
var password= document.getElementById("pass").value;
var confirm_password= document.getElementById("confpass").value;
var user = new Users(name,lastname,number,email,password, "../PHP/Insert.php"); 
user.AddUser();
console.log(name+" "+lastname+" "+email+" "+number+" "+password+" "+confirm_password);

}
getData();
