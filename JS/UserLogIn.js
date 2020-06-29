function getLoginData(){
  
    var email= document.getElementById("email").value;
    var password= document.getElementById("password").value;
    var user= new SearchUsers(email, password, "../PHP/Search.php")
    user.searchUsers();
    console.log( email+"  "+password );
}
//getLoginData();