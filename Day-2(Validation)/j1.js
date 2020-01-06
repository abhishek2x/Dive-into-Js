function validate(){
    var u = document.getElementById("uname");
    var p = document.getElementById("pass");

    if(u.value == "" || p.value == ""){
        alert("You can't leave it empty");
        return false;
    }
    else{
        true;
    }
}