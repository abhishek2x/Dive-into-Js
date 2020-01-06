function validate(){
    u = document.getElementById("uname");
    p = document.getElementById("pass");

    if(u.value.trim() == 0){
        // alert("Username can't be blank");
        u.style.border = "solid 3px red"
        document.getElementById("check").style.visibility = "visible";
        return false;
    }
    else if(p.value.trim() == 0){
        // alert("Password can't be blank");
        p.style.border = "solid 3px red";
        document.getElementById("leck").style.visibility = "visible";
        return false;
    }
    else if(p.value.trim().length < 5){
        // alert("Password too easy");
        p.style.border = "solid 3px red"
        document.getElementById("leck").style.visibility = "visible";
        return false;
    }
    else{
        return true;
    }
}