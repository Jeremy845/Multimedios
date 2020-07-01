function SearchUsers(email, password,action){
this.email=email;
this.password=password;
this.action=action;
}
SearchUsers.prototype.searchUser=function(){
    $.post(this.action, {email:this.email, password:this.password},function(response){
        $("#userName").html(response);
    });
}
