function Users(name, lastname,  number, email, password, action){
this.name=name;
this.lastname=lastname;
this.number=number;
this.email=email;
this.password=password
this.action=action;
}
Users.prototype.AddUser= function(){
    console.log(this.name+" "+this.lastname+" "+this.email+" "+this.number+" "+this.password);

    $.ajax({
       type:"POST",
    url: this.action,
    data:{name:this.name,lastname: this.lastname, number: this.number, email:this.email, password:this.password},
    success:  function(response){
        alert(response);
    }  
});
}